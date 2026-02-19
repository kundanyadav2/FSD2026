import { FILE } from "dns";
import { readJsonFile, writeJsonFile } from "../DAY-5/readAndWriteServices.js";
import { connected } from "process";
import { log } from "console";
const File = "../DAY-5/students.json"

const updateData = async(id, data) => {
    const students = await readJsonFile(FILE0);
    if (students.length===0) return;

    const user = students.filter((student) => student.id == id);
    if(user.length===0) return;

    const updateData = students.filter((student) => student.id !== id);

    const response = await writeJsonFile(FILE, updateData);
    console.log(response.status);
    
}
deleteData(3);