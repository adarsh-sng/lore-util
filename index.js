#!/usr/bin/env node
import * as fs from 'node:fs';
import dotenv from 'dotenv';
dotenv.config();
import os from 'node:os';
import path from 'node:path';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { exec, spawn } from 'node:child_process';
// const rl = readline.createInterface({ input, output });
// const answer = await rl.question('Give a file path(one time thing- ');
// console.log(`file name received: ${answer}`);
const filePath =process.env.filePath
const configDir=path.join(os.homedir(),'.lore')
const configPath=path.join(configDir,'config.json')
//TODO - change this verification of file method to something better.
//REVIEW - mixing the sync and async function fs and fs/promise.
//NOTE - change them to async later.
try{
    const stats = fs.statSync(configPath);
}catch(err){
    console.log(`config file was not there `)
    fs.mkdirSync(configDir,{recursive:true})
    console.log(`config dir created at ${configDir}`)
    const versionData ={firstRun:false,version:1}
    const jsonData = JSON.stringify(versionData, null, 2); // null and 2 are for pretty-printing (indentation)
    fs.writeFileSync(configPath,jsonData);
}
exec(`code ${filePath}`,(err,stdout,stderr)=>{
    if(err){
        console.log(`error is ${err}`)
        return;
    }
    console.log(stdout)
})

// rl.close();










