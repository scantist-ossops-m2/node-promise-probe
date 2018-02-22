import * as ff from "../index"

import * as chai from "chai"

const expect = chai.expect

const testFile = __dirname+'/video.mp4'

describe('Ffprobe test', function () {
  this.timeout(10000)

  it('test probe', (done) => {

    ff.ffprobe(testFile).then((probed) => {
      console.log(JSON.stringify(probed))
      expect(probed).to.be.ok
      done()
    }).catch((err) => {
      done(err)
    })

  })

})