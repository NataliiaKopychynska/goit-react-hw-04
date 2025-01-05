export default function ImageModal({ selectedImg }) {
  return (
    <>
      <div>
        <div>
          <img src={selectedImg.urls.regular} alt="" />
        </div>
      </div>
    </>
  );
}
