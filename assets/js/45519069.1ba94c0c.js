"use strict";(self.webpackChunkpatchouli_docs=self.webpackChunkpatchouli_docs||[]).push([[468],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,h=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1954:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s="Entry JSON Format",u={unversionedId:"reference/entry-json",id:"reference/entry-json",isDocsHomePage:!1,title:"Entry JSON Format",description:"This page details every key you can have in an Entry json file.",source:"@site/docs/reference/entry-json.md",sourceDirName:"reference",slug:"/reference/entry-json",permalink:"/Patchouli/docs/reference/entry-json",editUrl:"https://github.com/VazkiiMods/Patchouli/edit/documentation/docs/reference/entry-json.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Category JSON Format",permalink:"/Patchouli/docs/reference/category-json"},next:{title:"1.17 Upgrade Guide",permalink:"/Patchouli/docs/upgrading/upgrade-guide-117"}},c=[],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"entry-json-format"},"Entry JSON Format"),(0,o.kt)("p",null,"This page details every key you can have in an Entry json file."),(0,o.kt)("p",null,'The "entry ID" of an entry is the path necessary to\nget to it from ',(0,o.kt)("inlineCode",{parentName:"p"},"/en_us/entries"),". So if your entry is in\n",(0,o.kt)("inlineCode",{parentName:"p"},"/en_us/entries/misc/cool_stuff.json"),", its ID would be ",(0,o.kt)("inlineCode",{parentName:"p"},"patchouli:misc/cool_stuff"),"."),(0,o.kt)("p",null,"For modders, the domain used is the domain in which the book is defined."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"name")," (String, ",(0,o.kt)("em",{parentName:"li"},"mandatory"),")")),(0,o.kt)("p",null,"The name of this entry."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"category")," (String, ",(0,o.kt)("em",{parentName:"li"},"mandatory"),")")),(0,o.kt)("p",null,"The category this entry belongs to. This must be set to one of your categories' ID. For\nbest results, use a fully-qualified ID that includes your book namespace\n",(0,o.kt)("inlineCode",{parentName:"p"},"yourbooknamespace:categoryname"),". In the future this will be enforced."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"icon")," (String, ",(0,o.kt)("em",{parentName:"li"},"mandatory"),")")),(0,o.kt)("p",null,"The icon for this entry. This can either be an ",(0,o.kt)("a",{parentName:"p",href:"/docs/patchouli-advanced/itemstack-format"},"ItemStack\nString"),", if you want an item to be the icon, or\na resource location pointing to a square texture. If you want to use a resource location,\nmake sure to end it with .png"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"pages")," (Object Array, ",(0,o.kt)("em",{parentName:"li"},"mandatory"),")")),(0,o.kt)("p",null,"The array of pages for this entry. In the following format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[\n    {\n        "type": "TYPE",\n        (type specific data ...)\n    },\n    {\n        "type": "TYPE",\n        (type specific data...)\n    }\n    (...)\n]\n')),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/patchouli-basics/page-types"},"Default Page Types")," for the page types that\nPatchouli comes with and what data each one requires, or ",(0,o.kt)("a",{parentName:"p",href:"/docs/patchouli-basics/templates"},"Using\nTemplates")," for instructions on how to create your own."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"advancement")," (String)")),(0,o.kt)("p",null,"The name of the advancement you want this entry to be locked behind. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/patchouli-basics/advancement-locking"},"Locking Content\nwith Advancements")," for more info on locking\ncontent."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"flag")," (String)")),(0,o.kt)("p",null,"A config flag expression that determines whether this entry should exist or not. See\n",(0,o.kt)("a",{parentName:"p",href:"/docs/patchouli-basics/config-gating"},"Using Config Flags")," for more info on config flags."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"priority")," (boolean)")),(0,o.kt)("p",null,"Defaults to false. If set to true, the entry will show up with an italicized name, and\nwill always show up at the top of the category. Use for really important entries you want\nto show up at the top."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"secret")," (boolean)")),(0,o.kt)("p",null,'Defaults to false. Set this to true to make this entry a secret entry. Secret entries\ndon\'t display as "Locked" when locked, and instead will not display at all until\nunlocked. Secret entries do not count for % completion of the book, and when unlocked will\ninstead show as an additional line in the tooltip.'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"read_by_default")," (boolean)")),(0,o.kt)("p",null,'Defaults to false. Set this to true if you want to entry to not show the unread ("(!!)")\nindicator if it hasn\'t been opened yet.'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"sortnum")," (integer)")),(0,o.kt)("p",null,"The sorting number for this entry. Defaults to 0. Entries with the same sorting number are\nsorted alphabetically, whereas entries with different sorting numbers are sorted from\nlowest to highest. Priority entries always show up first."),(0,o.kt)("p",null,"It's recommended you do ",(0,o.kt)("em",{parentName:"p"},"not")," use this, as breaking the alphabetical sorting order can make\nthings confusing, but it's left as an option."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"turnin")," (String)")),(0,o.kt)("p",null,'The ID of an advancement the player needs to do to "complete" this entry. The entry will\nshow up at the top of the list with a (?) icon next to it until this advancement is\ncomplete. This can be used as a quest system or simply to help guide players along a\nstarting path.'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"extra_recipe_mappings")," (Object String -> Int)")),(0,o.kt)("p",null,"Additional list of items this page teaches the crafting process for, for use with the\nin-world right click and quick lookup feature. Keys are ItemStack strings, values are\n0-indexed page numbers."))}m.isMDXComponent=!0}}]);