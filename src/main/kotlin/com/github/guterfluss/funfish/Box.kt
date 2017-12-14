package com.github.guterfluss.funfish

data class Box(val a: Vector, val b: Vector, val c: Vector)

object Boxes {
    fun turn(box: Box): Box = Box(box.a + box.b, box.c, -box.b)
    fun flip(box: Box): Box = Box(box.a + box.b, -box.b, box.c)
    fun toss(box: Box): Box = Box(box.a + (box.b + box.c) / 2, (box.b + box.c) / 2, (box.c - box.b) / 2)
    fun scaleHorizontally(s: Double, box: Box): Box = Box(box.a, box.b * s, box.c)
    fun scaleVertically(s: Double, box: Box): Box = Box(box.a, box.b, box.c * s)
    fun moveHorizontally(offset: Double, box: Box): Box = Box(box.a + box.b * offset, box.b, box.c)
    fun moveVertically(offset: Double, box: Box): Box = Box(box.a + box.c * offset, box.b, box.c)

    fun splitHorizontally(f: Double, box: Box): Pair<Box, Box> {
        val top = box pipe (::moveVertically)(1.0 - f) pipe (::scaleVertically)(f)
        val bottom = box pipe (::scaleVertically)(1.0 - f)
        return Pair(top, bottom)
    }

    fun splitVertically(f: Double, box: Box): Pair<Box, Box> {
        val left = box pipe (::scaleHorizontally)(f)
        val right = box pipe (::moveHorizontally)(f) pipe (::scaleHorizontally)(1.0 - f)
        return Pair(left, right)
    }
}


