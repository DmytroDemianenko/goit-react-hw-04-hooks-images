import { GalleryItem, GalleryPicture } from './ImageGalleryItem.styled';
export default function ImageGalleryItem({
  largeImageURL,
  tags,
  id,
  webformatURL,
  onClick,
}) {
  const onPictureClick = () => {
    onClick(largeImageURL, tags);
  };
  return (
    <>
      <GalleryItem>
        <GalleryPicture
          id={id}
          src={webformatURL}
          alt={tags}
          onClick={onPictureClick}
        />
      </GalleryItem>
    </>
  );
}
