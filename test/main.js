"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ff = require("../index");
const chai = require("chai");
const expect = chai.expect;
const testFile = __dirname + '/video.mp4';
describe('Ffprobe test', function () {
    this.timeout(10000);
    it('test probe', (done) => {
        ff.ffprobe(testFile).then((probed) => {
            console.log(JSON.stringify(probed));
            expect(probed).to.be.ok;
            done();
        }).catch((err) => {
            done(err);
        });
    });
});
//# sourceMappingURL=main.js.map