import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as m,i as h}from"./assets/vendor-77e16229.js";const f=document.querySelector("#datetime-picker"),e=document.querySelector("button[data-start]"),n={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let c=null;e.classList.add("not-activated");e.disabled=!0;let y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0].getTime()<Date.now()?(h.show({backgroundColor:"#ef4040",messageColor:"white",messageSize:"16px",position:"topRight",message:"Please choose a date in the future",close:!1}),e.disabled=!0,e.classList.replace("on-active","not-activated")):(console.log(r.selectedDates[0]),e.disabled=!1,e.classList.replace("not-activated","on-active"))}};function p(){c=setInterval(()=>{const t=Date.now(),a=r.selectedDates[0]-t;e.disabled=!0,e.classList.replace("on-active","not-activated");const o=v(a);n.days.textContent=s(o.days),n.hours.textContent=s(o.hours),n.minutes.textContent=s(o.minutes),n.seconds.textContent=s(o.seconds),a<1e3&&clearInterval(c)},1e3)}function s(t){return String(t).padStart(2,"0")}function v(t){const d=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:d,hours:i,minutes:u,seconds:l}}const r=m(f,y);e.addEventListener("click",p);
//# sourceMappingURL=commonHelpers.js.map
