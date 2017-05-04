
'use strict'

import Router from 'koa-router'
import { zx } from './zx.js'
import { djp } from './djp.js'
import { zxwx } from './zxwx.js'
import { ygwxfw } from './ygwxfw.js'

export const router = new Router()

// 网站根目录
router.get('/', function (ctx, next) {
  ctx.body = 'server look\'s good'
})

// 阳光订单-主站
router.use('/api/zx', zx.routes())

// 登机牌
router.use('/api/djp', djp.routes())

// 微信小程序
router.use('/api/zxwx', zxwx.routes())

// 微信服务号
router.use('/api/ygwxfw', ygwxfw.routes())
