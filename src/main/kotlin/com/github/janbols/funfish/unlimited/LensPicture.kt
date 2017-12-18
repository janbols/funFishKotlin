package com.github.janbols.funfish.unlimited

import com.github.janbols.funfish.*
import com.github.janbols.funfish.limited.*
import com.github.janbols.funfish.unlimited.Lenses.flip
import com.github.janbols.funfish.unlimited.Lenses.rehue
import com.github.janbols.funfish.unlimited.Lenses.splitHorizontally
import com.github.janbols.funfish.unlimited.Lenses.splitVertically
import com.github.janbols.funfish.unlimited.Lenses.toss
import com.github.janbols.funfish.unlimited.Lenses.turn
import kotlin.math.min


typealias LensPicture = (Lens) -> List<Pair<Shape, Style>>

object LensPictures {

    fun turn(p: LensPicture): LensPicture = { turn(it) pipe p }

    fun flip(p: LensPicture): LensPicture = { flip(it) pipe p }

    fun toss(p: LensPicture): LensPicture = { toss(it) pipe p }

    fun besideRatio(m: Int, n: Int, p1: LensPicture, p2: LensPicture): LensPicture = { lens ->
        val factor = m.toDouble() / (m + n).toDouble()
        val (b1, b2) = splitVertically(factor, lens)
        p1(b1) + p2(b2)
    }

    val beside: (LensPicture, LensPicture) -> LensPicture = { p1, p2 -> besideRatio(1, 1, p1, p2) }

    fun aboveRatio(m: Int, n: Int, p1: LensPicture, p2: LensPicture): LensPicture = { lens ->
        val factor = m.toDouble() / (m + n).toDouble()
        val (b1, b2) = splitHorizontally(factor, lens)
        p1(b1) + p2(b2)
    }

    val above: (LensPicture, LensPicture) -> LensPicture = { p1, p2 -> aboveRatio(1, 1, p1, p2) }

    fun over(p1: LensPicture, p2: LensPicture): LensPicture = { lens -> p1(lens) + p2(lens) }

    fun rehue(p: LensPicture): LensPicture = { lens -> rehue(lens) pipe p  }

    fun createLensPicture(shapes: List<Pair<String, Shape>>): LensPicture = createLensPicture(*shapes.toTypedArray())
    fun createLensPicture(vararg shapes: Pair<String, Shape>): LensPicture = { lens ->
        shapes.map(mapMaybeNamedShape(lens))
                .filterNotNull()
    }


}



fun getDefaultColor(name: String, hue: Hue): StyleColor =
        if (name == "secondary" || name == "tail-fin" || name == "fin-stem" || name == "fin-details" || name == "main-spine") {
            when (hue) {
                Hue.Blackish -> StyleColor.White
                Hue.Greyish -> StyleColor.White
                Hue.Whiteish -> StyleColor.Black
                Hue.Hollow -> StyleColor.Black
            }
        } else {
            when (hue) {
                Hue.Blackish -> StyleColor.Black
                Hue.Greyish -> StyleColor.Grey
                Hue.Whiteish -> StyleColor.White
                Hue.Hollow -> StyleColor.White
            }
        }


fun getDefaultStyle(name: String, sw: Double, hue: Hue): Style = Style(StrokeStyle(sw, getDefaultColor(name, hue)), null)

fun getCircleStyle(name: String, sw: Double, hue: Hue): Style = Style(null, FillStyle(getDefaultColor(name, hue)))

fun isInnerEye(name: String): Boolean = name.endsWith("-inner")

fun isOuterEye(name: String): Boolean = name.endsWith("-outer")

fun getColor(name: String, hue: Hue): StyleColor = when (hue) {
    Hue.Blackish -> when {
        name == "primary" -> StyleColor.Black
        isOuterEye(name) -> StyleColor.White
        isInnerEye(name) -> StyleColor.Black
        else -> StyleColor.White
    }
    Hue.Greyish -> when {
        name == "primary" -> StyleColor.Grey
        isOuterEye(name) -> StyleColor.White
        isInnerEye(name) -> StyleColor.Grey
        else -> StyleColor.White
    }
    Hue.Whiteish -> when {
        name == "primary" -> StyleColor.White
        isOuterEye(name) -> StyleColor.White
        isInnerEye(name) -> StyleColor.Black
        else -> StyleColor.Black
    }
    Hue.Hollow -> when {
        name == "primary" -> StyleColor.White
        isOuterEye(name) -> StyleColor.White
        isInnerEye(name) -> StyleColor.Black
        else -> StyleColor.Black
    }
}

fun getEyeLiner(sw: Double, hue: Hue): StrokeStyle = StrokeStyle(sw, getColor("secondary", hue))

fun getPathStyle(name: String, sw: Double, hue: Hue): Style =
        when (hue) {
            Hue.Hollow -> Style(getEyeLiner(sw, hue), if (isInnerEye(name)) FillStyle(StyleColor.Black) else null)
            else -> Style(if (isOuterEye(name)) getEyeLiner(sw, hue) else null, FillStyle(getColor(name, hue)))
        }


fun getLineStyle(name: String, sw: Double, hue: Hue): Style =
        if (name == "control-point") Style(StrokeStyle(0.5, StyleColor.Red), null)
        else getDefaultStyle(name, sw, hue)


fun mapNamedShape(lens: Lens): (Pair<String, Shape>) -> Pair<Shape, Style> = { pair ->
    val (box, hue) = lens
    val (name, shape) = pair
    val m = (::mapper)(box)
    val sw = getStrokeWidth(box)
    when (shape) {
        is Polygon -> Pair(Polygon(shape.points.map(m)), getDefaultStyle(name, sw, hue))
        is Curve -> Pair(Curve(m(shape.point1), m(shape.point2), m(shape.point3), m(shape.point4)), getDefaultStyle(name, sw, hue))
        is Path -> {
            val style = getPathStyle(name, sw, hue)
            val style2 =
                    if (name == "egg-eye-inner" && min(box.b.size(), box.c.size()) < 200.0) style.copy(stroke = StrokeStyle(2.0 * sw, StyleColor.Black))
                    else style
            Pair(Path(m(shape.start), shape.beziers.map(mapBezier(m))), style2)
        }
        is Line -> Pair(Line(m(shape.lineStart), m(shape.lineEnd)), getLineStyle(name, sw, hue))
        is Circle -> Pair(Circle(m(shape.center), m(shape.radius) - box.a), getCircleStyle(name, sw, hue))
    }
}


fun mapMaybeNamedShape(lens: Lens): (Pair<String, Shape>) -> Pair<Shape, Style>? = { pair ->
    val boxSize = min(lens.box.b.size(), lens.box.c.size())
    if (pair.first == "egg-eye-inner" && boxSize < 60.0) null
    else if (pair.first == "egg-eye-outer" && boxSize < 200.0) null
    else if (pair.first == "tail-fin" && boxSize < 200.0) null
    else if (pair.first == "fin-details" && boxSize < 100.0) null
    else if (pair.first == "fin-stem" && boxSize < 60.0) null
    else if (pair.first == "main-spine" && boxSize < 100.0) null
    else mapNamedShape(lens)(pair)
}
