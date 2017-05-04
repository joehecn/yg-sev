
'use strict'

import supertest from 'supertest'
import { app } from '../../src/main.js'

describe('GET /', () => {
  it('should be ok', done => {
    supertest(app.listen())
      .get('/')
      .expect('server look\'s good')
      .expect(200, done)
  })
})
