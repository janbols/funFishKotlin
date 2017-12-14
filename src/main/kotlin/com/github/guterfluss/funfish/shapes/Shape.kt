package com.github.guterfluss.funfish.shapes

import com.github.guterfluss.funfish.Vector

sealed class Shape

data class Polygon(val points : List<Vector>): Shape()


data class Curve(val point1 : Vector
                      , val point2 : Vector
                      , val point3 : Vector
                      , val point4 : Vector): Shape()


data class Bezier(val controlPoint1 : Vector
                       , val controlPoint2 : Vector
                       , val endPoint : Vector)

data class Path(val start: Vector, val beziers: List<Bezier>): Shape()


data class Line(val lineStart : Vector
                     , val lineEnd : Vector): Shape()

data class Circle(val center : Vector
                       , val radius : Vector): Shape()

