if(!self.define){let s,i={};const e=(e,a)=>(e=new URL(e+".js",a).href,i[e]||new Promise((i=>{if("document"in self){const s=document.createElement("script");s.src=e,s.onload=i,document.head.appendChild(s)}else s=e,importScripts(e),i()})).then((()=>{let s=i[e];if(!s)throw new Error(`Module ${e} didn’t register its module`);return s})));self.define=(a,f)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let o={};const c=s=>e(s,n),t={module:{uri:n},exports:o,require:c};i[n]=Promise.all(a.map((s=>t[s]||c(s)))).then((s=>(f(...s),o)))}}define(["./workbox-2d118ab0"],(function(s){"use strict";s.setCacheNameDetails({prefix:"vue-desktop-app"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/assets/fonts/poppins-v20-latin-300.eot",revision:"2fe81448b2fd44756e0b9b271f12be8c"},{url:"/assets/fonts/poppins-v20-latin-300.svg",revision:"86468b610bc7f1f8ca4d8a273782c9b0"},{url:"/assets/fonts/poppins-v20-latin-300.ttf",revision:"33cc1317fd1d7ddcbe090fc8254779e5"},{url:"/assets/fonts/poppins-v20-latin-300.woff",revision:"67a18102cad401f10ad39a582de224d5"},{url:"/assets/fonts/poppins-v20-latin-300.woff2",revision:"8d91ec1ca2d8b56640a47117e313a3e9"},{url:"/assets/fonts/poppins-v20-latin-300italic.eot",revision:"663eb9d1ec4158b873b871db8134d0e2"},{url:"/assets/fonts/poppins-v20-latin-300italic.svg",revision:"a6d9320a1a56a1f69458ae8a5ff7d753"},{url:"/assets/fonts/poppins-v20-latin-300italic.ttf",revision:"d9d642af8881d9def39f7c4e41135a46"},{url:"/assets/fonts/poppins-v20-latin-300italic.woff",revision:"a8ea8309be746e2558fce3eda631547d"},{url:"/assets/fonts/poppins-v20-latin-300italic.woff2",revision:"2c12ab3a0b1db8654af95a12a6320231"},{url:"/assets/fonts/poppins-v20-latin-500.eot",revision:"1a26d8a24609f2b1b5e06295fd21c422"},{url:"/assets/fonts/poppins-v20-latin-500.svg",revision:"acb3d87c4057a509e16256ee6adac348"},{url:"/assets/fonts/poppins-v20-latin-500.ttf",revision:"f346aa988283a440b4dee5dabb32a600"},{url:"/assets/fonts/poppins-v20-latin-500.woff",revision:"9e24286fd522ec4c65176252fc6499a0"},{url:"/assets/fonts/poppins-v20-latin-500.woff2",revision:"a09f2fccfee35b7247b08a1a266f0328"},{url:"/assets/fonts/poppins-v20-latin-500italic.eot",revision:"0ff1d96e98ba6d68437aab7b4f0a7c25"},{url:"/assets/fonts/poppins-v20-latin-500italic.svg",revision:"d804c64ba9b5262ca683b4445fac4262"},{url:"/assets/fonts/poppins-v20-latin-500italic.ttf",revision:"f93defa223aa31126e03edf253c429fb"},{url:"/assets/fonts/poppins-v20-latin-500italic.woff",revision:"8561c545c94ebeb87680d2494056c3ed"},{url:"/assets/fonts/poppins-v20-latin-500italic.woff2",revision:"88042d51a299f20ab0ddf917838fe403"},{url:"/assets/fonts/poppins-v20-latin-600.eot",revision:"18b837b5ba21408f30a8993b0add5517"},{url:"/assets/fonts/poppins-v20-latin-600.svg",revision:"4b6d70263966b118667de999d2cddadf"},{url:"/assets/fonts/poppins-v20-latin-600.ttf",revision:"8f07cdf20df454e3857ac1d5ee8bde31"},{url:"/assets/fonts/poppins-v20-latin-600.woff",revision:"d5a7daaedf64050d5b56e13462760b63"},{url:"/assets/fonts/poppins-v20-latin-600.woff2",revision:"72993dddf88a63e8f226656f7de88e57"},{url:"/assets/fonts/poppins-v20-latin-600italic.eot",revision:"812a2b9d6f01165b5d8cf161b7701cf1"},{url:"/assets/fonts/poppins-v20-latin-600italic.svg",revision:"0b5232607a4d636ac99180bce9e31879"},{url:"/assets/fonts/poppins-v20-latin-600italic.ttf",revision:"29915f49b74738ab9d716369df3dea48"},{url:"/assets/fonts/poppins-v20-latin-600italic.woff",revision:"296e77ef37d055573d76ddb1b8a9553d"},{url:"/assets/fonts/poppins-v20-latin-600italic.woff2",revision:"267ebe38acb78ca90441cdb3f0f44b7d"},{url:"/assets/fonts/poppins-v20-latin-700.eot",revision:"bd1de9fafc7197a73da5f1174345b686"},{url:"/assets/fonts/poppins-v20-latin-700.svg",revision:"b36aa291a196158c551f6fc353f39634"},{url:"/assets/fonts/poppins-v20-latin-700.ttf",revision:"52a388e45b353640b2539bf082a30c14"},{url:"/assets/fonts/poppins-v20-latin-700.woff",revision:"2ed184f355297674786cee87899e03b7"},{url:"/assets/fonts/poppins-v20-latin-700.woff2",revision:"25b0e113ca7cce3770d542736db26368"},{url:"/assets/fonts/poppins-v20-latin-700italic.eot",revision:"a16ff51bb009a7f98acadb6869291fba"},{url:"/assets/fonts/poppins-v20-latin-700italic.svg",revision:"a4a3d629185ae641d0671ecdc29062d0"},{url:"/assets/fonts/poppins-v20-latin-700italic.ttf",revision:"b902238d098e71fa4a14ef36b0d8ffec"},{url:"/assets/fonts/poppins-v20-latin-700italic.woff",revision:"e7fd3ab3b6ce24c43b0be0419c00ff59"},{url:"/assets/fonts/poppins-v20-latin-700italic.woff2",revision:"858549c2cb50c37c733cfa191fdb07ea"},{url:"/assets/fonts/poppins-v20-latin-italic.eot",revision:"8633cf572e31d5eb4a6f47f1aab50031"},{url:"/assets/fonts/poppins-v20-latin-italic.svg",revision:"1ec56713239a711a13eb9bb6382fa0ed"},{url:"/assets/fonts/poppins-v20-latin-italic.ttf",revision:"1213759404e8fea3b89c52f8ebc60a07"},{url:"/assets/fonts/poppins-v20-latin-italic.woff",revision:"777dda5a4170d9b7af08cdba3e50a6fb"},{url:"/assets/fonts/poppins-v20-latin-italic.woff2",revision:"a242ba0df3a128a2cab929a8c45d5056"},{url:"/assets/fonts/poppins-v20-latin-regular.eot",revision:"9bb84f43a12747b2b89b64d4073a6859"},{url:"/assets/fonts/poppins-v20-latin-regular.svg",revision:"c26cc61af85aabbf51bd458e1e4e8aa5"},{url:"/assets/fonts/poppins-v20-latin-regular.ttf",revision:"891f6ba4349c741c07868dec22e012b2"},{url:"/assets/fonts/poppins-v20-latin-regular.woff",revision:"f8ed328094e376b0b011d24029d0c2e6"},{url:"/assets/fonts/poppins-v20-latin-regular.woff2",revision:"9212f6f9860f9fc6c69b02fedf6db8c3"},{url:"/assets/poppins.css",revision:"2dfb9012b9a8d956c8e39f3bf18f44da"},{url:"/css/116.e886eeba.css",revision:null},{url:"/css/19.d43cf327.css",revision:null},{url:"/css/229.e930bd3d.css",revision:null},{url:"/css/403.efe33d82.css",revision:null},{url:"/css/507.a5efd9d4.css",revision:null},{url:"/css/517.a5efd9d4.css",revision:null},{url:"/css/727.cee59f5a.css",revision:null},{url:"/css/923.5d43da6e.css",revision:null},{url:"/css/965.0b18b367.css",revision:null},{url:"/css/app.4793f2f1.css",revision:null},{url:"/icons/fa-5/css/all.css",revision:"f6f5d95548c4c4b14cf3ae8741dc47e5"},{url:"/icons/fa-5/css/all.min.css",revision:"a28e912c1a41becec7f68848d739d5c0"},{url:"/icons/fa-5/css/brands.css",revision:"c94485e9cbce725dab59c1bee2783c40"},{url:"/icons/fa-5/css/brands.min.css",revision:"604bca9a34bad393aace9d7160b0fc74"},{url:"/icons/fa-5/css/duotone.css",revision:"4d80de792c0834929b20f3c46e8aab83"},{url:"/icons/fa-5/css/duotone.min.css",revision:"abd7a52cbc5374d62334ec86a2fd1899"},{url:"/icons/fa-5/css/fontawesome.css",revision:"5876f1fd40cd5bf4f23f833bde3743f4"},{url:"/icons/fa-5/css/fontawesome.min.css",revision:"22df5d63cf89e28c81bfd7a39d22a191"},{url:"/icons/fa-5/css/light.css",revision:"d1b82947959ae6d689cc40a4e9bedf46"},{url:"/icons/fa-5/css/light.min.css",revision:"2379688fd924e81222460b5b1ce2f8c2"},{url:"/icons/fa-5/css/regular.css",revision:"53f25ab24b4c4b28dfab95d5d87cebed"},{url:"/icons/fa-5/css/regular.min.css",revision:"6d51a157fba678a6ba6fa549b4a4df87"},{url:"/icons/fa-5/css/solid.css",revision:"35f92cf717f012dd4d92d0107557a4b1"},{url:"/icons/fa-5/css/solid.min.css",revision:"9ce3149fdfbe3f86fc5bd20d7a1915dc"},{url:"/icons/fa-5/css/svg-with-js.css",revision:"870332dfaa78f1e43acec32d80df784a"},{url:"/icons/fa-5/css/svg-with-js.min.css",revision:"6bc08711cc72b02a8fe3a2be384783f1"},{url:"/icons/fa-5/css/v4-shims.css",revision:"7f4371a6d1f496ff19a857386b861b47"},{url:"/icons/fa-5/css/v4-shims.min.css",revision:"eae03deb38f10494d46941c876154aea"},{url:"/icons/fa-5/webfonts/fa-brands-400.eot",revision:"2c4f3d315a05e3d89f421c92723d452f"},{url:"/icons/fa-5/webfonts/fa-brands-400.svg",revision:"67bfd8e165a9b19b265d023faa928136"},{url:"/icons/fa-5/webfonts/fa-brands-400.ttf",revision:"ede4ff54ccb46fe67622dbcffeb90fdf"},{url:"/icons/fa-5/webfonts/fa-brands-400.woff",revision:"07fa0741d97758debce36520d5a12d5b"},{url:"/icons/fa-5/webfonts/fa-brands-400.woff2",revision:"0511670fe2f5405105a6760294c5c51d"},{url:"/icons/fa-5/webfonts/fa-duotone-900.eot",revision:"a2164a2f7e68d0f114070214a263e8c7"},{url:"/icons/fa-5/webfonts/fa-duotone-900.ttf",revision:"c41f52d8bd79e0a4975ce8568e18fe22"},{url:"/icons/fa-5/webfonts/fa-duotone-900.woff",revision:"4ea0b4e8a9679d5b03bca680e586e3a6"},{url:"/icons/fa-5/webfonts/fa-duotone-900.woff2",revision:"33b94ae8447d31e14d9ca9d360bbb4df"},{url:"/icons/fa-5/webfonts/fa-light-300.eot",revision:"a1c78788347200b9e8253b6ac2671d1a"},{url:"/icons/fa-5/webfonts/fa-light-300.ttf",revision:"fdfecd10e4891f4f3a5cb091703dfce4"},{url:"/icons/fa-5/webfonts/fa-light-300.woff",revision:"c5cd85f2049b07a34fd9ff32e14e99f3"},{url:"/icons/fa-5/webfonts/fa-light-300.woff2",revision:"de11da0fb48a14c9cbc05b0a24ed6efa"},{url:"/icons/fa-5/webfonts/fa-regular-400.eot",revision:"145aabea1380fa644aea4beedca6a771"},{url:"/icons/fa-5/webfonts/fa-regular-400.ttf",revision:"04842b94683f70c18aeb76b5a27cd221"},{url:"/icons/fa-5/webfonts/fa-regular-400.woff",revision:"f48a8829bec665258b9c85b23ecbf3c0"},{url:"/icons/fa-5/webfonts/fa-regular-400.woff2",revision:"d8689b99dce7c881d3130f3c91cfefdf"},{url:"/icons/fa-5/webfonts/fa-solid-900.eot",revision:"0ab669f1097f57a674b04f6cbff174d7"},{url:"/icons/fa-5/webfonts/fa-solid-900.svg",revision:"f34def04a165fa075f094329155e4f53"},{url:"/icons/fa-5/webfonts/fa-solid-900.ttf",revision:"5f2f8485a00387b7a1d89e793555991f"},{url:"/icons/fa-5/webfonts/fa-solid-900.woff",revision:"42d66a3eb75eac2b4fc0ee58e9846497"},{url:"/icons/fa-5/webfonts/fa-solid-900.woff2",revision:"978b27ec5d8b81d2b15aa28aaaae1fcb"},{url:"/index.html",revision:"6b461d3c7a3e0fb83e564a6b0caafee0"},{url:"/js/116.79482b07.js",revision:null},{url:"/js/19.c2bd2d49.js",revision:null},{url:"/js/229.f1245463.js",revision:null},{url:"/js/403.bffce9f0.js",revision:null},{url:"/js/507.6f56b163.js",revision:null},{url:"/js/517.b424fea4.js",revision:null},{url:"/js/624.655f1324.js",revision:null},{url:"/js/727.c97e4b66.js",revision:null},{url:"/js/90.eacef0f1.js",revision:null},{url:"/js/923.e16adbd7.js",revision:null},{url:"/js/965.72bed68c.js",revision:null},{url:"/js/app.30b6adf9.js",revision:null},{url:"/js/chunk-vendors.c04caeee.js",revision:null},{url:"/manifest.json",revision:"3c6f637cc12f165073ce142f2e8d2c38"},{url:"/neutralino.js",revision:"6cabf59a4e7e47339d16a1fde22f1332"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
