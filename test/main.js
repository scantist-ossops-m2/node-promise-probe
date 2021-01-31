"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importDefault(require("chai"));
const index_1 = __importDefault(require("../index"));
const expect = chai_1.default.expect;
const testFile = __dirname + '/video.mp4';
describe('Ffprobe test', function () {
    this.timeout(10000);
    it('test probe', (done) => {
        index_1.default(testFile).then((probed) => {
            expect(probed).to.be.ok.and.be.an('Object');
            expect(probed).to.have.property('format').that.is.an('Object');
            expect(probed).to.have.property('streams').that.is.an('Array');
            expect(probed).to.have.property('audio').that.is.an('Object');
            done();
        }).catch((err) => {
            done(err);
        });
    });
});
//# sourceMappingURL=main.js.map