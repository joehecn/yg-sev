
'use strict'

import Router from 'koa-router'
import { login, list } from '../controller/djp.js'

const djp = new Router()

djp.post('/users/login', login)

djp.get('/djps', list)

// djp.put('/djps/isdownload/:id', isdownload)

// djp.put('/djps/isprint/:id', isprint)

// djp.put('/djps/djpnote/:id', djpnote)

export default djp
