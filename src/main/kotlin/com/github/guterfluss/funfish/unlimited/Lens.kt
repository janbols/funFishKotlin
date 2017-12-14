package com.github.guterfluss.funfish.unlimited

import com.github.guterfluss.funfish.Box
import com.github.guterfluss.funfish.Boxes

enum class Hue { Blackish, Greyish, Whiteish, Hollow }

data class Lens(val box: Box, val hue: Hue)

object Lenses{

    private fun lift(f: (Box) -> Box, l: Lens): Lens = l.copy(f(l.box))

    fun turn(l: Lens): Lens = lift(Boxes::turn, l)
    fun flip(l: Lens): Lens = lift(Boxes::flip, l)
    fun toss(l: Lens): Lens = lift(Boxes::toss, l)
    fun scaleHorizontally(s: Double, l: Lens): Lens = lift({ box -> Boxes.scaleHorizontally(s, box) }, l)
    fun scaleVertically(s: Double, l: Lens): Lens = lift({ box -> Boxes.scaleVertically(s, box) }, l)
    fun moveHorizontally(offset: Double, l: Lens): Lens = lift({ box -> Boxes.moveHorizontally(offset, box) }, l)
    fun moveVertically(offset: Double, l: Lens): Lens = lift({ box -> Boxes.moveVertically(offset, box) }, l)

    fun splitHorizontally(f: Double, l: Lens): Pair<Lens, Lens> {
        val (b1, b2) = Boxes.splitHorizontally(f, l.box)
        return Pair(l.copy(b1), l.copy(b2))
    }

    fun splitVertically(f: Double, l: Lens): Pair<Lens, Lens> {
        val (b1, b2) = Boxes.splitVertically(f, l.box)
        return Pair(l.copy(b1), l.copy(b2))
    }

    fun rehue(l: Lens): Lens = l.copy(hue = when (l.hue) {
        Hue.Blackish -> Hue.Greyish
        Hue.Greyish -> Hue.Whiteish
        Hue.Whiteish -> Hue.Blackish
        Hue.Hollow -> Hue.Hollow
    })
}
