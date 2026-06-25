export default function DashboardCard({

title,

value,

}) {

return (

<div
className="
rounded-xl
border
border-neutral-800
p-6
bg-neutral-950
"
>

<p
className="
text-sm
text-neutral-400
"
>

{title}

</p>

<h2
className="
text-4xl
font-bold
mt-3
"
>

{value}

</h2>

</div>

);

}