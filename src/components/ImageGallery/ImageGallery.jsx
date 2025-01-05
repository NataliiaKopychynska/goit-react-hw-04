import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ photos, onOpenModal }) {
  return (
    <ul>
      {photos.map((item) => (
        <li onClick={onOpenModal} key={item.id}>
          <ImageCard item={item} />
        </li>
      ))}
    </ul>
  );
}
