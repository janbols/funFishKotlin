package com.github.guterfluss.funfish

import kotlin.math.sqrt

data class Vector(val x: Double, val y: Double) {

    operator fun plus(other: Vector) = Vector(this.x + other.x, this.y + other.y)
    operator fun minus(other: Vector) = Vector(this.x - other.x, this.y - other.y)
    operator fun unaryMinus(): Vector = Vector(-x, -y)
    operator fun div(divisor: Int) = Vector(x / divisor, y / divisor)
    operator fun times(t: Double) = Vector(x * t, y * t)

    fun size() = sqrt(x * x + y * y)

}
