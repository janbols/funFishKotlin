package com.github.guterfluss.funfish

enum class StyleColor { Black, Grey, White, Red, Green }

data class StrokeStyle(val strokeWidth: Double, val strokeColor: StyleColor)

data class FillStyle(val fillColor: StyleColor)

data class Style(val stroke: StrokeStyle?, val fill: FillStyle?)
