(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();document.querySelector("input[name]");const f="AIzaSyBUYZdUW5wM6KfJOnn9K-TK7pDhJOY4Igc";document.getElementById("#app");let a=$('select[name="sort"] option').eq(0).val();const i=[];async function l(){i.length=0,$("#app").empty();const o=await(await fetch(`https://www.googleapis.com/webfonts/v1/webfonts?sort=${a}&key=${f}`)).json();o&&(i.push(...o.items),i.forEach(n=>{$("#app").append(`<div style="font-size: 2rem;line-height:120%;">${n.family}</div>`)}))}l();$('select[name="sort"]').change(r=>{a=r.target.value,l()});