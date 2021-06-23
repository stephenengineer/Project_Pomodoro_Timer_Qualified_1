(this["webpackJsonppomodoro-timer"]=this["webpackJsonppomodoro-timer"]||[]).push([[0],{10:function(e,a,t){},11:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(4),i=t.n(s),o=(t(10),t(1)),c=t(2);function l(e){return Object.entries(e).reduce((function(e,a){var t=Object(o.a)(a,2),n=t[0],r=t[1];return e.concat(r?n:void 0)}),[]).filter((function(e){return void 0!==e})).join(" ")}function u(e){var a=Math.floor(e).toString().padStart(2,"0");return"".concat(a,":00")}var m=function(e){var a=e.focusAndBreakDuration,t=e.handleBreakChange,n=e.session,s=a.breakDuration,i={};return n&&(i.opacity="0.5"),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"float-right"},r.a.createElement("div",{className:"input-group input-group-lg mb-2",style:i},r.a.createElement("span",{className:"input-group-text","data-testid":"duration-break"},"Break Duration: ",u(s)),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"button",className:l({"btn btn-secondary":!0,"break decrease":!n}),"data-testid":"decrease-break",onClick:t()},r.a.createElement("span",{className:l({"oi oi-minus":!0,"break decrease":!n})})),r.a.createElement("button",{type:"button",className:l({"btn btn-secondary":!0,"break increase":!n}),"data-testid":"increase-break",onClick:t()},r.a.createElement("span",{className:l({"oi oi-plus":!0,"break increase":!n})}))))))};var d=function(e){var a=e.focusAndBreakDuration,t=e.handleFocusChange,n=e.session,s=a.focusDuration,i={};return n&&(i.opacity="0.5"),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"input-group input-group-lg mb-2",style:i},r.a.createElement("span",{className:"input-group-text","data-testid":"duration-focus"},"Focus Duration: ",u(s)),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"button",className:l({"btn btn-secondary":!0,"focus-button decrease":!n}),"data-testid":"decrease-focus",onClick:t()},r.a.createElement("span",{className:l({"oi oi-minus":!0,"focus decrease":!n})})),r.a.createElement("button",{type:"button",className:l({"btn btn-secondary":!0,"focus-button increase":!n}),"data-testid":"increase-focus",onClick:t()},r.a.createElement("span",{className:l({"oi oi-plus":!0,"focus increase":!n})})))))};var p=function(e){var a=e.session,t=e.isTimerRunning,n={};return a&&!t||(n.display="none"),r.a.createElement("h2",{style:n},"PAUSED")};var b=function(e){var a=e.session,t=e.focusAndBreakDuration,n=t.focusDuration,s=t.breakDuration,i="Focusing"===(null===a||void 0===a?void 0:a.label)?n:s,o={};return a||(o.display="none"),r.a.createElement("div",{className:"col",style:o},r.a.createElement("div",{className:"progress",style:{height:"20px"}},r.a.createElement("div",{className:"progress-bar",role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":100-(null===a||void 0===a?void 0:a.timeRemaining)/(60*i)*100,style:{width:"".concat(100-(null===a||void 0===a?void 0:a.timeRemaining)/(60*i)*100,"%")}})))};var f=function(e){var a=e.playPause,t=e.isTimerRunning,n=e.session,s=e.handleStopClick,i={};return n||(i.opacity="0.5"),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"btn-group btn-group-lg mb-2",role:"group","aria-label":"Timer controls"},r.a.createElement("button",{type:"button",className:"btn btn-primary","data-testid":"play-pause",title:"Start or pause timer",onClick:a},r.a.createElement("span",{className:l({oi:!0,"oi-media-play":!t,"oi-media-pause":t})})),r.a.createElement("button",{type:"button",className:l({"btn btn-secondary":!0,"stop-button":n}),"data-testid":"stop",title:"Stop the session",style:i,onClick:s(),disabled:!n},r.a.createElement("span",{className:l({"oi oi-media-stop":!0,"stop-button":n})}))))};var v=function(e){var a=e.session,t=e.focusAndBreakDuration,n=t.focusDuration,s=t.breakDuration;return a&&r.a.createElement("div",{className:"col"},r.a.createElement("h2",{"data-testid":"session-title"},null===a||void 0===a?void 0:a.label," for ",u("Focusing"===(null===a||void 0===a?void 0:a.label)?n:s)," minutes"),r.a.createElement("p",{className:"lead","data-testid":"session-sub-title"},function(e){var a=Math.floor(e%3600/60).toString().padStart(2,"0"),t=Math.round(e%60).toString().padStart(2,"0");return"".concat(a,":").concat(t)}(null===a||void 0===a?void 0:a.timeRemaining)," remaining"))};function E(e){if(!e)return null;var a=Math.max(0,e.timeRemaining-1);return Object(c.a)(Object(c.a)({},e),{},{timeRemaining:a})}var g=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],s=a[1],i=Object(n.useState)(null),c=Object(o.a)(i,2),l=c[0],u=c[1],g=Object(n.useState)({focusDuration:25,breakDuration:5}),N=Object(o.a)(g,2),k=N[0],h=N[1],y=k.focusDuration,D=k.breakDuration;!function(e,a){var t=Object(n.useRef)();Object(n.useEffect)((function(){t.current=e}),[e]),Object(n.useEffect)((function(){if(null!==a){var e=setInterval((function(){t.current()}),a);return function(){return clearInterval(e)}}}),[a])}((function(){return 0===l.timeRemaining?(new Audio("https://bigsoundbank.com/UPLOAD/mp3/1482.mp3").play(),u(function(e,a){return function(t){return"Focusing"===t.label?{label:"On Break",timeRemaining:60*a}:{label:"Focusing",timeRemaining:60*e}}}(y,D))):u(E)}),t?1e3:null);var j=function(e){var a=e.target,t=y,n=D;a.className.includes("focus")&&(t=a.className.includes("decrease")?Math.max(5,y-5):Math.min(60,y+5)),a.className.includes("break")&&(n=a.className.includes("decrease")?Math.max(1,D-1):Math.min(15,D+1)),h({focusDuration:t,breakDuration:n})},O=function(e){e.target.className.includes("stop-button")&&(u(null),s(!1))};return r.a.createElement("div",{className:"pomodoro"},r.a.createElement("div",{className:"row"},r.a.createElement(d,{focusAndBreakDuration:k,handleFocusChange:function(){return j},session:l}),r.a.createElement(m,{focusAndBreakDuration:k,handleBreakChange:function(){return j},session:l})),r.a.createElement("div",{className:"row"},r.a.createElement(f,{playPause:function(){s((function(e){var a=!e;return a&&u((function(e){return null===e?{label:"Focusing",timeRemaining:60*y}:e})),a}))},isTimerRunning:t,session:l,handleStopClick:function(){return O}})),r.a.createElement("div",null,r.a.createElement("div",{className:"row mb-2"},r.a.createElement(v,{session:l,focusAndBreakDuration:k})),r.a.createElement("div",{className:"row",style:{justifyContent:"center"}},r.a.createElement(p,{session:l,isTimerRunning:t})),r.a.createElement("div",{className:"row mb-2"},r.a.createElement(b,{session:l,focusAndBreakDuration:k}))))};var N=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header container"},r.a.createElement("h1",null,"Pomodoro Timer")),r.a.createElement("div",{className:"container"},r.a.createElement(g,null)))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))},5:function(e,a,t){e.exports=t(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.a2d56c3c.chunk.js.map