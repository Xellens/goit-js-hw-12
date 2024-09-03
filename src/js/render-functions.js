export const createGalleryCardTemplate = imgInfo => {
  return `
    <li class="gallery-card">
    <a class="gallery-link" href="${imgInfo.largeImageURL}">
      <img 
      class="gallery-img" 
      src="${imgInfo.webformatURL}" 
      alt="${imgInfo.tags}" />
    </a>
  <div class="wrapper">
    <ul class="img-content-wrapper">
      <li class="text-info">
        Likes<span class="number">${imgInfo.likes}</span>
      </li>
      <li class="text-info">
        Views<span class="number">${imgInfo.views}</span>
      </li>
      <li class="text-info">
        Comments<span class="number">${imgInfo.comments}</span>
      </li>
      <li class="text-info">
        Downloads<span class="number">${imgInfo.downloads}</span>
      </li>
    </ul>
  </div>
</li>
    `;
};
