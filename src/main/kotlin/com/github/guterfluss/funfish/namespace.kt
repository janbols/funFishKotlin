package com.github.guterfluss.funfish

infix inline fun <P1, R> P1.pipe(t: (P1) -> R): R = t(this)


infix fun <P1, IP, R> ((P1) -> IP).andThen(f: (IP) -> R): (P1) -> R = forwardCompose(f)

infix fun <IP, R> (() -> IP).andThen(f: (IP) -> R): () -> R = forwardCompose(f)

infix fun <P1, IP, R> ((P1) -> IP).forwardCompose(f: (IP) -> R): (P1) -> R {
    return { p1: P1 -> f(this(p1)) }
}

infix fun <IP, R> (() -> IP).forwardCompose(f: (IP) -> R): () -> R {
    return { f(this()) }
}



operator @Suppress("UNUSED_PARAMETER") fun <P1, P2, R> ((P1, P2) -> R).invoke(p1: P1, partial2: Partial<P2> = partial()): (P2) -> R {
    return { p2: P2 -> this(p1, p2) }
}

operator @Suppress("UNUSED_PARAMETER") fun <P1, P2, R> ((P1, P2) -> R).invoke(partial1: Partial<P1> = partial(), p2: P2): (P1) -> R {
    return { p1: P1 -> this(p1, p2) }
}

operator @Suppress("UNUSED_PARAMETER") fun <P1, P2, P3, R> ((P1, P2, P3) -> R).invoke(p1: P1, partial2: Partial<P2> = partial(), partial3: Partial<P3> = partial()): (P2, P3) -> R {
    return { p2: P2, p3: P3 -> this(p1, p2, p3) }
}

operator @Suppress("UNUSED_PARAMETER") fun <P1, P2, P3, R> ((P1, P2, P3) -> R).invoke(partial1: Partial<P1> = partial(), p2: P2, partial3: Partial<P3> = partial()): (P1, P3) -> R {
    return { p1: P1, p3: P3 -> this(p1, p2, p3) }
}

operator @Suppress("UNUSED_PARAMETER") fun <P1, P2, P3, R> ((P1, P2, P3) -> R).invoke(partial1: Partial<P1> = partial(), partial2: Partial<P2> = partial(), p3: P3): (P1, P2) -> R {
    return { p1: P1, p2: P2 -> this(p1, p2, p3) }
}

operator @Suppress("UNUSED_PARAMETER") fun <P1, P2, P3, P4, R> ((P1, P2, P3, P4) -> R).invoke(p1: P1, partial2: Partial<P2> = partial(), partial3: Partial<P3> = partial(), partial4: Partial<P4> = partial()): (P2, P3, P4) -> R {
    return { p2: P2, p3: P3, p4: P4 -> this(p1, p2, p3, p4) }
}

operator @Suppress("UNUSED_PARAMETER") fun <P1, P2, P3, P4, R> ((P1, P2, P3, P4) -> R).invoke(partial1: Partial<P1> = partial(), p2: P2, partial3: Partial<P3> = partial(), partial4: Partial<P4> = partial()): (P1, P3, P4) -> R {
    return { p1: P1, p3: P3, p4: P4 -> this(p1, p2, p3, p4) }
}

operator @Suppress("UNUSED_PARAMETER") fun <P1, P2, P3, P4, R> ((P1, P2, P3, P4) -> R).invoke(partial1: Partial<P1> = partial(), partial2: Partial<P2> = partial(), p3: P3, partial4: Partial<P4> = partial()): (P1, P2, P4) -> R {
    return { p1: P1, p2: P2, p4: P4 -> this(p1, p2, p3, p4) }
}

operator @Suppress("UNUSED_PARAMETER") fun <P1, P2, P3, P4, R> ((P1, P2, P3, P4) -> R).invoke(partial1: Partial<P1> = partial(), partial2: Partial<P2> = partial(), partial3: Partial<P3> = partial(), p4: P4): (P1, P2, P3) -> R {
    return { p1: P1, p2: P2, p3: P3 -> this(p1, p2, p3, p4) }
}

operator @Suppress("UNUSED_PARAMETER") fun <P1, P2, P3, P4, P5, R> ((P1, P2, P3, P4, P5) -> R).invoke(p1: P1, partial2: Partial<P2> = partial(), partial3: Partial<P3> = partial(), partial4: Partial<P4> = partial(), partial5: Partial<P5> = partial()): (P2, P3, P4, P5) -> R {
    return { p2: P2, p3: P3, p4: P4, p5: P5 -> this(p1, p2, p3, p4, p5) }
}

operator @Suppress("UNUSED_PARAMETER") fun <P1, P2, P3, P4, P5, R> ((P1, P2, P3, P4, P5) -> R).invoke(partial1: Partial<P1> = partial(), p2: P2, partial3: Partial<P3> = partial(), partial4: Partial<P4> = partial(), partial5: Partial<P5> = partial()): (P1, P3, P4, P5) -> R {
    return { p1: P1, p3: P3, p4: P4, p5: P5 -> this(p1, p2, p3, p4, p5) }
}

operator @Suppress("UNUSED_PARAMETER") fun <P1, P2, P3, P4, P5, R> ((P1, P2, P3, P4, P5) -> R).invoke(partial1: Partial<P1> = partial(), partial2: Partial<P2> = partial(), p3: P3, partial4: Partial<P4> = partial(), partial5: Partial<P5> = partial()): (P1, P2, P4, P5) -> R {
    return { p1: P1, p2: P2, p4: P4, p5: P5 -> this(p1, p2, p3, p4, p5) }
}

operator @Suppress("UNUSED_PARAMETER") fun <P1, P2, P3, P4, P5, R> ((P1, P2, P3, P4, P5) -> R).invoke(partial1: Partial<P1> = partial(), partial2: Partial<P2> = partial(), partial3: Partial<P3> = partial(), p4: P4, partial5: Partial<P5> = partial()): (P1, P2, P3, P5) -> R {
    return { p1: P1, p2: P2, p3: P3, p5: P5 -> this(p1, p2, p3, p4, p5) }
}

operator @Suppress("UNUSED_PARAMETER") fun <P1, P2, P3, P4, P5, R> ((P1, P2, P3, P4, P5) -> R).invoke(partial1: Partial<P1> = partial(), partial2: Partial<P2> = partial(), partial3: Partial<P3> = partial(), partial4: Partial<P4> = partial(), p5: P5): (P1, P2, P3, P4) -> R {
    return { p1: P1, p2: P2, p3: P3, p4: P4 -> this(p1, p2, p3, p4, p5) }
}