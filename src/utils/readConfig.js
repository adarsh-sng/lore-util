import * as fs from "node:fs/promises";

export const readConfig = async(path)=>{
    const fileData=await fs.readFile(path, { encoding: "utf8" })
    return fileData;
}