
'use strict'

import supertest from 'supertest'
import { app } from '../../src/main.js'

describe('GET /api/djp/provincecity', () => {
  it('should be ok', done => {
    supertest(app.listen())
      .get('/api/djp/provincecity')
      .expect({ sz: '深圳' })
      .expect(200, done)
  })
})
