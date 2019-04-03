Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const ff = require("../index");
const expect = chai.expect;
const testFile = __dirname + '/video.mp4';
describe('Ffprobe test', function () {
    this.timeout(10000);
    it('test probe', (done) => {
        ff.ffprobe(testFile).then((probed) => {
            expect(probed).to.be.ok.and.be.an('Object');
            expect(probed).to.have.property('format').that.is.an('Object');
            expect(probed).to.have.property('streams').that.is.an('Array');
            expect(probed).to.have.property('audio').that.is.an('Object');
            done();
        }).catch((err) => {
            done(err);
        });
    });
    it('test create empty', (done) => {
        const tmpFile = '/tmp/oggtmp_' + Date.now() + '.ogg';
        ff.createMuteOgg(tmpFile, { seconds: 3, sampleRate: 22050, numOfChannels: 2 }).then(() => {
            ff.ffprobe(tmpFile).then((probed) => {
                expect(parseInt(probed.format.duration)).to.be.eq(3);
                expect(parseInt(probed.audio.sample_rate)).to.be.eq(22050);
                expect(probed.audio.channels).to.be.eq(2);
                done();
            }).catch((err) => {
                done(err);
            });
        }).catch((err) => {
            done(err);
        });
    });
    it('clone as empty', (done) => {
        const tmpFile = '/tmp/oggtmp_' + Date.now() + '.ogg';
        ff.cloneOggAsMuted(testFile, tmpFile).then(() => {
            ff.ffprobe(tmpFile).then((probed) => {
                expect(parseInt(probed.format.duration)).to.be.eq(5);
                expect(parseInt(probed.audio.sample_rate)).to.be.eq(44100);
                expect(probed.audio.channels).to.be.eq(2);
                done();
            }).catch((err) => {
                done(err);
            });
        }).catch((err) => {
            done(err);
        });
    });
    it('clone as empty 10 second', (done) => {
        const tmpFile = '/tmp/oggtmp_' + Date.now() + '.ogg';
        ff.cloneOggAsMuted(testFile, tmpFile, 10).then(() => {
            ff.ffprobe(tmpFile).then((probed) => {
                expect(parseInt(probed.format.duration)).to.be.eq(10);
                expect(parseInt(probed.audio.sample_rate)).to.be.eq(44100);
                expect(probed.audio.channels).to.be.eq(2);
                done();
            }).catch((err) => {
                done(err);
            });
        }).catch((err) => {
            done(err);
        });
    });
});
//# sourceMappingURL=main.js.map