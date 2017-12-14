package com.github.janbols.funfish.limited

import com.github.janbols.funfish.invoke
import com.github.janbols.funfish.limited.Pictures.above
import com.github.janbols.funfish.limited.Pictures.aboveRatio
import com.github.janbols.funfish.limited.Pictures.beside
import com.github.janbols.funfish.limited.Pictures.besideRatio
import com.github.janbols.funfish.limited.Pictures.flip
import com.github.janbols.funfish.limited.Pictures.over
import com.github.janbols.funfish.limited.Pictures.toss
import com.github.janbols.funfish.limited.Pictures.turn
import com.github.janbols.funfish.pipe


object Limited {


    fun ttile(f: Picture): Picture {
        val fishN = f pipe ::toss  pipe ::flip
        val fishE = fishN pipe ::turn pipe ::turn pipe ::turn
        return over(f, over(fishN, fishE))
    }

    fun utile(f: Picture): Picture {
        val fishN = f pipe ::toss pipe ::flip
        val fishW = fishN pipe ::turn
        val fishS = fishW pipe ::turn
        val fishE = fishS pipe ::turn
        return over(over(fishN, fishW), over(fishE, fishS))
    }

    fun quartet(p: Picture, q: Picture, r: Picture, s: Picture): Picture = above(beside(p, q), beside(r, s))

    val blank: Picture = { _ -> listOf() }


    fun side(n: Int, p: Picture): Picture {
        val s = if (n == 1) blank else side(n - 1, p)
        val t = ttile(p)
        return quartet(s, s, t pipe ::turn, t)
    }

    fun corner(n: Int, p: Picture): Picture {
        val (c, s) =
                if (n == 1) Pair(blank, blank)
                else Pair(corner(n - 1, p), side(n - 1, p))
        val u = utile(p)
        return quartet(c, s, s pipe ::turn, u)
    }

    fun nonet(p: Picture, q: Picture, r: Picture, s: Picture, t: Picture, u: Picture, v: Picture, w: Picture, x: Picture) =
            aboveRatio(1, 2, besideRatio(1, 2, p, (beside(q, r))),
                    aboveRatio(1, 1, besideRatio(1, 2, s, beside(t, u)),
                            besideRatio(1, 2, v, beside(w, x))))

    fun bandify(combineRatio: (Int, Int, Picture, Picture) -> Picture, n: Int, first: Picture, middle: Picture, last: Picture): Picture {
        val pictures = listOf(first) + List(n - 2, { middle })
        val operation: (Picture, Pair<Picture, Int>) -> Pair<Picture, Int> = { item, (p, ratio) ->
            Pair(combineRatio(1, ratio, item, p), ratio + 1)
        }
        val (result, _) = pictures.foldRight(Pair(last, 1), operation)
        return result
    }


    val aboveBand = (Limited::bandify)(::aboveRatio)

    val besideBand = (Limited::bandify)(::besideRatio)

    fun egg(n: Int, m: Int, p: Picture): Picture {
        val cornerNW = corner(n, p)
        val cornerSW = turn(cornerNW)
        val cornerSE = turn(cornerSW)
        val cornerNE = turn(cornerSE)
        val sideN = side(n, p)
        val sideW = turn(sideN)
        val sideS = turn(sideW)
        val sideE = turn(sideS)
        val center = utile(p)
        val topband = besideBand(m, sideN, sideN, sideN)
        val midband = besideBand(m, center, center, center)
        val botband = besideBand(m, sideS, sideS, sideS)
        val band = aboveBand(3, topband, midband, botband)
        return band
    }


    fun eggband(n: Int, picture: Picture): Picture {
        val theSide = side(n, picture)
        val q = theSide
        val t = picture pipe Limited::utile
        val w = theSide pipe ::turn pipe ::turn
        return nonet(q, q, q, t, t, t, w, w, w)
    }

    fun squareLimit(n: Int, p: Picture): Picture {
        val cornerNW = corner(n, p)
        val cornerSW = turn(cornerNW)
        val cornerSE = turn(cornerSW)
        val cornerNE = turn(cornerSE)
        val sideN = side(n, p)
        val sideW = turn(sideN)
        val sideS = turn(sideW)
        val sideE = turn(sideS)
        val center = utile(p)
        return nonet(cornerNW, sideN, cornerNE,
                sideW, center, sideE,
                cornerSW, sideS, cornerSE)
    }


}
