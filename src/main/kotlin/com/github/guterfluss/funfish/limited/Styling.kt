package com.github.guterfluss.funfish.limited

enum class StyleColor { Black, Grey, White, Red, Green, Yellow }

data class StrokeStyle(val strokeWidth: Double, val strokeColor: StyleColor)

data class FillStyle(val fillColor: StyleColor)

data class Style(val stroke: StrokeStyle?, val fill: FillStyle?)
