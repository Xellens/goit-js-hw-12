import{a as p,S as b,i as l}from"./assets/vendor-BWuBPKg2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const y=s=>` <li class="gallery-item">
    <a class="gallery-link" href="${s.largeImageURL}">
      <img class="gallery-img"
      src="${s.webformatURL}"
      alt="${s.tags}"
      loading="lazy" />
    </a>
    <ul class="gallery-info">
      <li class="gallery-info-item">
        <p class="gallery-info-title">Likes</p>
        <p class="gallery-info-text">${s.likes}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Views</p>
        <p class="gallery-info-text">${s.views}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Comments</p>
        <p class="gallery-info-text">${s.comments}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Downloads</p>
        <p class="gallery-info-text">${s.downloads}</p>
      </li>
    </ul>
  </li>`;p.defaults.baseURL="https://pixabay.com/api/";const f=(s,t)=>{const r={params:{key:"45775776-b95713cfaff84e770c32e25ed",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}};return p.get("",r)},h=document.querySelector(".js-search-form"),d=document.querySelector(".js-gallery"),n=document.querySelector(".loader"),i=document.querySelector(".loader-btn");i.insertAdjacentElement("afterend",n);const L=new b(".js-gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt",overlayOpacity:1});let c=1,g="",m=0;const v=async s=>{try{if(s.preventDefault(),g=h.elements.user_query.value.trim(),g===""){l.warning({message:"Please enter a search query.",position:"bottomRight"});return}d.innerHTML="",m=0,n.classList.remove("is-hidden"),c=1;const t=await f(g,c),r=t.data;if(!r.hits||r.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"}),d.innerHTML="",h.reset(),n.classList.add("is-hidden"),i.classList.add("is-hidden");return}const o=r.hits.map(e=>y(e)).join("");d.innerHTML=o,L.refresh(),h.reset(),m+=t.data.hits.length,m<15||Math.ceil(r.totalHits/15)===c?i.classList.add("is-hidden"):i.classList.remove("is-hidden")}catch(t){console.log(t),l.error({message:"An error occurred. Please try again later.",position:"bottomRight"})}finally{n.classList.add("is-hidden")}},w=async s=>{try{c++,n.classList.remove("is-hidden");const t=await f(g,c),r=t.data;if(!r.hits||r.hits.length===0){i.classList.add("is-hidden"),l.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"});return}const o=r.hits.map(a=>y(a)).join("");d.insertAdjacentHTML("beforeend",o),L.refresh();const{height:e}=d.firstElementChild.getBoundingClientRect();scrollBy({top:e*2,behavior:"smooth"}),m+=t.data.hits.length,Math.ceil(r.totalHits/15)===c&&(l.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"}),i.classList.add("is-hidden"))}catch(t){console.log(t),l.error({message:"An error occurred while loading more images. Please try again later.",position:"bottomRight"})}finally{n.classList.add("is-hidden")}};h.addEventListener("submit",v);i.addEventListener("click",w);
//# sourceMappingURL=index.js.map
