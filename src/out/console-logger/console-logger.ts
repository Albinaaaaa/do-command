import { Console } from "console";
import { ISreamLogger } from "../../core/handlers/stream-logger.interface";
// singleton
export class ConsoleLogger implements ISreamLogger {
    private static logger: ConsoleLogger;
    public static getInstance() {
        if (!ConsoleLogger.logger) {
            ConsoleLogger.logger = new ConsoleLogger();
        } 
        return ConsoleLogger.logger;
    }

    log(...args: any[]): void {
        console.log(...args);
    }
    error(...args: any[]): void {
        console.log(...args);
    }
    end(): void {
        console.log("Done");
    }

}