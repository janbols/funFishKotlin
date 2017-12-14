package com.github.guterfluss.funfish.limited

import com.github.guterfluss.funfish.Box
import com.github.guterfluss.funfish.Boxes
import com.github.guterfluss.funfish.andThen
import com.github.guterfluss.funfish.shapes.Shape


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

    fun beside(p1: Picture, p2: Picture) : Picture = besideRatio(1, 1, p1, p2)

    fun aboveRatio(m: Int, n: Int, p1: Picture, p2: Picture): Picture = { box ->
        val factor = m.toDouble() / (m + n).toDouble()
        val (b1, b2) = Boxes.splitHorizontally(factor, box)
        p1(b1) + p2(b2)

    }

    fun above(p1: Picture, p2: Picture): Picture = aboveRatio(1, 1, p1, p2)

    fun over(p1: Picture, p2: Picture): Picture = { box -> p1(box) + p2(box) }

}
