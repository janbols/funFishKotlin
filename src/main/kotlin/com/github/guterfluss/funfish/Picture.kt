package com.github.guterfluss.funfish



typealias Picture = (Box) -> List<Pair<Shape, Style>>

fun turn(p: Picture) = Box.turn.andThen(p)
fun flip(p: Picture) = Box::flip.andThen(p)
fun toss(p: Picture) = Box::toss.andThen(p)

fun besideRatio(m: Int, n: Int, p1: Picture, p2: Picture): Picture = { box ->
    val factor = m.toDouble() / (m + n).toDouble()
    val (b1, b2) = box.splitVertically(factor)
    p1(b1) + p2(b2)
}

fun beside(p1: Picture, p2: Picture) = besideRatio(1, 1, p1, p2)

fun aboveRatio(m: Int, n: Int, p1: Picture, p2: Picture): Picture = { box ->
    val factor = m.toDouble() / (m + n).toDouble()
    val (b1, b2) = box.splitHorizontally(factor)
    p1(b1) + p2(b2)

}

fun above(p1: Picture, p2: Picture): Picture = aboveRatio(1, 1, p1, p2)

fun over(p1: Picture, p2: Picture): Picture = { box -> p1(box) + p2(box) }
