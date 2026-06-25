"use client";

import {

Chart as ChartJS,

CategoryScale,

LinearScale,

BarElement,

Tooltip,

Legend,

} from "chart.js";

import {

Bar,

} from "react-chartjs-2";

ChartJS.register(

CategoryScale,

LinearScale,

BarElement,

Tooltip,

Legend,

);

export default function BarChart({

result,


}){
console.log("BAR:", result);
if(!result){

return null;

}

const counts={};

result.iocs.forEach(i=>{

counts[i.type]=
(counts[i.type]||0)+1;

});

return(

<div
className="mt-10"
>

<Bar

data={

{

labels:
Object.keys(counts),

datasets:[

{

label:
"IOC Count",

data:
Object.values(counts),

},

],

}

}

/>

</div>

);

}