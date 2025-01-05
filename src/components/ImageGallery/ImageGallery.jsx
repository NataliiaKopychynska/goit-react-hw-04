import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ photos, handleClickImgModal }) {
  return (
    <ul>
      {photos.map((item) => (
        <li onClick={handleClickImgModal} key={item.id}>
          <ImageCard item={item} />
        </li>
      ))}
    </ul>
  );
}
