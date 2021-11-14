import { useState, createContext } from "react";

const ModalDetailContext = createContext({
  isModalOpen: null,
  closeModalHandler: () => {},
  openModalHandler: () => {},
  movieDetails: {},
  setMovieDetails: () => {},
});

export const ModalDetailContextProvider = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});

  const closeModalHandler = () => {
    setModalOpen(false);
  };

  const openModalHandler = () => {
    setModalOpen(true);
  };

  return (
    <ModalDetailContext.Provider
      value={{
        isModalOpen: modalOpen,
        closeModalHandler,
        openModalHandler,
        movieDetails,
        setMovieDetails,
      }}
    >
      {props.children}
    </ModalDetailContext.Provider>
  );
};

export default ModalDetailContext;
