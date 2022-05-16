import { PathLike } from "fs-extra";

export interface file {
    text: string,
    children?: file[],
    link?: PathLike
}