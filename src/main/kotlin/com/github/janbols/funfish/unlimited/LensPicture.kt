package com.github.janbols.funfish.unlimited

import com.github.janbols.funfish.*
import com.github.janbols.funfish.limited.*
import com.github.janbols.funfish.unlimited.Lenses.flip
import com.github.janbols.funfish.unlimited.Lenses.rehue
import com.github.janbols.funfish.unlimited.Lenses.splitHorizontally
import com.github.janbols.funfish.unlimited.Lenses.splitVertically
import com.github.janbols.funfish.unlimited.Lenses.toss
import com.github.janbols.funfish.unlimited.Lenses.turn


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
        shapes.map(mapNamedShape(lens))
    }


}



fun getDefaultColor(name: String, hue: Hue): StyleColor =
        if (name == "secondary") {
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

fun getFillPathColor(name: String, hue: Hue): StyleColor = when (hue) {
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

fun getPathStyle(name: String, sw: Double, hue: Hue): Style =
        when (hue) {
            Hue.Hollow -> Style(StrokeStyle(sw, getFillPathColor("secondary", hue)), if (isInnerEye(name)) FillStyle(StyleColor.Black) else null)
            else -> Style(if (isOuterEye(name)) StrokeStyle(sw, getFillPathColor("secondary", hue)) else null, FillStyle(getFillPathColor(name, hue)))
        }

fun mapNamedShape(lens: Lens): (Pair<String, Shape>) -> Pair<Shape, Style> = { pair ->
    val (box, hue) = lens
    val (name, shape) = pair
    val m = (::mapper)(box)
    val sw = getStrokeWidth(box)
    val style = when (shape) {
        is Path -> getPathStyle(name, sw, hue)
        is Circle -> getCircleStyle(name, sw, hue)
        else -> getDefaultStyle(name, sw, hue)
    }
    Pair(mapShape(m)(shape), style)
}


