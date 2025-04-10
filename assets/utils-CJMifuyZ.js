import{a as n}from"./Header-BFaJ6ghA.js";const i=async(t,a,s)=>{const o=await fetch(`${n}${t}`,s||{method:"POST",body:JSON.stringify(s)}),e=await o.json();o.ok&&a(e)};export{i as p};
