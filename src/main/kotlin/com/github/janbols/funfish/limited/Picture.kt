package com.github.janbols.funfish.limited

import com.github.janbols.funfish.*
import kotlin.math.min


typealias Picture = (Box) -> List<Pair<Shape, Style>>

object Pictures {
    private fun lift(f: (Box) -> Box, p: Picture): Picture = f andThen p


    fun turn(p: Picture): Picture = lift(Boxes::turn, p)
    fun flip(p: Picture): Picture = lift(Boxes::flip, p)
    fun toss(p: Picture): Picture = lift(Boxes::toss, p)

    fun besideRatio(m: Int, n: Int, p1: Picture, p2: Picture): Picture = { box ->
        val factor = m.toDouble() / (m + n).toDouble()
        val (b1, b2) = Boxes.splitVertically(factor, box)
        p1(b1) + p2(b2)
    }

    fun beside(p1: Picture, p2: Picture): Picture = besideRatio(1, 1, p1, p2)

    fun aboveRatio(m: Int, n: Int, p1: Picture, p2: Picture): Picture = { box ->
        val factor = m.toDouble() / (m + n).toDouble()
        val (b1, b2) = Boxes.splitHorizontally(factor, box)
        p1(b1) + p2(b2)

    }

    fun above(p1: Picture, p2: Picture): Picture = aboveRatio(1, 1, p1, p2)

    fun over(p1: Picture, p2: Picture): Picture = { box -> p1(box) + p2(box) }


    fun createPicture(shapes: List<Shape>): Picture = createPicture(*shapes.toTypedArray())
    fun createPicture(vararg shapes: Shape): Picture = { box ->
        val m: (Vector) -> Vector = (::mapper)(box)
        val style = getStyle(box)
        shapes.map(mapShape(m))
                .map { Pair(it, style) }
    }

}


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
        is Circle -> Circle(m(it.center), m(it.center + it.radius) - m(it.center))
    }
}


fun getStrokeWidth(box: Box): Double = min(box.b.size(), box.c.size()) / 80


fun getStyle(box: Box): Style {
    val sw = getStrokeWidth(box)
    return Style(StrokeStyle(sw, StyleColor.Black), null)
}

