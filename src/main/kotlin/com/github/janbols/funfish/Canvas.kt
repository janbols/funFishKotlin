package com.github.janbols.funfish

import com.github.janbols.funfish.limited.FillStyle
import com.github.janbols.funfish.limited.StrokeStyle
import com.github.janbols.funfish.limited.Style
import com.github.janbols.funfish.limited.StyleColor
import com.github.janbols.funfish.limited.StyleColor.*
import org.w3c.dom.CanvasRenderingContext2D


fun getColor(styleColor: StyleColor): String = when (styleColor) {
    Black -> "black"
    Grey -> "grey"
    White -> "white"
    Red -> "red"
    Green -> "green"
    Yellow -> "yellow"
}

fun applyStyle(strokeStyle: StrokeStyle?, fillStyle: FillStyle?, context: CanvasRenderingContext2D): Unit {
    strokeStyle?.strokeColor?.pipe(::getColor).also { context.strokeStyle = it }
    strokeStyle?.strokeWidth?.also { context.lineWidth = it }
    fillStyle?.fillColor?.pipe(::getColor).also { context.fillStyle = it }
    strokeStyle?.also { context.stroke() }
    fillStyle?.also { context.fill() }
}


private val blackStrokeStyle: StrokeStyle = StrokeStyle(1.0, Black)

fun render(width: Int, height: Int, context: CanvasRenderingContext2D, styledShapes: List<Pair<Shape, Style>>): Unit {
    fun adjustHeight(y: Double): Double = height - y


    fun drawShape(shape: Shape, style: Style): Unit = when (shape) {
        is Polygon -> {
            val first = shape.points.first()
            context.beginPath()
            context.moveTo(first.x, adjustHeight(first.y))
            shape.points.drop(1).forEach { context.lineTo(it.x, adjustHeight(it.y)) }
            context.closePath()
            applyStyle(style.stroke ?: blackStrokeStyle, style.fill, context)
        }
        is Curve -> {
            context.beginPath()
            context.moveTo(shape.point1.x, adjustHeight(shape.point1.y))
            context.bezierCurveTo(shape.point2.x, adjustHeight(shape.point2.y), shape.point3.x, adjustHeight(shape.point3.y), shape.point4.x, adjustHeight(shape.point4.y))
            applyStyle(style.stroke ?: blackStrokeStyle, style.fill, context)
        }
        is Path -> {
            context.beginPath()
            context.moveTo(shape.start.x, adjustHeight(shape.start.y))
            shape.beziers.forEach {
                context.bezierCurveTo(it.controlPoint1.x, adjustHeight(it.controlPoint1.y),
                        it.controlPoint2.x, adjustHeight(it.controlPoint2.y),
                        it.endPoint.x, adjustHeight(it.endPoint.y))
            }
            context.closePath()
            applyStyle(style.stroke, style.fill, context)
        }
        is Line -> {
            context.beginPath()
            context.moveTo(shape.lineStart.x, adjustHeight(shape.lineStart.y))
            context.lineTo(shape.lineStart.x, adjustHeight(shape.lineStart.y))
            applyStyle(style.stroke ?: blackStrokeStyle, style.fill, context)
        }
        is Circle -> {
            context.beginPath()
            context.ellipse(shape.center.x, adjustHeight(shape.center.y), shape.radius.size(), shape.radius.size(), 0.0, 0.0, 0.0)
            applyStyle(style.stroke ?: blackStrokeStyle, style.fill ?: FillStyle(Yellow), context)
        }
    }
    context.canvas.height = height
    context.canvas.width = width
    styledShapes.forEach { (shape, style) -> drawShape(shape, style) }

}


