package com.github.janbols.funfish

import com.github.janbols.funfish.limited.Fishy.hendersonFishShapes
import com.github.janbols.funfish.limited.Letter
import com.github.janbols.funfish.limited.Letter.d1
import com.github.janbols.funfish.limited.Letter.d2
import com.github.janbols.funfish.limited.Letter.e
import com.github.janbols.funfish.limited.Letter.h
import com.github.janbols.funfish.limited.Letter.n
import com.github.janbols.funfish.limited.Letter.o1
import com.github.janbols.funfish.limited.Letter.o2
import com.github.janbols.funfish.limited.Letter.r1
import com.github.janbols.funfish.limited.Letter.r2
import com.github.janbols.funfish.limited.Letter.s
import com.github.janbols.funfish.limited.Limited
import com.github.janbols.funfish.limited.Picture
import com.github.janbols.funfish.limited.Pictures.createPicture
import com.github.janbols.funfish.limited.Style
import com.github.janbols.funfish.unlimited.Fishier.fishShapes
import com.github.janbols.funfish.unlimited.Hue
import com.github.janbols.funfish.unlimited.Lens
import com.github.janbols.funfish.unlimited.LensPicture
import com.github.janbols.funfish.unlimited.LensPictures.createLensPicture
import com.github.janbols.funfish.unlimited.Lizard.lizardShapes
import com.github.janbols.funfish.unlimited.Unlimited
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLAnchorElement
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.HTMLDivElement
import kotlin.browser.document
import kotlin.browser.window
import kotlin.js.Date

typealias Renderer = (Int, Int, List<Pair<Shape, Style>>) -> Unit

private val defaultWidth = 800
private val defaultHeight = 800

private val pages: Map<Int, (Renderer) -> Unit> = listOf(
        draw(::fittedBox, createPicture(Letter.f)),
        draw(::fittedBox, Limited.nonet(
                createPicture(h),
                createPicture(e),
                createPicture(n),
                createPicture(d1, d2),
                createPicture(e),
                createPicture(r1, r2),
                createPicture(s),
                createPicture(o1, o2),
                createPicture(h)
        )),
        draw(::expandedBox, createPicture(hendersonFishShapes)),
        draw(::expandedBox, Limited.ttile(createPicture(hendersonFishShapes))),
        draw(1200, 800, ::bandBox, Limited.egg(3, 16, createPicture(hendersonFishShapes))),
        draw(::fittedBox, Limited.squareLimit(3, createPicture(hendersonFishShapes))),
        draw(::expandedBox, Hue.Blackish, createLensPicture(fishShapes)),
        draw(::expandedBox, Hue.Greyish, createLensPicture(fishShapes)),
        draw(::expandedBox, Hue.Whiteish, createLensPicture(fishShapes)),
        draw(::expandedBox, Hue.Greyish, createLensPicture(lizardShapes)),
        draw(::fittedBox, Hue.Blackish, Unlimited.quartet2(3, createLensPicture(lizardShapes))),
        draw(1200, 800, ::bandBox, Hue.Hollow, Unlimited.egg(3, 16, createLensPicture(fishShapes))),
        draw(::fittedBox, Hue.Greyish, Unlimited.squareLimit(3, createLensPicture(fishShapes)))
).withIndex().associate { Pair(it.index, it.value) }


private fun fittedBox(width: Int, height: Int): Box = Box(
        Vector(0.0, 0.0),
        Vector(width.toDouble(), 0.0),
        Vector(0.0, height.toDouble())
)

private fun expandedBox(width: Int, height: Int): Box = Box(
        Vector(width / 4.0, height / 4.0),
        Vector(width / 2.0, 0.0),
        Vector(0.0, height / 2.0)
)

private fun bandBox(width: Int, height: Int): Box = Box(
        Vector(100.0, 100.0),
        Vector(3200.0, 0.0),
        Vector(0.0, 600.0)
)

private fun draw(width: Int, height: Int, boxFactory: (Int, Int) -> Box, picture: Picture): (Renderer) -> Unit = { renderer ->
    renderer(width, height, boxFactory(width, height) pipe picture)
}

private fun draw(boxFactory: (Int, Int) -> Box, picture: Picture): (Renderer) -> Unit = { renderer ->
    draw(defaultWidth, defaultHeight, boxFactory, picture)(renderer)
}

private fun draw(width: Int, height: Int, boxFactory: (Int, Int) -> Box, hue: Hue, lensPicture: LensPicture): (Renderer) -> Unit = { renderer ->
    renderer(width, height, Lens(boxFactory(width, height), hue) pipe lensPicture)
}

private fun draw(boxFactory: (Int, Int) -> Box, hue: Hue, lensPicture: LensPicture): (Renderer) -> Unit = { renderer ->
    draw(defaultWidth, defaultHeight, boxFactory, hue, lensPicture)(renderer)
}


fun main(args: Array<String>) {

    val page = getPage(window.location.search)
    if (page > 1) setPage(document.getElementById("prev") as HTMLDivElement, page - 1)
    setPage(document.getElementById("next") as HTMLDivElement, page + 1)
    setTitle("page $page")

    val canvas = document.getElementById("myCanvas") as HTMLCanvasElement
    val context = canvas.getContext("2d") as CanvasRenderingContext2D
    val renderer: Renderer = { width, height, styledShapes ->
        render(width, height, context, styledShapes)
    }
    pages[page]?.invoke(renderer)
}


private fun getPage(search: String): Int {
    val baseIx = search.indexOf("page=")
    val offset = "page=".length
    return if (baseIx <0) 0 else search.drop(baseIx + offset).takeWhile { it in '0'..'9'}.toInt()
}

private fun setPage(div: HTMLDivElement, pageNr: Int) {
    val a = document.createElement("a") as HTMLAnchorElement
    div.appendChild(a)
    a.href = "index.html?page=$pageNr&ts=${Date().getTime()}"
    a.text = "to page $pageNr"
}

private fun setTitle(value: String) {
    val div = document.getElementById("title") as HTMLDivElement
    div.textContent = value
}



