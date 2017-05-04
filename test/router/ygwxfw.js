
'use strict'

import supertest from 'supertest'
import { app } from '../../src/main.js'

describe('GET /api/ygwxfw/provincecity', () => {
  it('should be ok', done => {
    supertest(app.listen())
      .get('/api/ygwxfw/provincecity')
      .expect({ sz: '深圳' })
      .expect(200, done)
  })
})
