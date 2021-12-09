import {input_data} from "./data.js";

let data = input_data.split("\n")
.map((item, index) => ({ depth: parseInt(item), index }))

data = data.map(item => ({...item, change: item.index === 0? 0 : item.depth - data.find(search => search.index === item.index-1).depth}))

console.log(`Count: ${data.filter(item => item.change > 0).length}`);

