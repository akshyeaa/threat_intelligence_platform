"use client";

import { useEffect, useState } from "react";

import DashboardCard
from "@/components/DashboardCard";
import HistoryCard from "@/components/HistoryCard";
import PieChart
from "@/components/PieChart";

import {
getHistory
}
from "@/services/api";

export default function Dashboard() {

const [history,setHistory]
=
useState([]);

useEffect(()=>{

load();

},[]);

async function load() {

    const data = await getHistory();

    console.log("History API:", data);

    setHistory(data);

}

const total =
history.length;

const high =
history.filter(
h=>h.highest_risk==="High"
).length;

const iocs =
history.reduce(
(sum,item)=>
sum+item.ioc_count,
0
);

return(

<main
className="
max-w-7xl
mx-auto
p-8
">

<h1
className="
text-5xl
font-bold
mb-10
">

Dashboard

</h1>

<h2 className="text-3xl font-bold mt-12 mb-6">
  Recent Analyses
</h2>

<div className="space-y-5">

  {history.map((item) => (
    <HistoryCard
      key={item.id}
      item={item}
    />
  ))}

</div>
<div>
<PieChart
history={history}
/>
</div>
</main>

);

}