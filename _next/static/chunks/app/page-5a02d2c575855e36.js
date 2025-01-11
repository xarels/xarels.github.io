(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2394:(e,s,a)=>{Promise.resolve().then(a.bind(a,2641))},2641:(e,s,a)=>{"use strict";a.d(s,{default:()=>w});var t=a(5155),i=a(2115),n=a(2863);function l(e){let{onComplete:s}=e,[a,l]=i.useState(!0);return i.useEffect(()=>{let e=setTimeout(()=>{l(!1),s()},0);return()=>clearTimeout(e)},[s]),(0,t.jsx)(n.P.div,{className:"preloader",initial:{opacity:1},animate:{opacity:a?1:0},exit:{opacity:1},transition:{duration:.5},children:(0,t.jsx)(n.P.div,{className:"loader",initial:{scale:0},animate:{scale:[1,1.5,1]},transition:{duration:1,repeat:1/0,ease:"easeInOut"}})})}a(8309),a(5407);let r=()=>{let[e,s]=(0,i.useState)(!1);return(0,t.jsxs)(t.Fragment,{children:[!e&&(0,t.jsx)(l,{onComplete:()=>{s(!0)}}),e&&(0,t.jsx)("div",{className:"hero-content",children:(0,t.jsxs)("div",{className:"hero-text",children:[(0,t.jsx)("h1",{className:"title",children:"Creative Vision, Exceptional Design"}),(0,t.jsxs)("p",{className:"tagline",children:["Hi, I'm ",(0,t.jsx)("span",{className:"highlight",children:"[Your Name]"}),", transforming ideas into compelling visual experiences"]}),(0,t.jsxs)("div",{className:"cta-buttons",children:[(0,t.jsx)("button",{className:"cta-button",onClick:()=>document.getElementById("aboutMe").scrollIntoView(),children:"Get To Know Me"}),(0,t.jsx)("button",{className:"cta-button",onClick:()=>document.getElementById("portfolio").scrollIntoView(),children:"View My Work"}),(0,t.jsx)("button",{className:"cta-button",onClick:()=>document.getElementById("contact").scrollIntoView(),children:"Let's talk"})]})]})})]})};a(5457);let c=()=>{let[e,s]=i.useState(!1);return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("nav",{children:(0,t.jsxs)("div",{className:"navbar-container",children:[(0,t.jsx)("div",{className:"logo",children:(0,t.jsx)("img",{src:"/logo.png",alt:"Creative Workspace",className:"logo-img"})}),(0,t.jsx)("button",{className:"hamburger-menu",onClick:()=>{s(!e)},"aria-label":"Toggle navigation menu",children:"..."}),(0,t.jsxs)("ul",{className:"navbar-links ".concat(e?"show":""),children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/",children:"Home"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#aboutMe",children:"About Me"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#portfolio",children:"My Work"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#contact",children:"Contact Me"})})]})]})})})};var o=a(9757),d=a(5055);function m(){let[e,s]=(0,i.useState)({name:"",email:"",message:""}),[a,n]=(0,i.useState)({}),[l,r]=(0,i.useState)(!1),[c,o]=(0,i.useState)(null),d=()=>{let s={};return(!e.name||e.name.length<3)&&(s.name="Name must be at least 3 characters long."),e.email&&/\S+@\S+\.\S+/.test(e.email)||(s.email="Please enter a valid email address."),(!e.message||e.message.length<10)&&(s.message="Message must be at least 10 characters long."),s},m=a=>{let{name:t,value:i}=a.target;s({...e,[t]:i})},h=async a=>{a.preventDefault(),o(null);let t=d();if(Object.keys(t).length>0){n(t);return}n({});try{(await fetch("https://formspree.io/f/mzzzybnz",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok?(r(!0),s({name:"",email:"",message:""})):o("Failed to send message. Please try again later.")}catch(e){o("Something went wrong. Please try again later.")}};return(0,t.jsx)("div",{className:"form-container",children:l?(0,t.jsx)("p",{className:"success-message",children:"Thank you! Your message has been sent."}):(0,t.jsxs)("form",{onSubmit:h,children:[(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"name",className:"label",children:"Name"}),(0,t.jsx)("input",{type:"text",id:"name",name:"name",value:e.name,onChange:m,required:!0,className:"input"}),a.name&&(0,t.jsx)("p",{className:"error-message",children:a.name})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"email",className:"label",children:"Email"}),(0,t.jsx)("input",{type:"email",id:"email",name:"email",value:e.email,onChange:m,required:!0,className:"input"}),a.email&&(0,t.jsx)("p",{className:"error-message",children:a.email})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"message",className:"label",children:"Message"}),(0,t.jsx)("textarea",{id:"message",name:"message",value:e.message,onChange:m,required:!0,className:"textarea"}),a.message&&(0,t.jsx)("p",{className:"error-message",children:a.message})]}),(0,t.jsx)("button",{type:"submit",className:"button",children:"Submit"}),c&&(0,t.jsx)("p",{className:"error-message",children:c})]})})}a(5935),a(2265);let h=()=>(0,t.jsxs)("section",{id:"contact",className:"contact-section hidden",children:[(0,t.jsx)("h2",{children:"Contact Me"}),(0,t.jsxs)("div",{className:"contact-grid",children:[(0,t.jsxs)("div",{className:"contact-info",children:[(0,t.jsx)("h3",{children:"Let's Talk"}),(0,t.jsxs)("p",{children:[(0,t.jsx)(o.g,{className:"i",icon:d.y_8})," email@example.com"]}),(0,t.jsxs)("p",{children:[(0,t.jsx)(o.g,{className:"i",icon:d.KKr})," (123) 456-7890"]}),(0,t.jsxs)("p",{children:[(0,t.jsx)(o.g,{className:"i",icon:d.gKm})," City, Country"]})]}),(0,t.jsx)(m,{})]})]});a(2171);let x=JSON.parse('[{"id":1,"src":"/branding1.jpg","title":"Project Title 1","description":"Brief description of the project."},{"id":2,"src":"/branding2.png","title":"Project Title 2","description":"Brief description of the project."},{"id":3,"src":"/poster1.jpg","title":"Project Title 3","description":"Brief description of the project."},{"id":4,"src":"/poster2.jpg","title":"Project Title 3","description":"Brief description of the project."}]');var u=a(7711);a(4075),a(3932),(0,u.default)(()=>Promise.resolve().then(a.t.bind(a,5842,23)),{loadableGenerated:{webpack:()=>[5842]},ssr:!1});let j=()=>(i.useEffect(()=>{document.addEventListener("contextmenu",e=>{e.target.classList.contains("lb-image")&&e.preventDefault()}),a(5842).option({resizeDuration:200,wrapAround:!0,fadeDuration:300,imageFadeDuration:300,showImageNumberLabel:!0,disableScrolling:!0})},[]),(0,t.jsx)("div",{id:"portfolio-items",className:"grid",onContextMenu:e=>e.preventDefault(),children:x.map((e,s)=>(0,t.jsxs)("div",{className:"portfolio-item",onContextMenu:e=>e.preventDefault(),"aria-label":"Open ".concat(e.title," in lightbox"),children:[(0,t.jsx)("a",{href:e.src,"data-lightbox":"gallery","data-title":e.title,"data-description":e.description,onContextMenu:e=>e.preventDefault(),children:(0,t.jsx)("img",{src:e.src,alt:e.title,draggable:"false",loading:"lazy",className:"image-container",onContextMenu:e=>e.preventDefault()})},s),(0,t.jsx)("h2",{children:e.title}),(0,t.jsx)("p",{children:e.description})]},s))}));a(6815);let g=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("section",{id:"portfolio",className:"portfolio-section hidden",children:[(0,t.jsx)("h2",{children:"My Work"}),(0,t.jsx)(j,{})]})});a(6480);let p=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("section",{id:"aboutMe",className:"about-section hidden",children:(0,t.jsxs)("div",{className:"about-content",children:[(0,t.jsx)("div",{className:"about-image",children:(0,t.jsx)("img",{src:"images/Hero/image.png",alt:"[Your picture and Name]",loading:"lazy"})}),(0,t.jsxs)("div",{className:"about-text",children:[(0,t.jsx)("h2",{children:"About Me"}),(0,t.jsx)("p",{children:"Creative graphic designer with 5+ years of experience in digital and print design."}),(0,t.jsxs)("div",{className:"skills",children:[(0,t.jsx)("h3",{children:"Expertise"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Brand Identity Design"}),(0,t.jsx)("li",{children:"Digital Illustration"}),(0,t.jsx)("li",{children:"Print Design"}),(0,t.jsx)("li",{children:"Photo Manipulation"})]})]})]})]})})}),f=()=>((0,i.useEffect)(()=>{{let e=document.querySelectorAll("section"),s=document.querySelectorAll("main"),a=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?e.target.classList.add("visible"):e.target.classList.remove("visible")})},{threshold:.1});return s.forEach(e=>{a.observe(e)}),e.forEach(e=>{a.observe(e)}),()=>{s.forEach(e=>{a.unobserve(e)}),e.forEach(e=>{a.unobserve(e)})}}},[]),null);a(5462);let b=()=>(0,t.jsxs)("main",{className:"main-content hidden",children:[(0,t.jsx)(f,{}),(0,t.jsx)(c,{}),(0,t.jsx)(p,{}),(0,t.jsx)(g,{}),(0,t.jsx)(h,{})]});var N=a(5032);a(7016);let v=()=>(0,t.jsxs)("footer",{children:[(0,t.jsxs)("p",{children:["\xa9 ",new Date().getFullYear()," ",(0,t.jsx)("span",{className:"highlight",children:"[Your Name]"}),". All rights reserved."]}),(0,t.jsxs)("div",{className:"social-media",children:[(0,t.jsx)("a",{href:"https://www.facebook.com/yourprofile",target:"_blank",children:(0,t.jsx)(o.g,{icon:N.Kjv})}),(0,t.jsx)("a",{href:"https://www.x.com/yourprofile",target:"_blank",children:(0,t.jsx)(o.g,{icon:N.HQ1,className:"tweeter"})}),(0,t.jsx)("a",{href:"https://www.instagram.com/yourprofile",target:"_blank",children:(0,t.jsx)(o.g,{icon:N.QV6})}),(0,t.jsx)("a",{href:"https://www.linkedin.com/in/yourprofile",target:"_blank",children:(0,t.jsx)(o.g,{icon:N.B_4})})]})]});function w(){let[e,s]=i.useState(!1);return i.useEffect(()=>{let e=()=>{window.scrollY>window.innerHeight/2?s(!0):s(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:e?"scrolled":"notScrolled",children:[(0,t.jsx)("header",{className:"hero",children:(0,t.jsx)(r,{})}),(0,t.jsx)(b,{}),(0,t.jsx)(v,{})]})})}},6480:()=>{},2265:()=>{},5935:()=>{},7016:()=>{},5407:()=>{},5462:()=>{},5457:()=>{},2171:()=>{},6815:()=>{},8309:()=>{}},e=>{var s=s=>e(e.s=s);e.O(0,[539,266,802,740,255,441,517,358],()=>s(2394)),_N_E=e.O()}]);