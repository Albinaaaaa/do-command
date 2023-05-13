import { ChildProcessWithoutNullStreams } from "child_process";
import { ISreamLogger } from "./stream-logger.interface";

// proxy pattern
export class StreamHandler {
    constructor(private logger: ISreamLogger) { }
    
    processOutput(stream: ChildProcessWithoutNullStreams) {
        stream.stdout.on('data', (data: any) => {
            this.logger.log(data);
        });

        stream.stderr.on('data', (data: any) => {
            this.logger.error(data);
        });

        stream.on('close', () => {
            this.logger.end();
        })
    }
}