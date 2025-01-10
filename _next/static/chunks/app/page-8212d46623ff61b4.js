(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2394:(e,s,a)=>{Promise.resolve().then(a.bind(a,3674))},1480:(e,s,a)=>{"use strict";a.d(s,{A:()=>c});var t=a(5155),i=a(2115),l=a(9757),r=a(5055);function n(){let[e,s]=(0,i.useState)({name:"",email:"",message:""}),[a,l]=(0,i.useState)({}),[r,n]=(0,i.useState)(!1),[c,o]=(0,i.useState)(null),d=()=>{let s={};return(!e.name||e.name.length<3)&&(s.name="Name must be at least 3 characters long."),e.email&&/\S+@\S+\.\S+/.test(e.email)||(s.email="Please enter a valid email address."),(!e.message||e.message.length<10)&&(s.message="Message must be at least 10 characters long."),s},m=a=>{let{name:t,value:i}=a.target;s({...e,[t]:i})},h=async a=>{a.preventDefault(),o(null);let t=d();if(Object.keys(t).length>0){l(t);return}l({});try{(await fetch("https://formspree.io/f/mzzzybnz",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok?(n(!0),s({name:"",email:"",message:""})):o("Failed to send message. Please try again later.")}catch(e){o("Something went wrong. Please try again later.")}};return(0,t.jsx)("div",{className:"form-container",children:r?(0,t.jsx)("p",{className:"success-message",children:"Thank you! Your message has been sent."}):(0,t.jsxs)("form",{onSubmit:h,children:[(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"name",className:"label",children:"Name"}),(0,t.jsx)("input",{type:"text",id:"name",name:"name",value:e.name,onChange:m,required:!0,className:"input"}),a.name&&(0,t.jsx)("p",{className:"error-message",children:a.name})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"email",className:"label",children:"Email"}),(0,t.jsx)("input",{type:"email",id:"email",name:"email",value:e.email,onChange:m,required:!0,className:"input"}),a.email&&(0,t.jsx)("p",{className:"error-message",children:a.email})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"message",className:"label",children:"Message"}),(0,t.jsx)("textarea",{id:"message",name:"message",value:e.message,onChange:m,required:!0,className:"textarea"}),a.message&&(0,t.jsx)("p",{className:"error-message",children:a.message})]}),(0,t.jsx)("button",{type:"submit",className:"button",children:"Submit"}),c&&(0,t.jsx)("p",{className:"error-message",children:c})]})})}a(5935),a(2265);let c=()=>(0,t.jsxs)("section",{id:"contact",className:"contact-section hidden",children:[(0,t.jsx)("h2",{children:"Contact Me"}),(0,t.jsxs)("div",{className:"contact-grid",children:[(0,t.jsxs)("div",{className:"contact-info",children:[(0,t.jsx)("h3",{children:"Let's Talk"}),(0,t.jsxs)("p",{children:[(0,t.jsx)(l.g,{className:"i",icon:r.y_8})," email@example.com"]}),(0,t.jsxs)("p",{children:[(0,t.jsx)(l.g,{className:"i",icon:r.KKr})," (123) 456-7890"]}),(0,t.jsxs)("p",{children:[(0,t.jsx)(l.g,{className:"i",icon:r.gKm})," City, Country"]})]}),(0,t.jsx)(n,{})]})]})},3315:(e,s,a)=>{"use strict";a.d(s,{A:()=>r});var t=a(5155);a(2115);var i=a(9757),l=a(5032);a(7016);let r=()=>(0,t.jsxs)("footer",{children:[(0,t.jsxs)("p",{children:["\xa9 ",new Date().getFullYear()," ",(0,t.jsx)("span",{className:"highlight",children:"[Your Name]"}),". All rights reserved."]}),(0,t.jsxs)("div",{className:"social-media",children:[(0,t.jsx)("a",{href:"https://www.facebook.com/yourprofile",target:"_blank",children:(0,t.jsx)(i.g,{icon:l.Kjv})}),(0,t.jsx)("a",{href:"https://www.x.com/yourprofile",target:"_blank",children:(0,t.jsx)(i.g,{icon:l.HQ1})}),(0,t.jsx)("a",{href:"https://www.instagram.com/yourprofile",target:"_blank",children:(0,t.jsx)(i.g,{icon:l.QV6})}),(0,t.jsx)("a",{href:"https://www.linkedin.com/in/yourprofile",target:"_blank",children:(0,t.jsx)(i.g,{icon:l.B_4})})]})]})},3674:(e,s,a)=>{"use strict";a.d(s,{default:()=>p});var t=a(5155),i=a(2115),l=a(5566);function r(e){let{onComplete:s}=e,[a,r]=i.useState(!0);return i.useEffect(()=>{let e=setTimeout(()=>{r(!1),s()},0);return()=>clearTimeout(e)},[s]),(0,t.jsx)(l.P.div,{className:"preloader",initial:{opacity:1},animate:{opacity:a?1:0},exit:{opacity:1},transition:{duration:.5},children:(0,t.jsx)(l.P.div,{className:"loader",initial:{scale:0},animate:{scale:[1,1.5,1]},transition:{duration:1,repeat:1/0,ease:"easeInOut"}})})}a(8309),a(5407);let n=()=>{let[e,s]=(0,i.useState)(!1);return(0,t.jsxs)(t.Fragment,{children:[!e&&(0,t.jsx)(r,{onComplete:()=>{s(!0)}}),e&&(0,t.jsx)("div",{className:"hero-content",children:(0,t.jsxs)("div",{className:"hero-text",children:[(0,t.jsx)("h1",{className:"title",children:"Creative Vision, Exceptional Design"}),(0,t.jsxs)("p",{className:"tagline",children:["Hi, I'm ",(0,t.jsx)("span",{className:"highlight",children:"[Your Name]"}),", transforming ideas into compelling visual experiences"]}),(0,t.jsxs)("div",{className:"cta-buttons",children:[(0,t.jsx)("button",{className:"cta-button",onClick:()=>document.getElementById("aboutMe").scrollIntoView(),children:"Get To Know Me"}),(0,t.jsx)("button",{className:"cta-button",onClick:()=>document.getElementById("portfolio").scrollIntoView(),children:"View My Work"}),(0,t.jsx)("button",{className:"cta-button",onClick:()=>document.getElementById("contact").scrollIntoView(),children:"Let's talk"})]})]})})]})};var c=a(5616),o=a(1480);a(2171);let d=JSON.parse('[{"image":"./branding1.jpg","title":"Project Title 1","description":"Brief description of the project."},{"image":"./branding2.png","title":"Project Title 2","description":"Brief description of the project."},{"image":"./poster1.jpg","title":"Project Title 3","description":"Brief description of the project."},{"image":"./poster2.jpg","title":"Project Title 3","description":"Brief description of the project."}]'),m=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{id:"portfolio-items",className:"grid",children:d.map(e=>(0,t.jsxs)("div",{className:"portfolio-item",children:[(0,t.jsx)("img",{src:e.image,alt:e.title,className:"image-container"}),(0,t.jsx)("h2",{children:e.title}),(0,t.jsx)("p",{children:e.description})]},e.id))})});a(6815);let h=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("section",{id:"portfolio",className:"portfolio-section hidden",children:[(0,t.jsx)("h2",{children:"My Work"}),(0,t.jsxs)("div",{className:"filter-buttons",children:[(0,t.jsx)("button",{"data-filter":"all",className:"active",children:"All"}),(0,t.jsx)("button",{"data-filter":"branding",children:"Branding"}),(0,t.jsx)("button",{"data-filter":"portrait",children:"Portrait"}),(0,t.jsx)("button",{"data-filter":"poster",children:"Poster"})]}),(0,t.jsx)(m,{})]})});a(6480);let j=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("section",{id:"aboutMe",className:"about-section hidden",children:(0,t.jsxs)("div",{className:"about-content",children:[(0,t.jsx)("div",{className:"about-image",children:(0,t.jsx)("img",{src:"images/Hero/image.png",alt:"[Your picture and Name]",loading:"lazy"})}),(0,t.jsxs)("div",{className:"about-text",children:[(0,t.jsx)("h2",{children:"About Me"}),(0,t.jsx)("p",{children:"Creative graphic designer with 5+ years of experience in digital and print design."}),(0,t.jsxs)("div",{className:"skills",children:[(0,t.jsx)("h3",{children:"Expertise"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Brand Identity Design"}),(0,t.jsx)("li",{children:"Digital Illustration"}),(0,t.jsx)("li",{children:"Print Design"}),(0,t.jsx)("li",{children:"Photo Manipulation"})]})]})]})]})})});var x=a(8709);a(5462);let u=()=>(0,t.jsxs)("main",{className:"main-content hidden",children:[(0,t.jsx)(x.A,{}),(0,t.jsx)(c.A,{}),(0,t.jsx)(j,{}),(0,t.jsx)(h,{}),(0,t.jsx)(o.A,{})]});var g=a(3315);function p(){let[e,s]=i.useState(!1);return i.useEffect(()=>{let e=()=>{window.scrollY>window.innerHeight/2?s(!0):s(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:e?"scrolled":"notScrolled",children:[(0,t.jsx)("header",{className:"hero",children:(0,t.jsx)(n,{})}),(0,t.jsx)(u,{}),(0,t.jsx)(g.A,{})]})})}},5616:(e,s,a)=>{"use strict";a.d(s,{A:()=>l});var t=a(5155),i=a(2115);a(5457);let l=()=>{let[e,s]=i.useState(!1);return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("nav",{children:(0,t.jsxs)("div",{className:"navbar-container",children:[(0,t.jsx)("div",{className:"logo",children:(0,t.jsx)("img",{src:"/logo.png",alt:"Creative Workspace",className:"logo-img"})}),(0,t.jsx)("button",{className:"hamburger-menu",onClick:()=>{s(!e)},"aria-label":"Toggle navigation menu",children:"..."}),(0,t.jsxs)("ul",{className:"navbar-links ".concat(e?"show":""),children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/",children:"Home"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#aboutMe",children:"About Me"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#portfolio",children:"My Work"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#contact",children:"Contact Me"})})]})]})})})}},8709:(e,s,a)=>{"use strict";a.d(s,{A:()=>i});var t=a(2115);let i=()=>((0,t.useEffect)(()=>{{let e=document.querySelectorAll("section"),s=document.querySelectorAll("main"),a=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?e.target.classList.add("visible"):e.target.classList.remove("visible")})},{threshold:.1});return s.forEach(e=>{a.observe(e)}),e.forEach(e=>{a.observe(e)}),()=>{s.forEach(e=>{a.unobserve(e)}),e.forEach(e=>{a.unobserve(e)})}}},[]),null)},6480:()=>{},2265:()=>{},5935:()=>{},7016:()=>{},5407:()=>{},5462:()=>{},5457:()=>{},2171:()=>{},6815:()=>{},8309:()=>{}},e=>{var s=s=>e(e.s=s);e.O(0,[893,412,665,266,802,757,566,441,517,358],()=>s(2394)),_N_E=e.O()}]);