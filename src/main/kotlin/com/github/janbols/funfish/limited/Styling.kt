package com.github.janbols.funfish.limited

enum class StyleColor { Black, Grey, White, Red, Brown, Beige, Green, Yellow }

data class StrokeStyle(val strokeWidth: Double, val strokeColor: StyleColor)

data class FillStyle(val fillColor: StyleColor)

data class Style(val stroke: StrokeStyle?, val fill: FillStyle?)
