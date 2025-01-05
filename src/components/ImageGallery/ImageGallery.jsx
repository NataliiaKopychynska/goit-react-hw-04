import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

export default function ImageGallery({ photos, onOpenModal }) {
  return (
    <ul className={s.list}>
      {photos.map((item) => (
        <li className={s.item} onClick={onOpenModal} key={item.id} id={item.id}>
          <ImageCard item={item} />
        </li>
      ))}
    </ul>
  );
}
