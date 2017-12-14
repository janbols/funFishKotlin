package com.github.janbols.funfish

import com.github.janbols.funfish.limited.Limited.corner
import com.github.janbols.funfish.limited.Limited.egg
import com.github.janbols.funfish.limited.Limited.nonet
import com.github.janbols.funfish.limited.Limited.squareLimit
import com.github.janbols.funfish.limited.Limited.ttile
import com.github.janbols.funfish.limited.Style
import com.github.janbols.funfish.shapes.FishEgg
import com.github.janbols.funfish.shapes.Fishier.fishShapes
import com.github.janbols.funfish.shapes.Fishy.hendersonFishShapes
import com.github.janbols.funfish.shapes.Letter.d1
import com.github.janbols.funfish.shapes.Letter.d2
import com.github.janbols.funfish.shapes.Letter.e
import com.github.janbols.funfish.shapes.Letter.h
import com.github.janbols.funfish.shapes.Letter.n
import com.github.janbols.funfish.shapes.Letter.o1
import com.github.janbols.funfish.shapes.Letter.o2
import com.github.janbols.funfish.shapes.Letter.r1
import com.github.janbols.funfish.shapes.Letter.r2
import com.github.janbols.funfish.shapes.Letter.s
import com.github.janbols.funfish.shapes.Lizard
import com.github.janbols.funfish.shapes.Shape
import com.github.janbols.funfish.unlimited.Hue
import com.github.janbols.funfish.unlimited.Lens
import com.github.janbols.funfish.unlimited.LensPicture
import com.github.janbols.funfish.unlimited.LensPictures.rehue
import com.github.janbols.funfish.unlimited.LensPictures.turn
import com.github.janbols.funfish.unlimited.Unlimited
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import kotlin.browser.document

typealias Renderer = (Int, Int, List<Pair<Shape, Style>>) -> Unit

fun simpleBox(width: Int, height: Int, renderer: Renderer) {
//    val box = Box(
//            Vector(0.0, 0.0),
//            Vector(width.toDouble(), 0.0),
//            Vector(0.0, height.toDouble())
//    )
    val box = Box(
            Vector(width / 4.0, height / 4.0),
            Vector(width / 2.0, 0.0),
            Vector(0.0, height / 2.0)
    )

    val picture = corner(4, createPicture(h)
    )
    box pipe picture pipe { renderer(width, height, it) }
}

fun hendersonNonet(width: Int, height: Int, renderer: Renderer) {
    val h = createPicture(h)
    val e = createPicture(e)
    val n = createPicture(n)
    val d = createPicture(d1, d2)
    val r = createPicture(r1, r2)
    val s = createPicture(s)
    val o = createPicture(o1, o2)
    val box = Box(
            Vector(0.0, 0.0),
            Vector(width.toDouble(), 0.0),
            Vector(0.0, height.toDouble())
    )

    box pipe nonet(h, e, n, d, e, r, s, o, n) pipe { renderer(width, height, it) }

}

fun hendersonTtile(width: Int, height: Int, renderer: Renderer) {
    val fish = createPicture(hendersonFishShapes)
    val box = Box(
            Vector(width / 4.0, height / 4.0),
            Vector(width / 2.0, 0.0),
            Vector(0.0, height / 2.0)
    )

    box pipe ttile(fish) pipe { renderer(width, height, it) }
}

fun hendersonEgg(width: Int, height: Int, renderer: Renderer) {
    val fish = createPicture(hendersonFishShapes)
    val box = Box(
            Vector(100.0, 100.0),
            Vector(3200.0, 0.0),
            Vector(0.0, 600.0)
    )
    val depth = 3
    val band = egg(depth, 16, fish)
    box pipe band pipe { renderer(width, height, it) }
}


fun hendersonSquareLimit(width: Int, height: Int, renderer: Renderer) {
    val fish = createPicture(hendersonFishShapes)
    val box = Box(
            Vector(0.0, 0.0),
            Vector(width.toDouble(), 0.0),
            Vector(0.0, height.toDouble())
    )

    box pipe squareLimit(2, fish) pipe { renderer(width, height, it) }
}

fun hueFish(hue: Hue, width: Int, height: Int, renderer: Renderer) {
    val fish = createLensPicture(fishShapes)
    val box = Box(
            Vector(width.toDouble() / 4, height.toDouble() / 4),
            Vector(width.toDouble() / 2, 0.0),
            Vector(0.0, height.toDouble() / 2)
    )

    val lens = Lens(box, hue)
    lens pipe fish pipe { renderer(width, height, it) }
}

val blackFish = (::hueFish)(Hue.Blackish)
val greyFish = (::hueFish)(Hue.Greyish)
val whiteFish = (::hueFish)(Hue.Whiteish)

fun hueSquareLimit(n: Int, width: Int, height: Int, renderer: Renderer) {
    val fish = createLensPicture(fishShapes)
    val box = Box(
            Vector(0.0, 0.0),
            Vector(width.toDouble(), 0.0),
            Vector(0.0, height.toDouble())
    )

    val lens = Lens(box, Hue.Greyish)
    lens pipe Unlimited.squareLimit(n, fish) pipe { renderer(width, height, it) }
}

fun singleLizard(width: Int, height: Int, renderer: Renderer) {
    val lizard = createLensPicture(Lizard.lizardShapes)
    val box = Box(
            Vector(width / 4.0, height / 4.0),
            Vector(width / 2.0, 0.0),
            Vector(0.0, height / 2.0)
    )
    val lens = Lens(box, Hue.Greyish)
    lens pipe lizard pipe { renderer(width, height, it) }
}

fun qquartet(n: Int, p: LensPicture): LensPicture {
    val p2 = if (n == 1) p else qquartet(n - 1, p)
    return Unlimited.quartet(p2, p2, p2, p2)
}

fun quartetLizard(width: Int, height: Int, renderer: Renderer) {
    val lizard1 = createLensPicture(Lizard.lizardShapes)
    val lizard2 = lizard1 pipe ::rehue
    val box = Box(
            Vector(width / 4.0, height / 4.0),
            Vector(width / 2.0, 0.0),
            Vector(0.0, height / 2.0)
    )
    val lens = Lens(box, Hue.Blackish)
    val lizardNW = lizard1
    val lizardNE = lizard2 pipe ::turn
    val lizardSW = lizard2 pipe ::turn pipe ::turn pipe ::turn
    val lizardSE = lizard1 pipe ::turn pipe ::turn
    val q = Unlimited.quartet(lizardNW, lizardNE, lizardSW, lizardSE)
    val qq = qquartet(3, q)
    lens pipe qq pipe { renderer(width, height, it) }
}

fun escherEgg(depth: Int, width: Int, height: Int, renderer: Renderer) {
    val fish = createLensPicture(fishShapes)
    val box = Box(
            Vector(0.0, 100.0),
            Vector(3600.0, 0.0),
            Vector(0.0, 600.0)
    )

    val band = Unlimited.egg(depth, 18, fish)
    val lens = Lens(box, Hue.Hollow)
    lens pipe band pipe { renderer(width, height, it) }
}

fun escherEgg2(depth: Int, width: Int, height: Int, renderer: Renderer) {
    val fish = createLensPicture(fishShapes)
    val box = Box(
            Vector(0.0, 0.0),
            Vector(3200.0, 0.0),
            Vector(0.0, 800.0)
    )

    val band = Unlimited.egg(depth, 12, fish)
    val lens = Lens(box, Hue.Hollow)
    lens pipe band pipe { renderer(width, height, it) }
}

fun escherEggStretch(depth: Int, width: Int, height: Int, renderer: Renderer) {
    val fish = createLensPicture(fishShapes)
    val box = Box(
            Vector(0.0, 0.0),
            Vector(3200.0, 0.0),
            Vector(0.0, 800.0)
    )

    val band = Unlimited.egg(depth, 10, fish)
    val lens = Lens(box, Hue.Hollow)
    lens pipe band pipe { renderer(width, height, it) }
}

fun fisheggfish(width: Int, height: Int, renderer: Renderer) {
    val fish = createLensPicture(FishEgg.fisheggShapes)
    val box = Box(
            Vector(100.0, 100.0),
            Vector(400.0, 0.0),
            Vector(0.0, 400.0)
    )

    val lens = Lens(box, Hue.Hollow)
    lens pipe fish pipe { renderer(width, height, it) }
}

fun fishegg(depth: Int, width: Int, height: Int, renderer: Renderer) {
    val fish = createLensPicture(FishEgg.fisheggShapes)
    val box = Box(
            Vector(0.0, 0.0),
            Vector(width.toDouble(), 0.0),
            Vector(0.0, height.toDouble())
    )

    val band = Unlimited.egg(depth, 10, fish)
    val lens = Lens(box, Hue.Hollow)
    lens pipe band pipe { renderer(width, height, it) }
}


fun main(args: Array<String>) {
    val canvas = document.getElementById("myCanvas") as HTMLCanvasElement
    val context = canvas.getContext("2d") as CanvasRenderingContext2D
    val renderer: Renderer = { width, height, styledShapes ->
        render(width, height, context, styledShapes)
    }


//    simpleBox(800, 800, renderer)
//    hendersonNonet(800, 800, renderer)
//    hendersonTtile(800, 800, renderer)
//    hendersonSquareLimit(800, 800, renderer)
//    blackFish(800, 800, renderer)
//    greyFish(800, 800, renderer)
//    whiteFish(800, 800, renderer)
//    hueSquareLimit(4, 800, 800, renderer)
//    hueSquareLimit(5, 2000, 2000, renderer)
//    singleLizard(800, 800, renderer)
    quartetLizard(800, 800, renderer)
//    hendersonEgg(3600, 800, renderer)
//    escherEggStretch(4, 3600, 800, renderer)
//    fisheggfish(600, 600, renderer)
//    fishegg(3, 3200, 920, renderer)
//    fishegg(2, 3200, 920, renderer)
//    fishegg(3, 3200, 1000, renderer)
//    fishegg(2, 3200, 1000, renderer)

}
