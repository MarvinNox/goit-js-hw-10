import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f,i as h}from"./assets/vendor-A92OCY9B.js";let t;const n=document.querySelector("div.timer-box>button"),i=document.querySelector("#datetime-picker"),y=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]");n.addEventListener("click",C);n.disabled=!0;const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]<Date.now()?h.error({timeout:4e3,message:"Please choose a date in the future",position:"topRight",backgroundColor:"#ef4040",messageSize:"16px",messageColor:"rgb(255, 255, 255)"}):(t=e[0]-Date.now(),n.disabled=!1)}};f("#datetime-picker",g);function C(){n.disabled=!0,i.disabled=!0;const e=setInterval(()=>{if(t>1e3){t-=1e3;const{days:r,hours:s,minutes:a,seconds:c}=q(t);y.textContent=o(r),S.textContent=o(s),p.textContent=o(a),b.textContent=o(c)}else t<=1e3&&(clearInterval(e),i.disabled=!1)},1e3)}function q(e){const d=Math.floor(e/864e5),u=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:d,hours:u,minutes:l,seconds:m}}function o(e){return e.toString().padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map
