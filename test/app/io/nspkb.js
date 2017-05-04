
'use strict'

import assert from 'assert'
import ioc from 'socket.io-client'
import { app } from '../../../src/main.js'

const PORT = 3000
const baseUri = `http://localhost:${PORT}/nspkb`

app.listen(PORT)

describe('nspkb join', () => {
  it('should ok', done => {
    const client = ioc.connect(baseUri)
    client.emit('join', 'hemiao', result => {
      assert.equal(result, 'hemiao')
      done()
    })
  })
})
