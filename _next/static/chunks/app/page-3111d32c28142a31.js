(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{8412:(e,s,t)=>{Promise.resolve().then(t.bind(t,9706))},9706:(e,s,t)=>{"use strict";t.d(s,{default:()=>y});var i=t(5155),a=t(2115),n=t(2863);function l(e){let{onComplete:s}=e,[t,l]=a.useState(!0);return a.useEffect(()=>{let e=setTimeout(()=>{l(!1),s()},0);return()=>clearTimeout(e)},[s]),(0,i.jsx)(n.P.div,{className:"preloader",initial:{opacity:1},animate:{opacity:t?1:0},exit:{opacity:1},transition:{duration:.5},children:(0,i.jsx)(n.P.div,{className:"loader",initial:{scale:0},animate:{scale:[1,1.5,1]},transition:{duration:1,repeat:1/0,ease:"easeInOut"}})})}t(284),t(1316);var r=t(9757),c=t(5055);let o=()=>{let[e,s]=a.useState(!1),t=()=>{s(!0)};return a.useEffect(()=>{let e=setTimeout(()=>{t()},2e3);return()=>clearTimeout(e)},[]),(0,i.jsxs)("div",{className:"hero",children:[!e&&(0,i.jsx)(l,{onComplete:t}),e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"hero-content",children:(0,i.jsxs)("div",{className:"hero-text",children:[(0,i.jsx)("h1",{className:"title",children:"Creative Vision, Exceptional Design"}),(0,i.jsxs)("p",{className:"tagline",children:["Hi, I'm ",(0,i.jsx)("span",{className:"highlight",children:"[Your Name]"}),", transforming ideas into compelling visual experiences."]}),(0,i.jsxs)("div",{className:"cta-buttons",children:[(0,i.jsx)("button",{className:"cta-button",onClick:()=>document.getElementById("aboutMe").scrollIntoView(),children:"Get To Know Me"}),(0,i.jsx)("button",{className:"cta-button",onClick:()=>document.getElementById("portfolio").scrollIntoView(),children:"View My Work"}),(0,i.jsx)("button",{className:"cta-button",onClick:()=>document.getElementById("myExperience").scrollIntoView(),children:"Current and Past Experience"}),(0,i.jsx)("button",{className:"cta-button",onClick:()=>document.getElementById("contact").scrollIntoView(),children:"Let's talk"})]})]})}),(0,i.jsxs)("div",{className:"hero-visual",children:[(0,i.jsx)("div",{className:"shape-1"}),(0,i.jsx)("div",{className:"shape-2"}),(0,i.jsx)("img",{src:"hero.png",alt:"Creative Workspace",className:"hero-img"})]}),(0,i.jsxs)("div",{className:"scroll-indicator",children:[(0,i.jsx)("span",{className:"scroll-text",children:"Scroll Down"}),(0,i.jsx)(r.g,{icon:c.Jt$})]})]})]})};function d(){let[e,s]=(0,a.useState)({name:"",email:"",message:""}),[t,n]=(0,a.useState)({}),[l,r]=(0,a.useState)(!1),[c,o]=(0,a.useState)(null),d=()=>{let s={};return(!e.name||e.name.length<3)&&(s.name="Name must be at least 3 characters long."),e.email&&/\S+@\S+\.\S+/.test(e.email)||(s.email="Please enter a valid email address."),(!e.message||e.message.length<10)&&(s.message="Message must be at least 10 characters long."),s},m=t=>{let{name:i,value:a}=t.target;s({...e,[i]:a})},h=async t=>{t.preventDefault(),o(null);let i=d();if(Object.keys(i).length>0){n(i);return}n({});try{(await fetch("form endpoint here",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok?(r(!0),s({name:"",email:"",message:""})):o("Failed to send message. Please try again later.")}catch(e){o("Something went wrong. Please try again later.")}};return(0,i.jsx)("div",{className:"form-container",children:l?(0,i.jsx)("p",{className:"success-message",children:"Thank you! Your message has been sent."}):(0,i.jsxs)("form",{onSubmit:h,children:[(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{htmlFor:"name",className:"label",children:"Name"}),(0,i.jsx)("input",{type:"text",id:"name",name:"name",value:e.name,onChange:m,required:!0,className:"input"}),t.name&&(0,i.jsx)("p",{className:"error-message",children:t.name})]}),(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{htmlFor:"email",className:"label",children:"Email"}),(0,i.jsx)("input",{type:"email",id:"email",name:"email",value:e.email,onChange:m,required:!0,className:"input"}),t.email&&(0,i.jsx)("p",{className:"error-message",children:t.email})]}),(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{htmlFor:"message",className:"label",children:"Message"}),(0,i.jsx)("textarea",{id:"message",name:"message",value:e.message,onChange:m,required:!0,className:"textarea"}),t.message&&(0,i.jsx)("p",{className:"error-message",children:t.message})]}),(0,i.jsx)("button",{type:"submit",className:"button",children:"Submit"}),c&&(0,i.jsx)("p",{className:"error-message",children:c})]})})}t(5846),t(6780);let m=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{children:"Contact Me"}),(0,i.jsxs)("div",{className:"contact-grid",children:[(0,i.jsxs)("div",{className:"contact-info",children:[(0,i.jsx)("h3",{children:"Let's Talk"}),(0,i.jsxs)("p",{children:[(0,i.jsx)(r.g,{className:"i",icon:c.y_8})," email@example.com"]}),(0,i.jsxs)("p",{children:[(0,i.jsx)(r.g,{className:"i",icon:c.KKr})," (123) 456-7890"]}),(0,i.jsxs)("p",{children:[(0,i.jsx)(r.g,{className:"i",icon:c.gKm})," City, Country"]})]}),(0,i.jsx)(d,{})]})]});t(8856);let h=JSON.parse('[{"id":1,"src":"/branding1.jpg","title":"Project Title 1","description":"Brief description of the project."},{"id":2,"src":"/branding2.png","title":"Project Title 2","description":"Brief description of the project."},{"id":3,"src":"/poster1.jpg","title":"Project Title 3","description":"Brief description of the project."},{"id":4,"src":"/poster2.jpg","title":"Project Title 3","description":"Brief description of the project."}]');var x=t(7711);t(4075),t(3932),(0,x.default)(()=>t.e(842).then(t.t.bind(t,5842,23)),{loadableGenerated:{webpack:()=>[5842]},ssr:!1});let p=()=>(a.useEffect(()=>{{let e=e=>{e.target.classList.contains("lb-image")&&e.preventDefault()};return document.addEventListener("contextmenu",e),t.e(842).then(t.t.bind(t,5842,23)).then(e=>{e.option({resizeDuration:200,wrapAround:!0,fadeDuration:300,imageFadeDuration:300,showImageNumberLabel:!0,disableScrolling:!0})}),()=>{document.removeEventListener("contextmenu",e)}}},[]),(0,i.jsx)("div",{id:"portfolio-items",className:"grid",onContextMenu:e=>e.preventDefault(),children:h.map((e,s)=>(0,i.jsxs)("div",{className:"portfolio-item",onContextMenu:e=>e.preventDefault(),"aria-label":"Open ".concat(e.title," in lightbox"),children:[(0,i.jsx)("a",{href:e.src,"data-lightbox":"gallery","data-title":e.title,"data-description":e.description,onContextMenu:e=>e.preventDefault(),children:(0,i.jsx)("img",{src:e.src,alt:e.title,draggable:"false",loading:"lazy",className:"image-container",onContextMenu:e=>e.preventDefault()})},s),(0,i.jsx)("h2",{children:e.title}),(0,i.jsx)("p",{children:e.description})]},s))}));t(2390);let j=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{children:"My Work"}),(0,i.jsx)(p,{})]});t(7953);let u=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"about-content",children:[(0,i.jsx)("div",{className:"about-image",children:(0,i.jsx)("img",{src:"me.png",alt:"[Your picture and Name]",loading:"lazy"})}),(0,i.jsxs)("div",{className:"about-text",children:[(0,i.jsx)("h2",{children:"About Me"}),(0,i.jsx)("p",{children:"Creative graphic designer with 5+ years of experience in digital and print design."}),(0,i.jsxs)("div",{className:"skills",children:[(0,i.jsx)("h3",{children:"Expertise"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Brand Identity Design"}),(0,i.jsx)("li",{children:"Digital Illustration"}),(0,i.jsx)("li",{children:"Print Design"}),(0,i.jsx)("li",{children:"Photo Manipulation"})]})]}),(0,i.jsx)("div",{className:"pdf-container",style:{position:"relative",paddingTop:"100%",overflow:"hidden",border:"2px solid #ccc",borderRadius:"8px",margin:"16px",maxWidth:"100%"},children:(0,i.jsx)("iframe",{src:"/resume.pdf",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:"none"},title:"Resume PDF"})}),(0,i.jsxs)("p",{style:{textAlign:"center",marginTop:"12px"},children:["Unable to view the PDF? ",(0,i.jsx)("a",{href:"/resume.pdf",download:!0,children:"Download it here"}),"."]})]})]})});var g=t(6046);let N=JSON.parse('[{"id":1,"title":"post One","description":"Description of post one","image":"/images/post-one.jpg","slug":"post-one"},{"id":2,"title":"post Two","description":"Description of post two","image":"/images/post-two.jpg","slug":"post-two"},{"id":3,"title":"post three","description":"Description of post three","image":"/images/post-three.jpg","slug":"post-three"},{"id":4,"title":"post four","description":"Description of post four","image":"/images/post-four.jpg","slug":"post-four"}]');t(8750);let f=()=>{let e=(0,g.useRouter)(),s=s=>{e.push("/posts/".concat(s))};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{className:"sectionTitle",children:"Latest Projects"}),(0,i.jsx)("div",{className:"grid",children:N.map(e=>(0,i.jsxs)("div",{className:"card",children:[(0,i.jsx)("img",{src:e.image,alt:e.title,className:"cardImage"}),(0,i.jsxs)("div",{className:"cardContent",children:[(0,i.jsx)("h3",{className:"cardTitle",children:e.title}),(0,i.jsx)("p",{className:"cardDescription",children:e.description}),(0,i.jsx)("li",{children:(0,i.jsx)("button",{onClick:()=>s(e.id),className:"readMore",children:"Read More"})},e.id)]})]},e.id))})]})};var b=t(5032);t(5047);let v=()=>(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("p",{children:["\xa9 ",new Date().getFullYear()," ",(0,i.jsx)("span",{className:"highlight",children:"[Your Name]"}),". All rights reserved."]}),(0,i.jsxs)("div",{className:"social-media",children:[(0,i.jsx)("a",{href:"https://www.facebook.com/yourprofile",target:"_blank",children:(0,i.jsx)(r.g,{icon:b.Kjv})}),(0,i.jsx)("a",{href:"https://www.x.com/yourprofile",target:"_blank",className:"fab fa-twitter"}),(0,i.jsx)("a",{href:"https://www.instagram.com/yourprofile",target:"_blank",children:(0,i.jsx)(r.g,{icon:b.QV6})}),(0,i.jsx)("a",{href:"https://www.linkedin.com/in/yourprofile",target:"_blank",children:(0,i.jsx)(r.g,{icon:b.B_4})})]})]});t(3246);let w=()=>{let[e,s]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=()=>{window.innerWidth>768&&s(!1)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,i.jsx)("nav",{children:(0,i.jsxs)("div",{className:"navbar-container",children:[(0,i.jsx)("div",{className:"logo",children:(0,i.jsx)("img",{src:"/logo.png",alt:"Creative Workspace",className:"logo-img"})}),(0,i.jsxs)("button",{className:"hamburger-menu ".concat(e?"open":""),onClick:()=>{s(!e)},"aria-label":"Toggle navigation menu","aria-expanded":e,children:[(0,i.jsx)("span",{className:"line top-line"}),(0,i.jsx)("span",{className:"line middle-line"}),(0,i.jsx)("span",{className:"line bottom-line"})]}),(0,i.jsxs)("ul",{className:"navbar-links ".concat(e?"show":""),children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/",onClick:()=>s(!1),children:"Home"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#aboutMe",onClick:()=>s(!1),children:"About Me"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#portfolio",onClick:()=>s(!1),children:"My Work"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#myExperience",onClick:()=>s(!1),children:"My Experience"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#contact",onClick:()=>s(!1),children:"Contact Me"})})]})]})})};t(5845);let y=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("header",{children:(0,i.jsx)(o,{})}),(0,i.jsx)(w,{}),(0,i.jsxs)("main",{children:[(0,i.jsx)("section",{id:"aboutMe",className:"about-section",children:(0,i.jsx)(u,{})}),(0,i.jsx)("section",{id:"portfolio",className:"portfolio-section",children:(0,i.jsx)(j,{})}),(0,i.jsx)("section",{id:"myExperience",className:"myExperience",children:(0,i.jsx)(f,{})}),(0,i.jsx)("section",{id:"contact",className:"contact-section",children:(0,i.jsx)(m,{})})]}),(0,i.jsx)("footer",{children:(0,i.jsx)(v,{})})]})},7953:()=>{},6780:()=>{},5846:()=>{},5047:()=>{},1316:()=>{},5845:()=>{},8750:()=>{},3246:()=>{},8856:()=>{},2390:()=>{},284:()=>{}},e=>{var s=s=>e(e.s=s);e.O(0,[523,266,802,740,338,441,517,358],()=>s(8412)),_N_E=e.O()}]);