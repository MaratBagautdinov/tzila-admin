import {TData, TUser} from "../types.ts";
import decodeJWT from "jwt-decode";

export const TOKEN = "authToken"
export const token = () => localStorage.getItem(TOKEN) || ''
export const user = (): TUser => decodeJWT(token())
export const parseData = (data: TData[]): any[] => data.map(el => parseOne(el))
export const parseOne = (el: TData | any, toString = false): TData => {
    console.log(el)
    for (const key in el) {
        if (key.substring(0, 4) === "json") {
            el[key] = toString ? JSON.stringify(el[key]) : JSON.parse(el[key])
        }
    }
    return el
}
export const stringifyOne = (el: TData | any) => {
    console.log(el)
    let json = {}
    if(el.fields){
        json = {json_field_ids: JSON.stringify(el)}
    }else if(el.type){
        json = {json_content: JSON.stringify(el)}
    }else{
        json = {json_block_ids: JSON.stringify(el.json_block_ids)}
    }

    return {
        priority: el.priority,
        title: el.title,
        ...json,
    }
}