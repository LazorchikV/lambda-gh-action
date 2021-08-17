import {serverAirtable} from './serverAirtable';

export let list = setTimeout(function heyhey(serverAirtable){
    let el =[];
    el = serverAirtable.records.title;
}, 1000)
//To use it:
heyhey(serverAirtable)
setTimeout(heyhey, 1000, el);