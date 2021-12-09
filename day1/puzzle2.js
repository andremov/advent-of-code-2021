import { input_data } from "./data.js";

let data = input_data
  .split("\n")
  .map((item, index) => ({ depth: parseInt(item), index }));

let windows = data.map((root) =>
  data.filter((item) => item.index >= root.index && item.index < root.index + 3)
);

windows = windows.map((item) => item.reduce((a, b) => (a.depth ? a.depth : a) + (b.depth? b.depth : b), 0))
.map((item, index) => ({depth: item, index}))

windows = windows.map(item => ({...item, change: item.index === 0? 0 : item.depth - windows.find(search => search.index === item.index-1).depth}))

console.log(`Count: ${windows.filter(item => item.change > 0).length}`);
