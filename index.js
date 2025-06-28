#!/usr/bin/env node
// import fs from fs;
import dotenv from 'dotenv';
dotenv.config();
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { exec, spawn } from 'node:child_process';
// const rl = readline.createInterface({ input, output });
// const answer = await rl.question('Give a file path(one time thing- ');
// console.log(`file name received: ${answer}`);
const filePath =process.env.filePath

exec(`code ${filePath}`,(err,stdout,stderr)=>{
    if(err){
        console.log(`error is ${err}`)
        return;
    }
    console.log(stdout)
})

// rl.close();










