(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"BO/t":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n,a,r,i){var l=a||"<<anonymous>>",c=i||n;if(null==t[n])return new Error("The "+r+" `"+c+"` is required to make `"+l+"` accessible for users of assistive technologies such as screen readers.");for(var o=arguments.length,u=Array(o>5?o-5:0),m=5;m<o;m++)u[m-5]=arguments[m];return e.apply(void 0,[t,n,a,r,i].concat(u))}},e.exports=t.default},"Cz4+":function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),i=n("TSYQ"),l=n.n(i),c=n("q1tI"),o=n.n(c),u=n("vUet"),m=n("Qdst"),d=n("ILyh"),s=n("7xGa");var p=o.a.forwardRef((function(e,t){var n=function(e){var t=Object(c.useContext)(m.a);if(!t)return e;var n=t.activeKey,i=t.getControlledId,l=t.getControllerId,o=Object(r.a)(t,["activeKey","getControlledId","getControllerId"]),u=!1!==e.transition&&!1!==o.transition,p=Object(d.b)(e.eventKey);return Object(a.a)({},e,{active:null==e.active&&null!=p?Object(d.b)(n)===p:e.active,id:i(e.eventKey),"aria-labelledby":l(e.eventKey),transition:u&&(e.transition||o.transition||s.a),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:o.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:o.unmountOnExit})}(e),i=n.bsPrefix,p=n.className,b=n.active,E=n.onEnter,f=n.onEntering,v=n.onEntered,h=n.onExit,O=n.onExiting,g=n.onExited,y=n.mountOnEnter,I=n.unmountOnExit,q=n.transition,C=n.as,x=void 0===C?"div":C,S=(n.eventKey,Object(r.a)(n,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),j=Object(u.a)(i,"tab-pane");if(!b&&!q&&I)return null;var N=o.a.createElement(x,Object(a.a)({},S,{ref:t,role:"tabpanel","aria-hidden":!b,className:l()(p,j,{active:b})}));return q&&(N=o.a.createElement(q,{in:b,onEnter:E,onEntering:f,onEntered:v,onExit:h,onExiting:O,onExited:g,mountOnEnter:y,unmountOnExit:I},N)),o.a.createElement(m.a.Provider,{value:null},o.a.createElement(d.a.Provider,{value:null},N))}));p.displayName="TabPane",t.a=p},JXzp:function(e,t,n){"use strict";n.r(t),n.d(t,"AllEquipment",(function(){return S})),n.d(t,"Special",(function(){return j})),n.d(t,"FlatRack",(function(){return N}));var a=n("q1tI"),r=n.n(a),i=n("qhky"),l=n("wx14"),c=n("zLVn"),o=(n("BO/t"),n("JCAc")),u=n("+YzT"),m=n("iKII"),d=n("Mj5q"),s=n("gpSn"),p=n("bxoZ"),b=n("Cz4+"),E=n("noGa");function f(e){var t=e.props,n=t.title,a=t.eventKey,i=t.disabled,l=t.tabClassName,c=t.id;return null==n?null:r.a.createElement(d.a,{as:m.a,eventKey:a,disabled:i,id:c,className:l},n)}var v=function(e){var t=Object(o.a)(e,{activeKey:"onSelect"}),n=t.id,a=t.onSelect,i=t.transition,m=t.mountOnEnter,d=t.unmountOnExit,v=t.children,h=t.activeKey,O=void 0===h?function(e){var t;return Object(E.a)(e,(function(e){null==t&&(t=e.props.eventKey)})),t}(v):h,g=Object(c.a)(t,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return r.a.createElement(s.a,{id:n,activeKey:O,onSelect:a,transition:i,mountOnEnter:m,unmountOnExit:d},r.a.createElement(u.a,Object(l.a)({},g,{role:"tablist",as:"nav"}),Object(E.b)(v,f)),r.a.createElement(p.a,null,Object(E.b)(v,(function(e){var t=Object(l.a)({},e.props);return delete t.title,delete t.disabled,delete t.tabClassName,r.a.createElement(b.a,t)}))))};v.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},v.displayName="Tabs";var h=v,O=n("KD6P"),g=n("NGwb"),y=n.n(g),I=n("jcM5"),q=n("9eSz"),C=n.n(q),x=n("7oih");t.default=function(){var e=Object(a.useState)("en"),t=e[0],n=e[1],l=Object(a.useRef)();Object(a.useEffect)((function(){l.current=localStorage.getItem("language"),n(l.current)}),[]);var c={EN:{title:"Equipment",breadcrumb1:"Home",breadcrumb2:"Equipment",heading:"Equipment Gallery",tab1:"All-purpose Containers",tab2:"Cold/Tank Containers",tab3:"Flat Rack/Super Rack",note:"Scroll down to see more",desc:"Description",descContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "},VI:{title:"Thiết bị",breadcrumb1:"Trang chủ",breadcrumb2:"Thiết bị",heading:"Kho thiết bị",tab1:"Container Đa dụng",tab2:"Container Tank/Lạnh",tab3:"Flat Rack/Super Rack",note:"Lướt xuống để xem",desc:"Giới thiệu",descContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}};return c="en"===t?c.EN:c.VI,r.a.createElement(x.a,null,r.a.createElement(i.a,{title:c.title}),r.a.createElement("div",{className:"equipment-page"},r.a.createElement("header",{className:"header"},r.a.createElement(y.a,{animateIn:"fadeIn",animateOnce:!0},r.a.createElement("nav",{"aria-label":"breadcrumb"},r.a.createElement("ol",{class:"breadcrumb"},r.a.createElement("li",{class:"breadcrumb-item"},r.a.createElement("a",{href:"/"},c.breadcrumb1)),r.a.createElement("li",{class:"breadcrumb-item active","aria-current":"page"},c.breadcrumb2))),r.a.createElement("h1",{className:"title"},c.heading))),r.a.createElement(y.a,{animateIn:"fadeIn",animateOnce:!0},r.a.createElement("div",{className:"equipment-desc"},r.a.createElement("h2",null,c.desc),r.a.createElement("p",null,c.descContent)),r.a.createElement("div",{className:"equipment-tabs"},r.a.createElement("p",{className:"note"},r.a.createElement("em",null,c.note)),r.a.createElement(h,{variant:"pills",className:"justify-content-center",defaultActiveKey:"all",id:"uncontrolled-tab-example"},r.a.createElement(O.a,{eventKey:"all",title:c.tab1},r.a.createElement(S,null)),r.a.createElement(O.a,{eventKey:"open-top",title:c.tab2},r.a.createElement(j,null)),r.a.createElement(O.a,{eventKey:"hard-top",title:c.tab3},r.a.createElement(N,null)))))))};function S(){var e=Object(a.useState)(0),t=e[0],n=e[1],i=Object(I.a)();function l(){var e=1+100*Math.random();return e===t&&n(e+=100),e}var c=[[i.equipment40_01.childImageSharp.fluid,"40' Open Top Container"],[i.equipment40_07.childImageSharp.fluid,"40' High Cube Hard Top Open Top"],[i.equipment20_01.childImageSharp.fluid,"20' Open Top Container"],[i.equipment20_02.childImageSharp.fluid,"20' High Cube Open Top"],[i.equipment20_04.childImageSharp.fluid,"20' High Cube Hard Top"]];return r.a.createElement("div",{className:"row"},c.map((function(e){return r.a.createElement("div",{className:"col-xl-4 col-lg-6 col-sm-12 eq-image eq-gallery-item",key:l()},r.a.createElement(y.a,{animateIn:"zoomIn",animateOnce:!0},r.a.createElement(C.a,{key:l(),fluid:e[0]}),r.a.createElement("p",{className:"eq-name mb-5"},e[1])))})))}function j(){var e=Object(a.useState)(0),t=e[0],n=e[1],i=Object(I.a)();function l(){var e=1+100*Math.random();return e===t&&n(e+=100),e}var c=[[i.equipment40_01.childImageSharp.fluid,"40' Open Top Container"],[i.equipment20_01.childImageSharp.fluid,"20' Open Top Container"],[i.equipment20_02.childImageSharp.fluid,"20' High Cube Open Top"]];return r.a.createElement("div",{className:"row"},c.map((function(e){return r.a.createElement("div",{className:"col-xl-4 col-lg-6 col-sm-12 eq-image eq-gallery-item",key:l()},r.a.createElement(y.a,{animateIn:"zoomIn",animateOnce:!0},r.a.createElement(C.a,{key:l(),fluid:e[0]}),r.a.createElement("p",{className:"eq-name mb-5"},e[1])))})))}function N(){var e=Object(a.useState)(0),t=e[0],n=e[1],i=Object(I.a)();function l(){var e=1+100*Math.random();return e===t&&n(e+=100),e}var c=[[i.equipment20_03.childImageSharp.fluid,"20' Flat Rack with 31 MT Pay Load"],[i.equipment40_02.childImageSharp.fluid,"40' High Cube Flat Rack"],[i.equipment40_03.childImageSharp.fluid,"40' High Cube Super Rack"],[i.equipment40_04.childImageSharp.fluid,"40' Super Rack"],[i.equipment40_05.childImageSharp.fluid,"40' Flat Rack with 47 MT Pay Load"],[i.equipment40_06.childImageSharp.fluid,"40' Flat Rack with Collapsible Ends"]];return r.a.createElement("div",{className:"row"},c.map((function(e){return r.a.createElement("div",{className:"col-xl-4 col-lg-6 col-sm-12 eq-image eq-gallery-item",key:l()},r.a.createElement(y.a,{animateIn:"zoomIn",animateOnce:!0},r.a.createElement(C.a,{key:l(),fluid:e[0]}),r.a.createElement("p",{className:"eq-name mb-5"},e[1])))})))}},KD6P:function(e,t,n){"use strict";var a=n("dI71"),r=n("q1tI"),i=n.n(r),l=n("gpSn"),c=n("bxoZ"),o=n("Cz4+"),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(i.a.Component);u.Container=l.a,u.Content=c.a,u.Pane=o.a,t.a=u},bxoZ:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),i=n("TSYQ"),l=n.n(i),c=n("q1tI"),o=n.n(c),u=n("vUet"),m=o.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.as,c=void 0===i?"div":i,m=e.className,d=Object(r.a)(e,["bsPrefix","as","className"]),s=Object(u.a)(n,"tab-content");return o.a.createElement(c,Object(a.a)({ref:t},d,{className:l()(m,s)}))}));t.a=m},gpSn:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("JCAc"),l=n("Qdst"),c=n("ILyh");t.a=function(e){var t=Object(i.a)(e,{activeKey:"onSelect"}),n=t.id,o=t.generateChildId,u=t.onSelect,m=t.activeKey,d=t.transition,s=t.mountOnEnter,p=t.unmountOnExit,b=t.children,E=Object(a.useMemo)((function(){return o||function(e,t){return n?n+"-"+t+"-"+e:null}}),[n,o]),f=Object(a.useMemo)((function(){return{onSelect:u,activeKey:m,transition:d,mountOnEnter:s||!1,unmountOnExit:p||!1,getControlledId:function(e){return E(e,"tabpane")},getControllerId:function(e){return E(e,"tab")}}}),[u,m,d,s,p,E]);return r.a.createElement(l.a.Provider,{value:f},r.a.createElement(c.a.Provider,{value:u||null},b))}},noGa:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l}));var a=n("q1tI"),r=n.n(a);function i(e,t){var n=0;return r.a.Children.map(e,(function(e){return r.a.isValidElement(e)?t(e,n++):e}))}function l(e,t){var n=0;r.a.Children.forEach(e,(function(e){r.a.isValidElement(e)&&t(e,n++)}))}}}]);
//# sourceMappingURL=component---src-pages-equipment-js-e2e8a19bc692ce6f64d7.js.map