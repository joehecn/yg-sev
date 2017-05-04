
'use strict'

import Router from 'koa-router'
import { list, isdownload, isprint, djpnote } from '../ctrl/djp.js'

export const djp = new Router()

djp.get('/list', list)

djp.post('/isdownload', isdownload)

djp.post('/isprint', isprint)

djp.post('/djpnote', djpnote)
