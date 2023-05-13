export class FfmpegBuilder {
    private inputPath: string;
    // private outputPath: string;
    private options: Map<string, string> = new Map();

    constructor() {
        this.options.set("-c:v", 'libx264');
    }

    input(inputPath: string): this {
        this.inputPath = inputPath;
        return this;
    }

    setVideoSize(wight: number, height: number): this {
        this.options.set('-s', `${wight}x${height}`);
        return this;
    }

    output(outputPath: string): string[] {
        // this.outputPath = outputPath;
        if (!this.inputPath) {
            throw new Error('Не задан параметр input');
        }
        const args: string[] = ['-i', this.inputPath];
        this.options.forEach((value, key) => {
            args.push(key);
            args.push(value);
        });
        args.push(outputPath);
        return args;
    }
}

