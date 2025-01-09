(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{6668:(e,s,a)=>{Promise.resolve().then(a.bind(a,6352))},1480:(e,s,a)=>{"use strict";a.d(s,{A:()=>c});var t=a(5155),l=a(2115),n=a(9757),r=a(5055);function i(){let[e,s]=(0,l.useState)({name:"",email:"",message:""}),[a,n]=(0,l.useState)({}),[r,i]=(0,l.useState)(!1),[c,o]=(0,l.useState)(null),m=()=>{let s={};return(!e.name||e.name.length<3)&&(s.name="Name must be at least 3 characters long."),e.email&&/\S+@\S+\.\S+/.test(e.email)||(s.email="Please enter a valid email address."),(!e.message||e.message.length<10)&&(s.message="Message must be at least 10 characters long."),s},h=a=>{let{name:t,value:l}=a.target;s({...e,[t]:l})},d=async a=>{a.preventDefault(),o(null);let t=m();if(Object.keys(t).length>0){n(t);return}n({});try{(await fetch("https://formspree.io/f/mzzzybnz",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok?(i(!0),s({name:"",email:"",message:""})):o("Failed to send message. Please try again later.")}catch(e){o("Something went wrong. Please try again later.")}};return(0,t.jsx)("div",{className:"form-container",children:r?(0,t.jsx)("p",{className:"success-message",children:"Thank you! Your message has been sent."}):(0,t.jsxs)("form",{onSubmit:d,children:[(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"name",className:"label",children:"Name"}),(0,t.jsx)("input",{type:"text",id:"name",name:"name",value:e.name,onChange:h,required:!0,className:"input"}),a.name&&(0,t.jsx)("p",{className:"error-message",children:a.name})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"email",className:"label",children:"Email"}),(0,t.jsx)("input",{type:"email",id:"email",name:"email",value:e.email,onChange:h,required:!0,className:"input"}),a.email&&(0,t.jsx)("p",{className:"error-message",children:a.email})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"message",className:"label",children:"Message"}),(0,t.jsx)("textarea",{id:"message",name:"message",value:e.message,onChange:h,required:!0,className:"textarea"}),a.message&&(0,t.jsx)("p",{className:"error-message",children:a.message})]}),(0,t.jsx)("button",{type:"submit",className:"button",children:"Submit"}),c&&(0,t.jsx)("p",{className:"error-message",children:c})]})})}a(5935),a(2265);let c=()=>(0,t.jsxs)("section",{id:"contact",className:"contact-section hidden",children:[(0,t.jsx)("h2",{children:"Contact Me"}),(0,t.jsxs)("div",{className:"contact-grid",children:[(0,t.jsxs)("div",{className:"contact-info",children:[(0,t.jsx)("h3",{children:"Let's Talk"}),(0,t.jsxs)("p",{children:[(0,t.jsx)(n.g,{className:"i",icon:r.y_8})," email@example.com"]}),(0,t.jsxs)("p",{children:[(0,t.jsx)(n.g,{className:"i",icon:r.KKr})," (123) 456-7890"]}),(0,t.jsxs)("p",{children:[(0,t.jsx)(n.g,{className:"i",icon:r.gKm})," City, Country"]})]}),(0,t.jsx)(i,{})]})]})},3315:(e,s,a)=>{"use strict";a.d(s,{A:()=>r});var t=a(5155);a(2115);var l=a(9757),n=a(5032);a(7016);let r=()=>(0,t.jsxs)("footer",{children:[(0,t.jsxs)("p",{children:["\xa9 ",new Date().getFullYear()," ",(0,t.jsx)("span",{className:"highlight",children:"[Your Name]"}),". All rights reserved."]}),(0,t.jsxs)("div",{className:"social-media",children:[(0,t.jsx)("a",{href:"https://www.facebook.com/yourprofile",target:"_blank",children:(0,t.jsx)(l.g,{icon:n.Kjv})}),(0,t.jsx)("a",{href:"https://www.x.com/yourprofile",target:"_blank",children:(0,t.jsx)(l.g,{icon:n.HQ1})}),(0,t.jsx)("a",{href:"https://www.instagram.com/yourprofile",target:"_blank",children:(0,t.jsx)(l.g,{icon:n.QV6})}),(0,t.jsx)("a",{href:"https://www.linkedin.com/in/yourprofile",target:"_blank",children:(0,t.jsx)(l.g,{icon:n.B_4})})]})]})},5616:(e,s,a)=>{"use strict";a.d(s,{A:()=>n});var t=a(5155),l=a(2115);a(5565),a(5457);let n=()=>{let[e,s]=l.useState(!1);return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("nav",{children:(0,t.jsxs)("div",{className:"navbar-container",children:[(0,t.jsx)("div",{className:"logo",children:(0,t.jsx)("img",{src:"/logo.png",alt:"Creative Workspace",className:"logo-img"})}),(0,t.jsx)("button",{className:"hamburger-menu",onClick:()=>{s(!e)},"aria-label":"Toggle navigation menu",children:"..."}),(0,t.jsxs)("ul",{className:"navbar-links ".concat(e?"show":""),children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/",children:"Home"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#about",children:"About Me"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#myWork",children:"My Work"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#contact",children:"Contact Me"})})]})]})})})}},8709:(e,s,a)=>{"use strict";a.d(s,{A:()=>l});var t=a(2115);let l=()=>((0,t.useEffect)(()=>{{let e=document.querySelectorAll("section"),s=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?e.target.classList.add("visible"):e.target.classList.remove("visible")})},{threshold:.1});return e.forEach(e=>{s.observe(e)}),()=>{e.forEach(e=>{s.unobserve(e)})}}},[]),null)},6352:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>u});var t=a(5155),l=a(2115),n=a(5566);function r(e){let{onComplete:s}=e,[a,r]=l.useState(!0);return l.useEffect(()=>{let e=setTimeout(()=>{r(!1),s()},0);return()=>clearTimeout(e)},[s]),(0,t.jsx)(n.P.div,{className:"preloader",initial:{opacity:1},animate:{opacity:a?1:0},exit:{opacity:1},transition:{duration:.5},children:(0,t.jsx)(n.P.div,{className:"loader",initial:{scale:0},animate:{scale:[1,1.5,1]},transition:{duration:1,repeat:1/0,ease:"easeInOut"}})})}a(8309),a(5407);let i=e=>{let{onEnter:s}=e,[a,n]=(0,l.useState)(!1);return(0,t.jsxs)(t.Fragment,{children:[!a&&(0,t.jsx)(r,{onComplete:()=>{n(!0)}}),a&&(0,t.jsx)("div",{className:"hero",children:(0,t.jsx)("div",{className:"hero-content",children:(0,t.jsxs)("div",{className:"hero-text",children:[(0,t.jsx)("h1",{className:"title",children:"Creative Vision, Exceptional Design"}),(0,t.jsxs)("p",{className:"tagline",children:["Hi, I'm ",(0,t.jsx)("span",{className:"highlight",children:"[Your Name]"}),", transforming ideas into compelling visual experiences"]}),(0,t.jsxs)("div",{className:"cta-buttons",children:[(0,t.jsx)("button",{className:"cta-button",onClick:s,children:"Get To Know Me"}),(0,t.jsx)("button",{className:"cta-button",onClick:s,children:"View My Work"}),(0,t.jsx)("button",{className:"cta-button",onClick:s,children:"Let's talk"})]})]})})})]})};var c=a(5616),o=a(3315),m=a(1480),h=a(8709);let d=()=>(0,t.jsxs)("div",{className:"main",children:[(0,t.jsx)(h.A,{}),(0,t.jsx)(c.A,{}),(0,t.jsx)(m.A,{}),(0,t.jsx)(o.A,{})]});function u(){let[e,s]=l.useState(!0);return(0,t.jsx)(t.Fragment,{children:e?(0,t.jsx)(i,{onEnter:()=>s(!1)}):(0,t.jsx)(d,{})})}},2265:()=>{},5935:()=>{},7016:()=>{},5407:()=>{},5457:()=>{},8309:()=>{}},e=>{var s=s=>e(e.s=s);e.O(0,[893,412,266,802,529,566,441,517,358],()=>s(6668)),_N_E=e.O()}]);