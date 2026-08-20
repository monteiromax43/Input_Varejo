import {createHash} from "node:crypto";
export const hashKey=(value:string)=>createHash("sha256").update(value).digest("hex");
