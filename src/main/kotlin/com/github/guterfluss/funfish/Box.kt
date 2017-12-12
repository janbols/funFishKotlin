package com.github.guterfluss.funfish

data class Box(val a: Vector, val b: Vector, val c: Vector) {

    companion object {
        val turn = { box: Box -> Box(box.a + box.b, box.c, -box.b) }
    }

    fun turn() = Box(a + b, c, -b)
    fun flip() = Box(a + b, -b, c)
    fun toss() = Box(a + (b + c) / 2, (b + c) / 2, (c - b) / 2)
    fun scaleHorizontally(s: Double) = Box(a, b * s, c)
    fun scaleVertically(s: Double) = Box(a, b, c * s)
    fun moveHorizontally(offset: Double) = Box(a + b * offset, b, c)
    fun moveVertically(offset: Double) = Box(a + c * offset, b, c)

    fun splitHorizontally(f: Double): Pair<Box, Box> {
        val top = this.moveVertically(1.0-f).scaleVertically(f)
        val bottom = this.scaleVertically(-f)
        return Pair(top, bottom)
    }

    fun splitVertically(f: Double): Pair<Box, Box> {
        val left = this.scaleHorizontally(f)
        val right = this.moveHorizontally(f).scaleHorizontally(1.0 -f)
        return Pair(left, right)
    }
}


