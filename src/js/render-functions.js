export const createGalleryCardTemplate = imgInfo => {
  return ` <li class="gallery-item">
    <a class="gallery-link" href="${imgInfo.largeImageURL}">
      <img class="gallery-img"
      src="${imgInfo.webformatURL}"
      alt="${imgInfo.tags}"
      loading="lazy" />
    </a>
    <ul class="gallery-info">
      <li class="gallery-info-item">
        <p class="gallery-info-title">Likes</p>
        <p class="gallery-info-text">${imgInfo.likes}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Views</p>
        <p class="gallery-info-text">${imgInfo.views}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Comments</p>
        <p class="gallery-info-text">${imgInfo.comments}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Downloads</p>
        <p class="gallery-info-text">${imgInfo.downloads}</p>
      </li>
    </ul>
  </li>`;
};
