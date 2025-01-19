import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRouter from "./route/AppRouter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import API from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { allProducts } from "./app/feauther/product/ProductApiSlice";
import Loader from "./components/Loader";

function App() {
  const relodeapi = async () => {
    await API.get("/admin");
  };
  setInterval(() => {
    relodeapi();
  }, 30000);

  const dispatch = useDispatch();
  const loder = useSelector((state) => state.products.isLoader);
  

  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);
  return (
    <>
      <Router>
        {loder?<Loader/>:""}
       
        <Header />
        <AppRouter />
        <Footer />
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
