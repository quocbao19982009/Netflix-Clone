import { useContext, useState, useEffect } from "react";
import "./App.css";
import Banner from "./components/Banner";
import MainContent from "./components/MainContent";
import Nav from "./components/Nav";
import ModalDetailContext from "./store/ModalDetailContext";
import Modal from "./components/Modal";
import BounceLoader from "react-spinners/BounceLoader";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);

  const ctx = useContext(ModalDetailContext);
  console.log(ctx);

  return (
    <>
      <div className={loading ? "stop-scrolling" : "App"}>
        <div
          className={`loader_container ${
            !loading && "loader_container_hidden"
          }`}
        >
          <BounceLoader color="red" size="150" />
        </div>
        {ctx.isModalOpen && <Modal></Modal>}
        <header>
          <Nav />
          <Banner></Banner>
        </header>
        <MainContent />
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
