"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FfmpegBuilder = void 0;
class FfmpegBuilder {
    constructor() {
        // private outputPath: string;
        this.options = new Map();
        this.options.set("-c:v", 'libx264');
    }
    input(inputPath) {
        this.inputPath = inputPath;
        return this;
    }
    setVideoSize(wight, height) {
        this.options.set('-s', `${wight}x${height}`);
        return this;
    }
    output(outputPath) {
        // this.outputPath = outputPath;
        if (!this.inputPath) {
            throw new Error('Не задан параметр input');
        }
        const args = ['-i', this.inputPath];
        this.options.forEach((value, key) => {
            args.push(key);
            args.push(value);
        });
        args.push(outputPath);
        return args;
    }
}
exports.FfmpegBuilder = FfmpegBuilder;
