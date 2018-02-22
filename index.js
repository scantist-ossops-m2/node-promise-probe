"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Promise = require("bluebird");
const child_process_1 = require("child_process");
function ffprobe(file) {
    return new Promise((resolve, reject) => {
        child_process_1.exec('ffprobe -v quiet -print_format json -show_format -show_streams ' + file, (error, stdout, stderr) => {
            if (error)
                return reject(error);
            if (!stdout)
                return reject(new Error('can\'t probe file ' + file));
            let ffprobed;
            try {
                ffprobed = JSON.parse(stdout);
            }
            catch (err) {
                return reject(err);
            }
            for (let i = 0; i < ffprobed.streams.length; i++) {
                if (ffprobed.streams[i].codec_type === 'video')
                    ffprobed.video = ffprobed.streams[i];
                if (ffprobed.streams[i].codec_type === 'audio')
                    ffprobed.audio = ffprobed.streams[i];
            }
            resolve(ffprobed);
        });
    });
}
exports.ffprobe = ffprobe;
//# sourceMappingURL=index.js.map