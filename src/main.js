
'use strict'

import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import router from './app/router'
import nspzx from './app/io/nspzx.js'
import nspkb from './app/io/nspkb.js'

export const service = require('./app/service')
export const app = new Koa()

app
  .use(async (ctx, next) => {
    ctx.state.service = service
    await next()
  })
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())

nspzx.attach(app)
nspkb.attach(app)

/* istanbul ignore if: app.listen(...) can't run in test */
if (!module.parent) {
  const port = process.env.PORT || 7001
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
  })
}
