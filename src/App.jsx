import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import axios from "axios";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const KAY_API = "xdjkac150CbFCNeS7Q-go_I-69rjDCCNi2TdpSdj0Mo";

function App() {
  const [query, setQuery] = useState("");

  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!query.trim()) {
      setPhotos([]);
      return;
    }
    const fetchPhotos = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos`,
          {
            params: {
              client_id: KAY_API,
              query: query,
              page: page,
              per_page: 10,
              order_by: "relevant",
              collections: query,
              content_filter: "high",
              // color: "black_and_white",
              orientation: "landscape",
              lang: "en",
            },
          }
        );

        if (page === 1) {
          setPhotos(response.data.results);
        } else {
          const dataPhotos = response.data.results;
          setPhotos((prev) => [...prev, ...dataPhotos]);
        }
      } catch (error) {
        setIsError(true);
        setPhotos([]);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPhotos();
  }, [query, page]);

  const handleSearchValue = (newQuery) => {
    if (newQuery === query) {
      setIsError(true);
      setPhotos([]);
      setPage(1);
      return;
    }
    setQuery(newQuery);
    setPhotos([]);
    setPage(1);
  };

  const handleClickImgModal = (e) => {
    setIsModalOpen(true);
    const imgId = e.currentTarget.id;
    const findImg = photos.find((img) => img.id === imgId);
    setSelectedImg(findImg);

    console.log(imgId);
  };

  const handleLoadMore = () => {
    const newPage = page + 1;
    setPage(newPage);
  };

  return (
    <>
      <SearchBar onSearchValue={handleSearchValue} />
      {isError === true && <ErrorMessage />}
      {isLoading === true && <Loader />}
      <ImageGallery photos={photos} onOpenModal={handleClickImgModal} />
      {photos.length > 0 && <LoadMoreBtn onLoadMore={handleLoadMore} />}
      {isModalOpen === true && <ImageModal selectedImg={selectedImg} />}
    </>
  );
}

export default App;
