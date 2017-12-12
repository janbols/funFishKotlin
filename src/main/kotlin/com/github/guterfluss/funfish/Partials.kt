package com.github.guterfluss.funfish

/**
 * Marker class to be used as the representation of a non-appliled parameter
 */
class Partial<T>

fun <T> partial(): Partial<T> = Partial()
