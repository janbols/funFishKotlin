package com.github.guterfluss.funfish

enum class Hue { Blackish, Greyish, Whiteish, Hollow }

data class Lens(val box: Box, val hue: Hue)

private fun lift(l: Lens, f: (Box) -> Box): Lens = l.copy(f(l.box))

fun turn(l: Lens): Lens = lift(l, Box::turn)
fun flip(l: Lens): Lens = lift(l, Box::flip)
fun toss(l: Lens): Lens = lift(l, Box::toss)
fun scaleHorizontally(s: Double, l: Lens): Lens = lift(l) { box -> box.scaleHorizontally(s) }
fun scaleVertically(s: Double, l: Lens): Lens = lift(l) { box -> box.scaleVertically(s) }
fun moveHorizontally(offset: Double, l: Lens): Lens = lift(l) { box -> box.moveHorizontally(offset) }
fun moveVertically(offset: Double, l: Lens): Lens = lift(l) { box -> box.moveVertically(offset) }

fun splitHorizontally(f: Double, l: Lens): Pair<Lens, Lens> {
    val (b1, b2) = l.box.splitHorizontally(f)
    return Pair(l.copy(b1), l.copy(b2))
}

fun splitVertically(f: Double, l: Lens): Pair<Lens, Lens> {
    val (b1, b2) = l.box.splitVertically(f)
    return Pair(l.copy(b1), l.copy(b2))
}

fun rehue(l: Lens):Lens = l.copy(hue = when (l.hue) {
    Hue.Blackish -> Hue.Greyish
    Hue.Greyish -> Hue.Whiteish
    Hue.Whiteish -> Hue.Blackish
    Hue.Hollow -> Hue.Hollow
})