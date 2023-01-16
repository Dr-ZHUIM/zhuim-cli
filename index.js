#!/usr/bin/env node

console.log("Hello,Wangtianmin!");
console.log("Hello,SimaJinyang!");

const {program} = require("commander");
// version info
program.version('1.0.0');
// command installation
program
    .command("create <name>")
    .description("create a project")
    .option("-t, --type <type>","type of the project to create")
    .action((name,opts)=>{
        console.log(name,opts.type);
    })
program.parse(process.argv);
