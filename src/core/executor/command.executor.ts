import { ChildProcessWithoutNullStreams } from "child_process";
import { IStreamLogger } from "../handlers/stream-logger.interface";
import { ICommandExect } from "./command.types";
// template method
export abstract class CommandExecutor<Input> {
    constructor(private logger: IStreamLogger) {

    }

    public async execute() {
        const input = await this.prompt();
        const command = this.build(input);
        const stream = this.spawn(command);
        this.processStream(stream, this.logger);
    }

    protected abstract prompt(): Promise<Input>;
    protected abstract build(input: Input): ICommandExect;
    protected abstract spawn(command: ICommandExect): ChildProcessWithoutNullStreams;
    protected abstract processStream(stream: ChildProcessWithoutNullStreams, logger: IStreamLogger): void;
}

// spawn('ffmpeg', ['-i', '///']);