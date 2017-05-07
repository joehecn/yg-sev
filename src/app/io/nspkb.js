
'use strict'

import IO from '../../koa-socket'

const nspkb = new IO('nspkb')

nspkb.on('join', (ctx, data) => {
  ctx.acknowledge(data)
})

export default nspkb
