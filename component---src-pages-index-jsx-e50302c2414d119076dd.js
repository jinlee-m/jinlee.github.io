(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[230],{1309:function(e,t,n){"use strict";var l=n(7294),o=n(2788),a=n(9583),i=n(2589);const r=o.default.div.withConfig({displayName:"Bio__BioWrapper",componentId:"sc-z1yaoi-0"})(["display:flex;align-items:center;@media (max-width:768px){padding:0 15px;}"]),c="undefined"!=typeof window&&"localhost:8000"===window.location.host?"http://localhost:8000":i.siteUrl,s=o.default.div.withConfig({displayName:"Bio__Profile",componentId:"sc-z1yaoi-1"})(["flex:0 0 auto;margin-right:16px;width:128px;height:128px;border-radius:999px;background-image:url(","/profile.png);background-size:cover;background-position:center;"],c),d=o.default.div.withConfig({displayName:"Bio__Author",componentId:"sc-z1yaoi-2"})(["margin-bottom:4.8px;font-size:24px;font-weight:700;color:",";"],(e=>e.theme.colors.text)),m=o.default.div.withConfig({displayName:"Bio__Description",componentId:"sc-z1yaoi-3"})(["margin-bottom:11.2px;line-height:1.5;font-size:16px;color:",";"],(e=>e.theme.colors.secondaryText)),p=o.default.div.withConfig({displayName:"Bio__LinksWrapper",componentId:"sc-z1yaoi-4"})(["& a{margin-right:9.6px;}& svg{width:25.6px;height:25.6px;cursor:pointer;}& svg path{fill:",";transition:fill 0.3s;}& a:hover svg path{fill:",";}"],(e=>e.theme.colors.icon),(e=>e.theme.colors.text)),u=e=>{let{link:t,children:n}=e;return t?l.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},n):null};t.Z=()=>{const{github:e,kaggle:t,instagram:n,facebook:o,linkedIn:c,email:g,etc:h}=i.links;return l.createElement(r,{id:"bio"},l.createElement(s,null),l.createElement("div",null,l.createElement(d,null,"@",i.author),l.createElement(m,null,i.description),l.createElement(p,null,l.createElement(u,{link:e},l.createElement(a.hJX,null)),l.createElement(u,{link:t},l.createElement(a.jnu,null)),l.createElement(u,{link:n},l.createElement(a.Zf_,null)),l.createElement(u,{link:o},l.createElement(a.Am9,null)),l.createElement(u,{link:c},l.createElement(a.ltd,null)),l.createElement(u,{link:g},l.createElement(a.SRX,null)),l.createElement(u,{link:h},l.createElement(a.gjK,null)))))}},4246:function(e,t,n){"use strict";var l=n(3493),o=n.n(l),a=n(7294),i=n(2788),r=n(1883),c=n(2213),s=n(729),d=n(184);const m=i.default.div.withConfig({displayName:"PostList__PostListWrapper",componentId:"sc-1wvewx0-0"})(["@media (max-width:768px){padding:0 10px;}"]),p=i.default.div.withConfig({displayName:"PostList__PostWrapper",componentId:"sc-1wvewx0-1"})(["position:relative;top:0;transition:all 0.5s;@media (max-width:768px){padding:0 5px;}"]),u=i.default.p.withConfig({displayName:"PostList__Date",componentId:"sc-1wvewx0-2"})(["margin-bottom:16px;font-size:14.4px;color:",";"],(e=>e.theme.colors.tertiaryText)),g=i.default.p.withConfig({displayName:"PostList__Excerpt",componentId:"sc-1wvewx0-3"})(["margin-bottom:32px;line-height:1.7;font-size:16px;color:",";word-break:break-all;"],(e=>e.theme.colors.secondaryText));t.Z=e=>{let{postList:t}=e;const{0:n,1:l}=(0,a.useState)(10),i=o()((()=>{document.documentElement.scrollHeight-document.documentElement.scrollTop<=document.documentElement.clientHeight+100&&n<t.length&&setTimeout((()=>l(n+10)),300)}),250);return(0,a.useEffect)((()=>(window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)})),[n,t]),(0,a.useEffect)((()=>{l(10)}),[t]),a.createElement(m,null,t.slice(0,n).map(((e,l)=>{const{title:o,date:i,tags:m}=e.frontmatter,{excerpt:h}=e,{slug:f}=e.fields;return a.createElement(a.Fragment,null,a.createElement(p,null,a.createElement(c.Z,{size:"bg"},a.createElement(r.Link,{to:f},o)),a.createElement(u,null,i),a.createElement(g,null,h),a.createElement(d.Z,{tagList:m})),n-1!==l&&t.length-1!==l&&a.createElement(s.Z,{mt:"48px",mb:"32px"}))})))}},184:function(e,t,n){"use strict";var l=n(7294),o=n(2788),a=n(1883);const i=o.default.div.withConfig({displayName:"TagList__TagListWrapper",componentId:"sc-194c2ht-0"})(["margin-bottom:16px;word-break:break-all;"]),r=o.default.div.withConfig({displayName:"TagList__TagLink",componentId:"sc-194c2ht-1"})(["display:inline-block;padding:9.6px 11.2px;margin-right:8px;margin-bottom:8px;border-radius:50px;background-color:",";color:",";text-decoration:none;font-size:14.4px;transition:all 0.2s;&:hover{background-color:",";}"],(e=>e.selected?e.theme.colors.selectedTagBackground:e.theme.colors.tagBackground),(e=>e.selected?e.theme.colors.selectedTagText:e.theme.colors.tagText),(e=>e.selected?e.theme.colors.hoveredSelectedTagBackground:e.theme.colors.hoveredTagBackground)),c=e=>e.replace(/\s+/g,"-");t.Z=e=>{let{tagList:t,count:n,selected:o}=e;return t?n?l.createElement(i,null,t.map(((e,t)=>l.createElement(a.Link,{key:JSON.stringify({tag:e,i:t}),to:o===e.fieldValue?"/tags":"/tags?q="+e.fieldValue},l.createElement(r,{selected:e.fieldValue===o},c(e.fieldValue)," (",e.totalCount,")"))))):l.createElement(i,null,t.map(((e,t)=>l.createElement(a.Link,{key:JSON.stringify({tag:e,i:t}),to:"/tags?q="+e},l.createElement(r,null,c(e)))))):null}},804:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var l=n(9734),o=n.n(l),a=n(7294),i=n(5038),r=n(5609),c=n(1309),s=n(4246),d=n(5161),m=n.n(d),p=n(2788),u=n(1883);const g=p.default.div.withConfig({displayName:"SideTagList__RelativeWrapper",componentId:"sc-9thzy7-0"})(["position:relative;"]),h=p.default.aside.withConfig({displayName:"SideTagList__Wrapper",componentId:"sc-9thzy7-1"})(["position:absolute;left:112%;top:0px;width:200px;height:100px;font-size:16px;@media (max-width:1300px){display:none;}"]),f=p.default.div.withConfig({displayName:"SideTagList__Title",componentId:"sc-9thzy7-2"})(["margin-bottom:25px;font-weight:bold;color:",";"],(e=>e.theme.colors.secondaryText)),x=p.default.li.withConfig({displayName:"SideTagList__Tag",componentId:"sc-9thzy7-3"})(["margin-bottom:16px;color:",";cursor:pointer;transition:color 0.3s;&:hover{color:",";}& > a{color:inherit;text-decoration:none;}"],(e=>e.theme.colors.tertiaryText),(e=>e.theme.colors.text));var E=e=>{let{tags:t,postCount:n}=e;return a.createElement(g,null,a.createElement(h,null,a.createElement(f,null,"TAG LIST"),a.createElement("ul",null,a.createElement(x,null,a.createElement(u.Link,{to:"/tags"},"all (",n,")")),m()(t,(e=>a.createElement(x,null,a.createElement(u.Link,{to:"/tags?q="+e.fieldValue},e.fieldValue," (",e.totalCount,")")))))))},w=n(729),k=n(1093),y=n(2589);var v=e=>{let{data:t}=e;const n=t.allMarkdownRemark.nodes,l=o()(t.allMarkdownRemark.group,["totalCount"]).reverse();return 0===n.length?a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).'):a.createElement(i.Z,null,a.createElement(r.Z,{title:y.title,description:y.description,url:y.siteUrl}),a.createElement(k.Z,{size:48}),a.createElement(c.Z,null),a.createElement(w.Z,null),a.createElement(E,{tags:l,postCount:n.length}),a.createElement(s.Z,{postList:n}))}},5161:function(e,t,n){var l=n(9932),o=n(7206),a=n(9199),i=n(1469);e.exports=function(e,t){return(i(e)?l:a)(e,o(t,3))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-e50302c2414d119076dd.js.map