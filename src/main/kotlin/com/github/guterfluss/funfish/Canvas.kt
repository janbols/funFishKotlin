package com.github.guterfluss.funfish

import com.github.guterfluss.funfish.StyleColor.*
import org.w3c.dom.CanvasRenderingContext2D
import kotlin.math.min


fun mapper(box: Box, v: Vector): Vector = box.a + (box.b * v.x) + (box.c * v.y)

fun mapShape(m: (Vector) -> Vector): (Shape) -> Shape = {
    when (it) {
        is Polygon -> Polygon(it.points.map(m))
        is Curve -> Curve(m(it.point1), m(it.point2), m(it.point3), m(it.point4))
        is Path -> {
            val bezierMapper: (Bezier) -> Bezier = { Bezier(m(it.controlPoint1), m(it.controlPoint2), m(it.endPoint)) }
            Path(m(it.start), it.beziers.map(bezierMapper))
        }
        is Line -> Line(m(it.lineStart), m(it.lineEnd))
        is Circle -> {
            val cNew = m(it.center)
            val rNew = m(it.radius) - cNew
            Circle(cNew, rNew)
        }
    }
}


fun getStrokeWidth(box: Box): Double = min(box.b.size(), box.c.size()) / 80


fun mapBezier(m: (Vector) -> Vector): (Bezier) -> Bezier = {
    Bezier(m(it.controlPoint1), m(it.controlPoint2), m(it.endPoint))
}


fun getDefaultColor(name: String, hue: Hue): StyleColor =
        if (name == "secondary" || name == "tail-fin" || name == "fin-stem" || name == "fin-details" || name == "main-spine") {
            when (hue) {
                Hue.Blackish -> White
                Hue.Greyish -> White
                Hue.Whiteish -> Black
                Hue.Hollow -> Black
            }
        } else {
            when (hue) {
                Hue.Blackish -> Black
                Hue.Greyish -> Grey
                Hue.Whiteish -> White
                Hue.Hollow -> White
            }
        }


fun getDefaultStyle(name: String, sw: Double, hue: Hue): Style = Style(StrokeStyle(sw, getDefaultColor(name, hue)), null)

fun getCircleStyle(name: String, sw: Double, hue: Hue): Style = Style(null, FillStyle(getDefaultColor(name, hue)))

fun isInnerEye(name: String): Boolean = name == "eye-inner" || name == "egg-eye-inner"

fun isOuterEye(name: String): Boolean = name == "eye-outer" || name == "egg-eye-outer"

fun getColor(name: String, hue: Hue): StyleColor = when (hue) {
    Hue.Blackish -> when {
        name == "primary" -> Black
        isOuterEye(name) -> White
        isInnerEye(name) -> Black
        else -> White
    }
    Hue.Greyish -> when {
        name == "primary" -> Grey
        isOuterEye(name) -> White
        isInnerEye(name) -> Grey
        else -> White
    }
    Hue.Whiteish -> when {
        name == "primary" -> White
        isOuterEye(name) -> White
        isInnerEye(name) -> Black
        else -> Black
    }
    Hue.Hollow -> when {
        name == "primary" -> White
        isOuterEye(name) -> White
        isInnerEye(name) -> Black
        else -> Black
    }
}

fun getEyeLiner(sw: Double, hue: Hue): StrokeStyle = StrokeStyle(sw, getColor("secondary", hue))

fun getPathStyle(name: String, sw: Double, hue: Hue): Style =
        when (hue) {
            Hue.Hollow -> Style(getEyeLiner(sw, hue), if (isInnerEye(name)) FillStyle(Black) else null)
            else -> Style(if (isOuterEye(name)) getEyeLiner(sw, hue) else null, FillStyle(getColor(name, hue)))
        }


fun getLineStyle(name: String, sw: Double, hue: Hue): Style =
        if (name == "control-point") Style(StrokeStyle(0.5, Red), null)
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
                    if (name == "egg-eye-inner" && min(box.b.size(), box.c.size()) < 200.0) style.copy(stroke = StrokeStyle(2.0 * sw, Black))
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


fun getStyle(box: Box): Style {
    val sw = getStrokeWidth(box)
    return Style(StrokeStyle(sw, Black), null)
}


fun createPicture(shapes: List<Shape>): Picture = createPicture(*shapes.toTypedArray())
fun createPicture(vararg shapes: Shape): Picture = { box ->
    val m: (Vector) -> Vector = (::mapper)(box)
    val style = getStyle(box)
    shapes.map(mapShape(m))
            .map { Pair(it, style) }
}

fun createLensPicture(shapes: List<Pair<String, Shape>>): LensPicture = createLensPicture(*shapes.toTypedArray())
fun createLensPicture(vararg shapes: Pair<String, Shape>): LensPicture = { lens ->
    shapes.map(mapMaybeNamedShape(lens))
            .filterNotNull()
}


fun getColor(styleColor: StyleColor): String = when (styleColor) {
    Black -> "black"
    Grey -> "grey"
    White -> "white"
    Red -> "red"
    Green -> "green"
}

fun applyStyle(style: Style, context: CanvasRenderingContext2D): Unit {
    (style.stroke?.strokeColor ?: Black).pipe(::getColor).also { context.strokeStyle = it }
    (style.stroke?.strokeWidth ?: 1.0).also { context.lineWidth = it }
    (style.fill?.fillColor ?: Black).pipe(::getColor).also { context.fillStyle = it }
}


fun render(width: Int, height: Int, context: CanvasRenderingContext2D, styledShapes: List<Pair<Shape, Style>>): Unit {
    fun adjustHeight(y: Double): Double = height - y

    fun drawShape(shape: Shape, style: Style): Unit = when (shape) {
        is Polygon -> {
            val first = shape.points.first()
            applyStyle(style, context)
            context.beginPath()
            context.moveTo(first.x, adjustHeight(first.y))
            shape.points.drop(1).forEach { context.lineTo(it.x, adjustHeight(it.y)) }
            context.closePath()
            context.stroke()
        }
        is Curve -> {
            applyStyle(style, context)
            context.beginPath()
            context.moveTo(shape.point1.x, adjustHeight(shape.point1.y))
            context.bezierCurveTo(shape.point2.x, adjustHeight(shape.point2.y), shape.point3.x, adjustHeight(shape.point3.y), shape.point4.x, adjustHeight(shape.point4.y))
        }
        is Path -> {
            applyStyle(style, context)
            context.beginPath()
            context.moveTo(shape.start.x, adjustHeight(shape.start.y))
            shape.beziers.forEach { context.bezierCurveTo(it.controlPoint1.x, adjustHeight(it.controlPoint1.y),
                    it.controlPoint2.x, adjustHeight(it.controlPoint2.y),
                    it.endPoint.x, adjustHeight(it.endPoint.y)) }
            context.closePath()
        }
        is Line -> {
            applyStyle(style, context)
            context.beginPath()
            context.moveTo(shape.lineStart.x, adjustHeight(shape.lineStart.y))
            context.lineTo(shape.lineStart.x, adjustHeight(shape.lineStart.y))
        }
        is Circle -> {
            applyStyle(style, context)
            context.beginPath()
            context.ellipse(shape.center.x, adjustHeight(shape.center.y), shape.radius.size(), shape.radius.size(), 0.0, 0.0, 0.0)
        }
    }
    context.canvas.height = height
    context.canvas.width = width
    styledShapes.forEach { (shape, style) -> drawShape(shape, style) }

}


