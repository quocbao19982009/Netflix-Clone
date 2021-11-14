import { useContext } from "react";
import "./App.css";
import Banner from "./components/Banner";
import MainContent from "./components/MainContent";
import Nav from "./components/Nav";
import ModalDetailContext from "./store/ModalDetailContext";
import Modal from "./components/Modal";

function App() {
  const ctx = useContext(ModalDetailContext);
  console.log(ctx);

  return (
    <div className="App">
      {ctx.isModalOpen && <Modal></Modal>}
      <header>
        <Nav />
        <Banner></Banner>
      </header>
      <MainContent />
    </div>
  );
}

export default App;
