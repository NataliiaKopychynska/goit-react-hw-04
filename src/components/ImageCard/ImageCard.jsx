export default function ImageCard({ item }) {
  return (
    <>
      <div>
        <img width="260" height="180" src={item.urls.small} alt="" />
      </div>
    </>
  );
}
