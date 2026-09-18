import Header from "./layout/Header";
import PageContent from "./layout/PageContent";
import Footer from "./layout/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  verifyToken,
  fetchCategories,
} from "./store/actions/clientActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyToken());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <>
      <Header />
      <PageContent />
      <Footer />
      <ToastContainer position="top-right" />
    </>
  );
}

export default App;