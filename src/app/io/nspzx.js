
'use strict'

import IO from '../../koa-socket'

const nspzx = new IO('nspzx')

nspzx.on('join', (ctx, data) => {
  ctx.acknowledge(data)
})

export default nspzx
