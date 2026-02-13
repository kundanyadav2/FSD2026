import fs from "fs";
const readDirsync = ()=>{
    fs.readdir("../day_02",(err,data)=>{
        const data = fs.readdirSync("../day_02");a