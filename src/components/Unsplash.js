import { createApi } from "unsplash-js";

import { ImageList, ImageListItem } from "@mui/material";

const unsplash = createApi({
  accessKey: process.env.REACT_APP_UNSPLASHACESSKEY,
});

export function ImageGeneratorUnsplash(query, perPage) {
  if (!query) query = "art";
  if (!perPage) perPage = 1;

  const params = {
    query,
    page: Math.floor(Math.random() * 100),
    perPage,
    orientation: "portrait",
  };

  return unsplash.search
    .getPhotos(params)
    .then((results) => {
      return results.status === 200 ? results.response.results : [];
    })
    .catch((error) => {
      return [];
    });
}

export function UnsplashList(props) {
  const images = props.images;
  return images.length ? (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {images.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={`${item.urls.small}w220h164q50`}
            srcSet={`${item.urls.small}w220h164q50`}
            alt={item.alt}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  ) : null;
}

export function UnsplashItem(props) {
  const item = props.images[0];
  return item?.urls?.full ? (
    <ImageListItem sx={{ width: 300, height: 250 }} key={item.id}>
      <img
        src={`${item.urls.small}w220h164q50`}
        srcSet={`${item.urls.small}w220h164q50`}
        alt={item.alt}
        loading="lazy"
      />
    </ImageListItem>
  ) : null;
}
