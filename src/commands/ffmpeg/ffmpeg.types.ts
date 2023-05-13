import { ICommandExect } from "../../core/executor/command.types";

export interface IFfmpegInput {
    width: number;
    height: number;
    path: string;
    name: string;
}

export interface ICommandExecFfmpeg extends ICommandExect {
    output: string;
}