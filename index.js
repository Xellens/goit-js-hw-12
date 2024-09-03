import{a as y,i as p,S as v}from"./assets/vendor-D3eAW7nd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();y.defaults.baseURL="https://pixabay.com/api/";const f=(s,t)=>{const a={params:{key:"45775776-b95713cfaff84e770c32e25ed",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}};return y.get("",a)},h=s=>`
    <li class="gallery-card">
    <a class="gallery-link" href="${s.largeImageURL}">
      <img 
      class="gallery-img" 
      src="${s.webformatURL}" 
      alt="${s.tags}" />
    </a>
  <div class="wrapper">
    <ul class="img-content-wrapper">
      <li class="text-info">
        Likes<span class="number">${s.likes}</span>
      </li>
      <li class="text-info">
        Views<span class="number">${s.views}</span>
      </li>
      <li class="text-info">
        Comments<span class="number">${s.comments}</span>
      </li>
      <li class="text-info">
        Downloads<span class="number">${s.downloads}</span>
      </li>
    </ul>
  </div>
</li>
    `,l=document.querySelector(".js-search-form"),i=document.querySelector(".js-gallery"),g=document.querySelector(".loader"),d=document.querySelector(".js-load-more");let n=1,c="",L=0;function b(){g.classList.remove("is-hidden")}function u(){g.classList.add("is-hidden")}u();setTimeout(u,300);const w=async s=>{try{b(),s.preventDefault(),n=1,c=l.elements.user_query.value.trim();const t=await f(c,n);if(console.log(t),c===""){p.warning({title:"Caution",message:"Input field must not be empty",position:"bottomCenter"}),d.classList.add("is-hidden");return}if(t.data.hits.length===0){p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomCenter"}),i.innerHTML="",l.reset();return}const a=t.data.hits.map(r=>h(r)).join("");i.innerHTML=a,L=i.querySelector("li").getBoundingClientRect().height,new v(".gallery a",{navText:["<",">"],captionsData:"alt",captionDelay:250,enableKeyboard:!0}).refresh(),d.classList.remove("is-hidden-load")}catch(t){console.log(t)}finally{u()}l.reset()},C=async s=>{try{b(),n++;const t=await f(c,n),a=t.data.hits.map(e=>h(e)).join("");i.insertAdjacentHTML("beforeend",a),scrollBy({top:L*2,behavior:"smooth"});const o=Math.ceil(t.data.totalHits/15);n>=o&&(d.classList.add("is-hidden"),p.info({position:"topCenter",message:"We are sorry,but you have reached the end of search results"}))}catch(t){console.log(t)}finally{u()}l.reset()};l.addEventListener("submit",w);d.addEventListener("click",C);
//# sourceMappingURL=index.js.map
