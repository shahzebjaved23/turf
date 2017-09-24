import projection from './'
import * as projectionAll from './'
import { toMercator, toWgs84 } from './'
import { point } from '@turf/helpers'

// Types test
const pt = point([3, 51])
const projected = toMercator(pt)
const degrees = toWgs84(projected)

// default import
projection.toMercator(pt)
projection.toWgs84(projected)

// import *
projectionAll.toMercator(pt)
projectionAll.toWgs84(projected)