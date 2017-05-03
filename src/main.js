
'use strict'

import Koa from 'koa'
export const app = new Koa()

// response
app.use(ctx => {
  ctx.body = 'hello koa'
})

/* istanbul ignore if: app.listen(...) can't run in test */
if (!module.parent) {
  let port = process.env.PORT || 7001
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
  })
}
