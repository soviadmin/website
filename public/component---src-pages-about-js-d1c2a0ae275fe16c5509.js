(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"3XHS":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("qhky"),l=a("yx9B"),c=a.n(l),s=a("t6ne"),o=a.n(s);var u=a("NGwb"),m=a.n(u),f=a("7oih"),h=a("85sL"),d=a.n(h);t.default=function(){var e=Object(n.useState)({perc_customer:0,num_tasks:0,num_hours:0}),t=e[0],a=e[1],l=Object(n.useState)("en"),s=l[0],u=l[1],h=Object(n.useRef)(),p=function(e){var t=Object(n.useState)(!1),a=t[0],r=t[1],i=Object(n.useRef)();return Object(n.useEffect)((function(){return i.current=new IntersectionObserver((function(e){var t=e[0];return r(t.isIntersecting)})),i.current.observe(e.current),function(){i.current.disconnect()}}),[]),a}(h),y=Object(n.useRef)();Object(n.useEffect)((function(){!0===p&&a(Object.assign({},t,{perc_customer:97,perc_tasks:95,num_hours:21e4})),y.current=localStorage.getItem("language"),u(y.current)}),[p]);var b={EN:{title:"About",breadcrumb1:"Home",breadcrumb2:"About",heading:"About us",sec1:{heading:"We are dedicated providers",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa."},sec2:{heading:"Over 1,500 customers have used SOVI services",subheading1:"Customers satisfied with the service",subheading2:"Tasks completed",subheading3:"Hours of work"},sec3:{heading:"At SOVI, safety is our first priority",text:"As a safety-driven company, we made sure to strictly follow safety procedures at all times. Our team is committed to using completely safe tools and equipment while taking prompt actions to report dangerous situations."}},VI:{title:"Giới thiệu",breadcrumb1:"Trang chủ",breadcrumb2:"Giới thiệu",heading:"Về chúng tôi",sec1:{heading:"Chúng tôi là nhà cung cấp dịch vụ chu đáo và tận tâm",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa."},sec2:{heading:"SOVI đã cung ứng dịch vụ cho các công ty logistics hàng đầu thế giới",subheading1:"Khách hàng hài lòng với dịch vụ",subheading2:"Số nhiệm vụ đã hoàn thành",subheading3:"Giờ làm việc"},sec3:{heading:"An toàn là ưu tiên hàng đầu tại SOVI",text:"Chúng tôi luôn chủ động thực hiện nghiêm ngặt các biện pháp an toàn lao động. Đội ngũ nhân viên SOVI cam kết chỉ sử dụng thiết bị và công cụ đã được đảm bảo an toàn tuyệt đối và báo cáo mọi tình huống nguy hiểm nhanh nhất có thể."}}};return b="en"===s?b.EN:b.VI,r.a.createElement(f.a,null,r.a.createElement(i.a,{title:b.title}),r.a.createElement("div",{className:"about-page"},r.a.createElement("header",{className:"header"},r.a.createElement(m.a,{animateIn:"fadeIn",animateOnce:!0},r.a.createElement("nav",{"aria-label":"breadcrumb"},r.a.createElement("ol",{class:"breadcrumb"},r.a.createElement("li",{class:"breadcrumb-item"},r.a.createElement("a",{href:"/"},b.breadcrumb1)),r.a.createElement("li",{class:"breadcrumb-item active","aria-current":"page"},b.breadcrumb2))),r.a.createElement("h1",{className:"title"},b.heading))),r.a.createElement("div",null,r.a.createElement("div",{className:"intro row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement(m.a,{animateIn:"fadeInLeft",animateOnce:!0},r.a.createElement("h2",null,b.sec1.heading),r.a.createElement("p",null,b.sec1.text))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement(m.a,{animateIn:"bounceIn",animateOnce:!0},r.a.createElement("img",{src:d.a,className:"intro-image",alt:"People"})))),r.a.createElement("div",{className:"stats"},r.a.createElement(m.a,{animateIn:"fadeIn",animateOnce:!0},r.a.createElement("h2",{className:"stats-heading"},b.sec2.heading)),r.a.createElement("div",{className:"row",ref:h},r.a.createElement("div",{className:"col-sm-4"},r.a.createElement(o.a,{value:t.perc_customer,className:"numbers",formatValue:function(e){return e.toFixed(0)},duration:1e3,component:"text",frameStyle:function(e){return{opacity:e/100}}}),r.a.createElement("span",{className:"numbers"},"%"),r.a.createElement("p",null,b.sec2.subheading1)),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement(o.a,{value:t.perc_tasks,className:"numbers",formatValue:function(e){return e.toFixed(0)},duration:1e3,frameStyle:function(e){return{opacity:e/100}}}),r.a.createElement("span",{className:"numbers"},"%"),r.a.createElement("p",null,b.sec2.subheading2)),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement(o.a,{value:t.num_hours,className:"numbers",formatValue:function(e){return e.toLocaleString("en-US",{minimumFractionDigits:0})},duration:1e3,frameStyle:function(e){return{opacity:e/100}}}),r.a.createElement("span",{className:"numbers"},"+"),r.a.createElement("p",null,b.sec2.subheading3)))),r.a.createElement("div",{className:"claim"},r.a.createElement(m.a,{animateIn:"pulse",animateOnce:!0},r.a.createElement("h2",{className:"claim-heading"},b.sec3.heading),r.a.createElement("p",null,b.sec3.text),r.a.createElement(c.a,{className:"claim-image"}))))))}},"85sL":function(e,t,a){e.exports=a.p+"static/group-1408839e9d249b2857bf7a36ba6ed52b.jpg"},aLvP:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a("q1tI"),l=o(i),c=o(a("17x9")),s=o(a("xEkU"));function o(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={currentValue:e.initialValue},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.prepareTween(this.props)}},{key:"componentWillReceiveProps",value:function(e){this.state.currentValue!==e.value&&(this.tweenHandle&&this.endTween(),this.prepareTween(e))}},{key:"componentWillUnmount",value:function(){this.endTween()}},{key:"prepareTween",value:function(){var e=this;this.tweenHandle=(0,s.default)((function(t){e.tweenValue(t,!0)}))}},{key:"endTween",value:function(){s.default.cancel(this.tweenHandle),this.setState(n({},this.state,{currentValue:this.props.value}))}},{key:"ensureSixtyFps",value:function(e){var t=this.state.currentTime;return!t||e-t>16}},{key:"tweenValue",value:function(e,t){if(this.ensureSixtyFps(e)){var a=this.props,n=a.value,r=a.duration,i=this.state.currentValue,l=e,c=t?e:this.state.startTime,o=t?i:this.state.fromValue,u=void 0;(u=l-c>=r?n:o+(l-c)/r*(n-o))!==n?(this.setState({currentValue:u,startTime:c||l,fromValue:o,currentTime:l}),this.tweenHandle=(0,s.default)(this.tweenValue.bind(this))):this.endTween()}else this.tweenHandle=(0,s.default)(this.tweenValue.bind(this))}},{key:"render",value:function(){var e=this.props,t=e.formatValue,a=e.value,r=e.className,i=e.frameStyle,c=e.stepPrecision,s=this.state,o=s.currentValue,u=s.fromValue,f=this.props.style,h=o,d=a-u;o!==a&&(c>0?h=Number(o.toFixed(c)):d<0&&0===c?h=Math.floor(o):d>0&&0===c&&(h=Math.ceil(o)));var p=i(Math.abs((h-u)/(a-u)*100));return f&&p?f=n({},f,p):p&&(f=p),l.default.createElement(this.props.component,n({},m(this.props),{className:r,style:f}),t(h))}}]),t}(i.Component);function m(e){var t={},a=Object.keys(e),n=Object.keys(u.propTypes);return a.filter((function(e){return n.indexOf(e)<0})).forEach((function(a){t[a]=e[a]})),t}u.propTypes={component:c.default.any,formatValue:c.default.func,value:c.default.number,initialValue:c.default.number,duration:c.default.number,frameStyle:c.default.func,stepPrecision:c.default.number,style:c.default.object,className:c.default.string},u.defaultProps={component:"span",formatValue:function(e){return e},initialValue:0,duration:300,frameStyle:function(){return{}},value:0},t.default=u},bQgK:function(e,t,a){(function(t){(function(){var a,n,r,i,l,c;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(a()-l)/1e6},n=t.hrtime,i=(a=function(){var e;return 1e9*(e=n())[0]+e[1]})(),c=1e9*t.uptime(),l=i-c):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)}).call(this,a("8oxB"))},t6ne:function(e,t,a){"use strict";var n,r=a("aLvP"),i=(n=r)&&n.__esModule?n:{default:n};e.exports=i.default},xEkU:function(e,t,a){(function(t){for(var n=a("bQgK"),r="undefined"==typeof window?t:window,i=["moz","webkit"],l="AnimationFrame",c=r["request"+l],s=r["cancel"+l]||r["cancelRequest"+l],o=0;!c&&o<i.length;o++)c=r[i[o]+"Request"+l],s=r[i[o]+"Cancel"+l]||r[i[o]+"CancelRequest"+l];if(!c||!s){var u=0,m=0,f=[];c=function(e){if(0===f.length){var t=n(),a=Math.max(0,1e3/60-(t-u));u=a+t,setTimeout((function(){var e=f.slice(0);f.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(u)}catch(a){setTimeout((function(){throw a}),0)}}),Math.round(a))}return f.push({handle:++m,callback:e,cancelled:!1}),m},s=function(e){for(var t=0;t<f.length;t++)f[t].handle===e&&(f[t].cancelled=!0)}}e.exports=function(e){return c.call(r,e)},e.exports.cancel=function(){s.apply(r,arguments)},e.exports.polyfill=function(e){e||(e=r),e.requestAnimationFrame=c,e.cancelAnimationFrame=s}}).call(this,a("yLpj"))},yx9B:function(e,t,a){var n=a("q1tI");function r(e){return n.createElement("svg",e,[n.createElement("defs",{key:0},n.createElement("linearGradient",{id:"b629f179-8ab2-4411-a7df-956765958247",x1:"344.9209",y1:"369.39721",x2:"505.39917",y2:"369.39721",gradientUnits:"userSpaceOnUse"},[n.createElement("stop",{offset:"0",stopColor:"gray",stopOpacity:"0.25",key:0}),n.createElement("stop",{offset:"0.53514",stopColor:"gray",stopOpacity:"0.12",key:1}),n.createElement("stop",{offset:"1",stopColor:"gray",stopOpacity:"0.1",key:2})])),n.createElement("title",{key:1},"Security on"),n.createElement("path",{d:"M601.69959,76.85442,331.99753,242.82491s0,342.31415,269.70206,529.031c269.70205-186.7168,269.70205-529.031,269.70205-529.031Z",transform:"translate(-170.30041 -66.10811)",fill:"#3f3d56",key:2}),n.createElement("path",{d:"M603.30988,76.85442l-4.61029,2.83711V768.61826c1.531,1.08244,3.06152,2.16537,4.61029,3.2376,269.70205-186.7168,269.70205-529.031,269.70205-529.031Z",transform:"translate(-170.30041 -66.10811)",fill:"#8585aa",opacity:"0.04",key:3}),n.createElement("g",{opacity:"0.7",key:4},n.createElement("polygon",{points:"366.106 347.068 416.949 393.674 479.977 302.75 505.399 323.935 416.949 436.044 344.921 355.542 366.106 347.068",fill:"url(#b629f179-8ab2-4411-a7df-956765958247)"})),n.createElement("polygon",{points:"378.106 349.868 419.349 387.674 477.777 301.75 498.399 318.935 419.349 422.044 360.921 356.742 378.106 349.868",fill:"#3ad29f",key:5}),n.createElement("path",{d:"M335.59008,114.06442a3.67459,3.67459,0,0,1-2.04748-4.441,1.766,1.766,0,0,0,.0799-.40754h0a1.84257,1.84257,0,0,0-3.31045-1.22119h0a1.7661,1.7661,0,0,0-.2039.3618,3.67461,3.67461,0,0,1-4.441,2.04749,1.766,1.766,0,0,0-.40754-.07991h0a1.84257,1.84257,0,0,0-1.22119,3.31045h0a1.76564,1.76564,0,0,0,.3618.2039,3.67459,3.67459,0,0,1,2.04748,4.441,1.76611,1.76611,0,0,0-.0799.40755h0a1.84257,1.84257,0,0,0,3.31045,1.22119h0a1.76637,1.76637,0,0,0,.2039-.3618,3.67459,3.67459,0,0,1,4.441-2.04749,1.766,1.766,0,0,0,.40754.0799h0a1.84257,1.84257,0,0,0,1.22119-3.31044h0A1.7661,1.7661,0,0,0,335.59008,114.06442Z",transform:"translate(-170.30041 -66.10811)",fill:"#4d8af0",opacity:"0.5",key:6}),n.createElement("path",{d:"M189.59008,439.06442a3.67459,3.67459,0,0,1-2.04748-4.441,1.766,1.766,0,0,0,.0799-.40754h0a1.84257,1.84257,0,0,0-3.31045-1.22119h0a1.7661,1.7661,0,0,0-.2039.3618,3.67461,3.67461,0,0,1-4.441,2.04749,1.766,1.766,0,0,0-.40754-.07991h0a1.84257,1.84257,0,0,0-1.22119,3.31045h0a1.76564,1.76564,0,0,0,.3618.2039,3.67459,3.67459,0,0,1,2.04748,4.441,1.76611,1.76611,0,0,0-.0799.40755h0a1.84257,1.84257,0,0,0,3.31045,1.22119h0a1.76637,1.76637,0,0,0,.2039-.3618,3.67459,3.67459,0,0,1,4.441-2.04749,1.766,1.766,0,0,0,.40754.0799h0a1.84257,1.84257,0,0,0,1.22119-3.31044h0A1.7661,1.7661,0,0,0,189.59008,439.06442Z",transform:"translate(-170.30041 -66.10811)",fill:"#4d8af0",opacity:"0.5",key:7}),n.createElement("circle",{cx:"748.39917",cy:"254",r:"6",fill:"#f55f44",opacity:"0.5",key:8}),n.createElement("circle",{cx:"121.39917",cy:"683",r:"6",fill:"#f55f44",opacity:"0.5",key:9}),n.createElement("circle",{cx:"850.39917",cy:"485",r:"6",fill:"#f55f44",opacity:"0.5",key:10}),n.createElement("path",{d:"M874.59008,143.06442a3.67459,3.67459,0,0,1-2.04748-4.441,1.766,1.766,0,0,0,.0799-.40754h0a1.84257,1.84257,0,0,0-3.31045-1.22119h0a1.7661,1.7661,0,0,0-.2039.3618,3.67461,3.67461,0,0,1-4.441,2.04749,1.766,1.766,0,0,0-.40754-.07991h0a1.84257,1.84257,0,0,0-1.22119,3.31045h0a1.76564,1.76564,0,0,0,.3618.2039,3.67459,3.67459,0,0,1,2.04748,4.441,1.76611,1.76611,0,0,0-.0799.40755h0a1.84257,1.84257,0,0,0,3.31045,1.22119h0a1.76637,1.76637,0,0,0,.2039-.3618,3.67459,3.67459,0,0,1,4.441-2.04749,1.766,1.766,0,0,0,.40754.0799h0a1.84257,1.84257,0,0,0,1.22119-3.31044h0A1.7661,1.7661,0,0,0,874.59008,143.06442Z",transform:"translate(-170.30041 -66.10811)",fill:"#4d8af0",opacity:"0.5",key:11}),n.createElement("path",{d:"M974.59008,771.06442a3.67459,3.67459,0,0,1-2.04748-4.441,1.766,1.766,0,0,0,.0799-.40754h0a1.84257,1.84257,0,0,0-3.31045-1.22119h0a1.7661,1.7661,0,0,0-.2039.3618,3.67461,3.67461,0,0,1-4.441,2.04749,1.766,1.766,0,0,0-.40754-.07991h0a1.84257,1.84257,0,0,0-1.22119,3.31045h0a1.76564,1.76564,0,0,0,.3618.2039,3.67459,3.67459,0,0,1,2.04748,4.441,1.76611,1.76611,0,0,0-.0799.40755h0a1.84257,1.84257,0,0,0,3.31045,1.22119h0a1.76637,1.76637,0,0,0,.2039-.3618,3.67459,3.67459,0,0,1,4.441-2.04749,1.766,1.766,0,0,0,.40754.0799h0a1.84257,1.84257,0,0,0,1.22119-3.31044h0A1.7661,1.7661,0,0,0,974.59008,771.06442Z",transform:"translate(-170.30041 -66.10811)",fill:"#4d8af0",opacity:"0.5",key:12}),n.createElement("path",{d:"M182.59008,249.06442a3.67459,3.67459,0,0,1-2.04748-4.441,1.766,1.766,0,0,0,.0799-.40754h0a1.84257,1.84257,0,0,0-3.31045-1.22119h0a1.7661,1.7661,0,0,0-.2039.3618,3.67461,3.67461,0,0,1-4.441,2.04749,1.766,1.766,0,0,0-.40754-.07991h0a1.84257,1.84257,0,0,0-1.22119,3.31045h0a1.76564,1.76564,0,0,0,.3618.2039,3.67459,3.67459,0,0,1,2.04748,4.441,1.76611,1.76611,0,0,0-.0799.40755h0a1.84257,1.84257,0,0,0,3.31045,1.22119h0a1.76637,1.76637,0,0,0,.2039-.3618,3.67459,3.67459,0,0,1,4.441-2.04749,1.766,1.766,0,0,0,.40754.0799h0a1.84257,1.84257,0,0,0,1.22119-3.31044h0A1.7661,1.7661,0,0,0,182.59008,249.06442Z",transform:"translate(-170.30041 -66.10811)",fill:"#4d8af0",opacity:"0.5",key:13}),n.createElement("circle",{cx:"79.39917",cy:"284",r:"6",fill:"#47e6b1",opacity:"0.5",key:14}),n.createElement("circle",{cx:"853.39917",cy:"332",r:"6",fill:"#47e6b1",opacity:"0.5",key:15}),n.createElement("g",{opacity:"0.5",key:16},[n.createElement("rect",{x:"583.39917",width:"3",height:"17",fill:"#47e6b1",key:0}),n.createElement("rect",{x:"753.69959",y:"66.10811",width:"3",height:"17",transform:"translate(659.50728 -746.69959) rotate(90)",fill:"#47e6b1",key:1})]),n.createElement("g",{opacity:"0.5",key:17},[n.createElement("rect",{x:"594.39917",y:"666",width:"3",height:"17",fill:"#47e6b1",key:0}),n.createElement("rect",{x:"764.69959",y:"732.10811",width:"3",height:"17",transform:"translate(1336.50728 -91.69959) rotate(90)",fill:"#47e6b1",key:1})]),n.createElement("g",{opacity:"0.5",key:18},[n.createElement("rect",{x:"26.39917",y:"702",width:"3",height:"17",fill:"#47e6b1",key:0}),n.createElement("rect",{x:"196.69959",y:"768.10811",width:"3",height:"17",transform:"translate(804.50728 512.30041) rotate(90)",fill:"#47e6b1",key:1})]),n.createElement("g",{opacity:"0.5",key:19},[n.createElement("rect",{x:"709.39917",y:"396",width:"3",height:"17",fill:"#47e6b1",key:0}),n.createElement("rect",{x:"879.69959",y:"462.10811",width:"3",height:"17",transform:"translate(1181.50728 -476.69959) rotate(90)",fill:"#47e6b1",key:1})]),n.createElement("polygon",{points:"795.606 123.018 802.049 128.924 811.177 115.5 814.399 118.185 802.049 134.294 792.921 124.092 795.606 123.018",fill:"#47e6b1",opacity:"0.5",key:20}),n.createElement("rect",{x:"760.28981",y:"305.80003",width:"22.24232",height:"28.59727",transform:"translate(-182.12458 -35.97628) rotate(-2.22071)",fill:"#8585aa",key:21}),n.createElement("path",{d:"M681.71009,405.45856s-30.779-14.70576-30.28646-2.00541,31.02521,21.05594,31.02521,21.05594Z",transform:"translate(-170.30041 -66.10811)",fill:"#ffb9b9",key:22}),n.createElement("path",{d:"M698.59666,512.91906s-14.52107,35.54159-19.88626,61.18854-13.53608,60.94229-3.02582,85.97362,40.39191,98.59935,40.69972,106.53707-2.55946,15.99856,3.79071,15.75231,40.90677-11.12587,42.30963-15.95007-11.79-17.03205-11.79-17.03205L718.11733,647.30624,752.1068,580.801l24.51648,99.215,4.80184,123.82844s23.56691-7.27361,26.98824-1.04656c0,0,10.55875-14.71883,11.9-21.13057s-4.98653-128.59106-4.98653-128.59106,21.63236-139.16288,4.16937-138.4857S733.63268,473.40208,698.59666,512.91906Z",transform:"translate(-170.30041 -66.10811)",fill:"#8585aa",key:23}),n.createElement("path",{d:"M719.92877,776.02043s-16.10862,35.60315-17.63461,37.25225-12.02317,17.95548-4.08545,17.64767,26.68044-8.98427,40.47584-22.23868,31.98406-36.21877,30.335-37.74475-12.9466-5.85768-12.9466-5.85768Z",transform:"translate(-170.30041 -66.10811)",fill:"#575a89",key:24}),n.createElement("path",{d:"M784.29239,795.78356s-.97192,15.937-3.90076,22.4103-2.55947,15.99857,5.37825,15.69076,28.45267-4.28321,28.45267-4.28321,1.21817-9.58682-.43093-11.11281-8.67647-18.74271-5.68607-23.62847S784.29239,795.78356,784.29239,795.78356Z",transform:"translate(-170.30041 -66.10811)",fill:"#575a89",key:25}),n.createElement("path",{d:"M796.03561,278.60052s16.922,26.37263,23.51842,32.47656-11.9616,19.543-11.9616,19.543l-33.2153,4.46789s.41786-30.22489-1.29281-33.33842S796.03561,278.60052,796.03561,278.60052Z",transform:"translate(-170.30041 -66.10811)",fill:"#ffb9b9",key:26}),n.createElement("path",{d:"M767.16508,313.10863s6.84267,12.4541,13.19285,12.20785,39.1961-14.2394,40.599-19.06359,10.87963,34.55659,10.87963,34.55659L751.465,482.25016,731.86045,468.701l9.49913-83.04479,7.80153-44.8206Z",transform:"translate(-170.30041 -66.10811)",fill:"#8585aa",key:27}),n.createElement("path",{d:"M823.92139,439.69215c-3.206,6.70666-5.20835,13.70047-4.9307,20.86031.01231.31753.02462.635.05282.95187.76057,14.69329,6.17341,31.68646,8.11534,44.04443,1.40908,8.86485,1.00808,15.33551-4.1797,16.85636-12.57723,3.66758,1.83379,6.28861-46.826,22.48493s-57.15159,2.21623-57.27471-.95886,6.89116-27.29605,5.24206-28.822-23.07442,19.974-29.54772,17.04512-.73874-19.05053-.73874-19.05053,14.58264-33.954,14.27483-41.89176,22.08942-45.37466,22.08942-45.37466L745.432,326.67085s5.85768-12.9466,13.73384-14.842,14.411,2.621,14.411,2.621L760.397,343.57977l-13.90546,51.417,2.32629,18.989s16.17018-34.01561,26.7905-47.1469,33.26379-44.21805,33.26379-44.21805,5.28646-17.83738,1.2957-23.16791c-3.99136-5.34632,16.64671-6.14662,25.4463,15.77118,4.66382,11.61641,12.23581,28.93925,16.97922,45.068,4.22682,14.28851,6.22343,27.646,2.03588,35.2811C848.229,407.2371,832.1292,422.56828,823.92139,439.69215Z",transform:"translate(-170.30041 -66.10811)",fill:"#575a89",key:28}),n.createElement("path",{d:"M854.62926,395.57321c-6.40029,11.66389-22.50006,26.99507-30.70787,44.11894-2.14378-7.72348-4.75909-15.71476-4.75909-15.71476s-10.03082-53.66869,19.64-67.53872a19.85766,19.85766,0,0,1,13.79106,3.85344C856.8202,374.58062,858.81681,387.93813,854.62926,395.57321Z",transform:"translate(-170.30041 -66.10811)",opacity:"0.1",key:29}),n.createElement("path",{d:"M736.8432,392.19108l-25.15446,7.33517-34.926,1.35437-3.593,30.348,57.39783,4.13394S744.904,395.05836,736.8432,392.19108Z",transform:"translate(-170.30041 -66.10811)",fill:"#575a89",key:30}),n.createElement("path",{d:"M777.861,494.23066s-33.65163,5.58313-25.971,15.70981,37.49194-.5198,37.49194-.5198Z",transform:"translate(-170.30041 -66.10811)",fill:"#ffb9b9",key:31}),n.createElement("path",{d:"M819.04351,461.50433c.76057,14.69329,6.17341,31.68646,8.11534,44.04443-10.72016,10.14608-20.91438,19.09523-24.75621,19.24421-7.93772.30781-20.69963-.78724-25.4007.985s-7.4583-28.32954-7.4583-28.32954S772.34936,487.8,784.865,482.5449C793.31283,478.9897,809.506,469.34688,819.04351,461.50433Z",transform:"translate(-170.30041 -66.10811)",opacity:"0.1",key:32}),n.createElement("path",{d:"M838.43294,346.91341s26.86513-4.22164,25.41378,40.35271,2.83185,73.027-7.97315,81.39568-45.90258,46.29809-53.8403,46.6059-20.69964-.78723-25.40071.985-7.45829-28.32955-7.45829-28.32955,2.80572-9.64839,15.32138-14.90351,42.00182-23.8878,41.75558-30.238-7.4583-28.32954-7.4583-28.32954S808.7621,360.78344,838.43294,346.91341Z",transform:"translate(-170.30041 -66.10811)",fill:"#575a89",key:33}),n.createElement("circle",{cx:"602.04517",cy:"216.59094",r:"34.95222",fill:"#ffb9b9",key:34}),n.createElement("path",{d:"M748.81137,232.60234a6.749,6.749,0,0,1-2.93882,1.47479,2.09717,2.09717,0,0,1-2.43029-1.68345c-.79968,1.65841-1.70192,3.42592-3.33461,4.27688s-4.15732.13741-4.39266-1.68864a7.706,7.706,0,0,1-1.77364,3.74392c-1.013.96584-2.85,1.20961-3.73439.12482.715,3.90745.27369,7.92586.49823,11.89184s1.2821,8.1705,4.27847,10.7784c4.36987,3.80334,10.94108,2.86467,16.68929,2.1441a5.06575,5.06575,0,0,1,2.61539.14308c2.15231.917,2.05467,3.9131,2.08369,6.25242a17.37277,17.37277,0,0,0,15.21221,16.4975,8.70861,8.70861,0,0,0,6.47244-1.57965c1.63206-1.38335,2.46572-3.638,4.33585-4.67723,3.04207-1.6904,6.73153.77486,8.95568,3.45157s4.4162,5.96934,7.86172,6.45932c4.55691.648,8.02766-3.996,9.73047-8.27217a48.223,48.223,0,0,0-.95837-37.46977C798.46709,223.729,765.96382,220.44839,748.81137,232.60234Z",transform:"translate(-170.30041 -66.10811)",fill:"#2f2e41",key:35})])}r.defaultProps={id:"f921693e-33a8-40f4-b606-3710578972cc","data-name":"Layer 1",width:"859.39917",height:"767.78379",viewBox:"0 0 859.39917 767.78379"},e.exports=r,r.default=r}}]);
//# sourceMappingURL=component---src-pages-about-js-d1c2a0ae275fe16c5509.js.map