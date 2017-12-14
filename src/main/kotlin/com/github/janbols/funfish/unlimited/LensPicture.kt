package com.github.janbols.funfish.unlimited

import com.github.janbols.funfish.limited.Style
import com.github.janbols.funfish.pipe
import com.github.janbols.funfish.shapes.Shape
import com.github.janbols.funfish.unlimited.Lenses.flip
import com.github.janbols.funfish.unlimited.Lenses.rehue
import com.github.janbols.funfish.unlimited.Lenses.splitHorizontally
import com.github.janbols.funfish.unlimited.Lenses.splitVertically
import com.github.janbols.funfish.unlimited.Lenses.toss
import com.github.janbols.funfish.unlimited.Lenses.turn


typealias LensPicture = (Lens) -> List<Pair<Shape, Style>>

object LensPictures{

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

}
