import chai from 'chai'
import ffprobe from '../index'

const expect = chai.expect

const testFile = __dirname + '/video.mp4'

describe('Ffprobe test', function() {
  this.timeout(10000)

  it('test probe', (done) => {

    ffprobe(testFile).then((probed) => {
      expect(probed).to.be.ok.and.be.an('Object')
      expect(probed).to.have.property('format').that.is.an('Object')
      expect(probed).to.have.property('streams').that.is.an('Array')
      expect(probed).to.have.property('audio').that.is.an('Object')
      done()
    }).catch((err) => {
      done(err)
    })

  })


})