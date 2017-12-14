package com.github.janbols.funfish.unlimited

import com.github.janbols.funfish.invoke
import com.github.janbols.funfish.pipe
import com.github.janbols.funfish.unlimited.LensPictures.above
import com.github.janbols.funfish.unlimited.LensPictures.aboveRatio
import com.github.janbols.funfish.unlimited.LensPictures.beside
import com.github.janbols.funfish.unlimited.LensPictures.besideRatio
import com.github.janbols.funfish.unlimited.LensPictures.flip
import com.github.janbols.funfish.unlimited.LensPictures.over
import com.github.janbols.funfish.unlimited.LensPictures.rehue
import com.github.janbols.funfish.unlimited.LensPictures.toss
import com.github.janbols.funfish.unlimited.LensPictures.turn


object Unlimited {

    fun ttile(hueN: (LensPicture) -> LensPicture, hueE: (LensPicture) -> LensPicture, f: LensPicture): LensPicture {
        val fishN = f pipe ::toss pipe ::flip
        val fishE = fishN pipe ::turn pipe ::turn pipe ::turn
        return over(f, over(fishN pipe hueN, fishE pipe hueE))
    }

    fun ttile0(f: LensPicture): LensPicture = ttile(
            { rehue(it) pipe ::rehue pipe ::rehue },
            { rehue(it) pipe ::rehue pipe ::rehue },
            f)

    fun ttile1(f: LensPicture): LensPicture = ttile(
            { rehue(it) },
            { rehue(it) pipe ::rehue },
            f)

    fun ttile2(f: LensPicture): LensPicture = ttile(
            { rehue(it) pipe ::rehue },
            { rehue(it) },
            f)

    fun utile(hueN: (LensPicture) -> LensPicture,
              hueW: (LensPicture) -> LensPicture,
              hueS: (LensPicture) -> LensPicture,
              hueE: (LensPicture) -> LensPicture,
              f: LensPicture): LensPicture {
        val fishN = f pipe ::toss pipe ::flip
        val fishW = fishN pipe ::turn
        val fishS = fishW pipe ::turn
        val fishE = fishS pipe ::turn
        return over(
                over(fishN pipe hueN , fishW pipe hueW),
                over(fishE pipe hueE , fishS pipe hueS)
        )
    }

    fun utile0(f: LensPicture): LensPicture = utile({ it }, { it }, { it }, { it }, f)
    fun utile1(f: LensPicture): LensPicture = utile({ rehue(it) pipe ::rehue }, { it }, { rehue(it) pipe ::rehue }, { it }, f)
    fun utile2(f: LensPicture): LensPicture = utile({ it }, { rehue(it) pipe ::rehue }, { rehue(it) }, { rehue(it) pipe ::rehue }, f)
    fun utile3(f: LensPicture): LensPicture = utile({ rehue(it) pipe ::rehue }, { it }, { rehue(it) }, { it }, f)

    fun quartet(p: LensPicture, q: LensPicture, r: LensPicture, s: LensPicture): LensPicture = above(beside(p, q), beside(r, s))

    val blank: LensPicture = { _ -> listOf() }

    fun side(tt: (LensPicture) -> LensPicture, hueSW: (LensPicture) -> LensPicture, hueSE: (LensPicture) -> LensPicture, n: Int, p: LensPicture): LensPicture {
        val s = if (n == 1) blank else side(tt, hueSW, hueSE, n - 1, p)
        val t = tt(p)
        return quartet(s, s, t pipe ::turn pipe hueSW, t pipe hueSE)
    }

    val side0: (Int, LensPicture) -> LensPicture = (Unlimited::side)(Unlimited::ttile0)({ it })({ it })
    val side1: (Int, LensPicture) -> LensPicture = (Unlimited::side)(Unlimited::ttile1)({ it })({ rehue(it) })
    val side2: (Int, LensPicture) -> LensPicture = (Unlimited::side)(Unlimited::ttile2)({ rehue(it) pipe ::rehue })({ rehue(it) })


    fun corner(ut: (LensPicture) -> LensPicture, sideNE: (Int, LensPicture) -> LensPicture, sideSW: (Int, LensPicture) -> LensPicture, n: Int, p: LensPicture): LensPicture {
        val (c, ne, sw) =
                if (n == 1) Triple(blank, blank, blank)
                else Triple(corner(ut, sideNE, sideSW, n - 1, p), sideNE(n - 1, p), sideSW(n - 1, p))
        val u = ut(p)
        return quartet(c, ne, sw pipe ::turn, u)
    }


    val corner1: (Int, LensPicture) -> LensPicture = (Unlimited::corner)(Unlimited::utile3)(side1)(side2)
    val corner2: (Int, LensPicture) -> LensPicture = (Unlimited::corner)(Unlimited::utile2)(side2)(side1)

    fun nonet(p: LensPicture, q: LensPicture, r: LensPicture, s: LensPicture, t: LensPicture, u: LensPicture, v: LensPicture, w: LensPicture, x: LensPicture) =
            aboveRatio(1, 2, besideRatio(1, 2, p, (beside(q, r))),
                    aboveRatio(1, 1, besideRatio(1, 2, s, beside(t, u)),
                            besideRatio(1, 2, v, beside(w, x))))


    fun squareLimit(n: Int, picture: LensPicture): LensPicture {
        val cornerNW = corner1(n, picture)
        val cornerSW = corner2(n, picture) pipe ::turn
        val cornerSE = cornerNW pipe ::turn pipe ::turn
        val cornerNE = cornerSW pipe ::turn pipe ::turn
        val sideN = side1(n, picture)
        val sideW = side2(n, picture) pipe ::turn
        val sideS = sideN pipe ::turn pipe ::turn
        val sideE = sideW pipe ::turn pipe ::turn
        val center = utile1(picture)
        return nonet(
                cornerNW, sideN, cornerNE,
                sideW, center, sideE,
                cornerSW, sideS, cornerSE
        )
    }

    fun bandify(combineRatio: (Int, Int, LensPicture, LensPicture) -> LensPicture, n: Int, first: LensPicture, middle: LensPicture, last: LensPicture): LensPicture {
        val pictures = listOf(first) + List(n - 2, { middle })
        val operation: (LensPicture, Pair<LensPicture, Int>) -> Pair<LensPicture, Int> = { item, (p, ratio) ->
            Pair(combineRatio(1, ratio, item, p), ratio + 1)
        }
        val (result, _) = pictures.foldRight(Pair(last, 1), operation)
        return result
    }


    val aboveBand = (Unlimited::bandify)(::aboveRatio)

    val besideBand = (Unlimited::bandify)(::besideRatio)


    fun egg(n: Int, m: Int, p: LensPicture): LensPicture {
        val sideN = side0(n, p)
        val sideS = sideN pipe ::turn pipe ::turn
        val center = utile0(p)
        val topband = besideBand(m, sideN, sideN, sideN)
        val midband = besideBand(m, center, center, center)
        val botband = besideBand(m, sideS, sideS, sideS)
        val band = aboveBand(3, topband, midband, botband)
        return band
    }


}