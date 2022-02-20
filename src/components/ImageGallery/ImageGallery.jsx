// import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';
import { Button } from '../ButtonLoadMore/Button.styled';
import Spinner from '../Loader';
export default function ImageGallery({
  status,
  error,
  gallery,
  onLoadMore,
  onClick,
}) {
  const onPictureClick = (imageURL, alt) => {
    onClick(imageURL, alt);
  };

  if (status === 'idle') {
    return <h2>Enter some request</h2>;
  }
  if (status === 'pending') {
    return <Spinner />;
  }
  if (status === 'rejected') {
    return <h2>{error.message}</h2>;
  }
  if (status === 'resolved') {
    return (
      <>
        <Gallery>
          {gallery.map(({ id, tags, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              id={id}
              key={id}
              tags={tags}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              onClick={onPictureClick}
            />
          ))}
        </Gallery>
        <Button onClick={onLoadMore}>Load more</Button>
      </>
    );
  }
}
