(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"As+U":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("q1tI"),l=a.n(n),r=a("NGwb"),c=a.n(r);function i(e){var t={EN:{home:"Home",homeLink:"/"},VI:{home:"Trang chủ",homeLink:"/"}};return t="en"===e.language?t.EN:t.VI,l.a.createElement("header",{className:"header"},l.a.createElement(c.a,{animateIn:"fadeIn",animateOnce:!0},l.a.createElement("nav",{"aria-label":"breadcrumb"},l.a.createElement("ol",{className:"breadcrumb"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement("a",{href:t.homeLink},t.home)),e.breadcrumbList.map((function(t,a){return a==e.breadcrumbList.length-1?l.a.createElement("li",{className:"breadcrumb-item active"},t.name):l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement("a",{href:t.link?t.link:"/"},t.name))})))),l.a.createElement("h1",{className:"title"},e.heading?e.heading:e.title)))}},TaId:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a("q1tI"),l=a.n(n),r=a("qhky"),c=a("jcM5"),i=a("7oih"),m=a("WpaX"),o=a("As+U");function u(){var e=Object(n.useState)("en"),t=e[0],a=e[1],u=Object(n.useRef)(),d=Object(c.a)();Object(n.useEffect)((function(){u.current=localStorage.getItem("language"),a(u.current)}),[]);var s={EN:{title:"40' General Purpose Container",breadcrumb:[{name:"Equipment",link:"/equipment"},{name:"40' General Purpose Container"}]},VI:{title:"Container thường 40'",breadcrumb:[{name:"Thiết bị",link:"/equipment"},{name:"Container thường 40'"}]}};return s="en"===t?s.EN:s.VI,l.a.createElement(i.a,null,l.a.createElement(r.a,{title:s.title}),l.a.createElement("div",{className:"equipment-page"},l.a.createElement(o.a,{language:t,breadcrumbList:s.breadcrumb,title:s.title}),l.a.createElement(m.a,{language:t,containerName:s.title,containerImg:d.equipment40_01.childImageSharp.fluid,noDoorOpening:!1,dgValues:[2.34,2.292],irValues:[12.032,2.352,2.395],wmValues:[3750,28750,67.7],superRack:!1})))}},WpaX:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("q1tI"),l=a.n(n),r=a("9eSz"),c=a.n(r);function i(e){var t={EN:{heading:"Container Specification",tbTitleDG:"Door Opening (m)",tbTitleIR:"Interior (m)",tbTitleWM:"Weight (kg)/ Volume",length:"Length",width:"Width",height:"Height",heightEx:"Height Extension",tare:"Tare",payload:"Payload",cbm:"CBM"},VI:{heading:"Thông số kĩ thuật",tbTitleDG:"Cửa mở (m)",tbTitleIR:"Phần trong (m)",tbTitleWM:"Khối lượng (kg)/ Thể tích",length:"Dài",width:"Rộng",height:"Cao",heightEx:"Chiều cao mở rộng",tare:"KL Vỏ",payload:"KL Hàng",cbm:"CBM"}};return t="en"===e.language?t.EN:t.VI,l.a.createElement("div",{className:"container-table mt-5 pb-5"},l.a.createElement("div",{className:"detail-img"},l.a.createElement("div",{className:"col-md-6 col-12 mb-5 mt-4"},l.a.createElement("h2",{style:{textTransform:"none"},className:"mb-5"},e.containerName),l.a.createElement(c.a,{fluid:e.containerImg}))),l.a.createElement("div",{className:"container"},l.a.createElement("h4",null,t.heading),l.a.createElement("div",{className:"row"},l.a.createElement("div",{hidden:e.noDoorOpening,className:"col-md-3 col-12"},l.a.createElement(m,{hidden:e.noDoorOpening,content:t,tbType:"door-opening",tbValues:e.dgValues,isSuperRack:!1})),l.a.createElement("div",{className:"col-md-5 col-12"},l.a.createElement(m,{hidden:!1,content:t,tbType:"interior",tbValues:e.irValues,isSuperRack:e.superRack})),l.a.createElement("div",{className:"col-md-4 col-12"},l.a.createElement(m,{hidden:!1,content:t,tbType:"weight",tbValues:e.wmValues,isSuperRack:!1})))))}function m(e){return l.a.createElement("div",null,l.a.createElement("p",null,"door-opening"==e.tbType&&e.content.tbTitleDG,"interior"==e.tbType&&e.content.tbTitleIR,"weight"==e.tbType&&e.content.tbTitleWM),l.a.createElement("table",{className:"table table-bordered table-spec-details"},l.a.createElement("thead",{className:"thead-light"},l.a.createElement("tr",null,l.a.createElement("th",{hidden:"door-opening"==e.tbType,scope:"col"},"weight"==e.tbType?e.content.tare:e.content.length),l.a.createElement("th",{scope:"col"},"weight"==e.tbType?e.content.payload:e.content.width),l.a.createElement("th",{scope:"col"},"weight"==e.tbType?e.content.cbm:e.content.height),l.a.createElement("th",{hidden:!e.isSuperRack,scope:"col"},e.content.heightEx))),l.a.createElement("tbody",null,0==e.hidden?l.a.createElement("tr",null,e.tbValues.map((function(t,a){return l.a.createElement("td",null,"weight"==e.tbType?a!=e.tbValues.length-1?t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):0==t?"-":t.toFixed(1):t.toFixed(3))}))):l.a.createElement(l.a.Fragment,null))))}}}]);
//# sourceMappingURL=component---src-pages-equipment-general-purpose-eq-40-js-216e3702813dd1be8b82.js.map