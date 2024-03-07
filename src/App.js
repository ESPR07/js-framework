import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HomePage from "./pages/homepage.jsx";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route
            path="product/:id"
            element={
              <img
                src="https://t3.ftcdn.net/jpg/02/33/17/50/360_F_233175040_hwqRyiZlQkXimeLz2AIZhajyfiU9El1m.jpg"
                alt="under construction"
              />
            }
          ></Route>
          <Route
            path="contact"
            element={
              <img
                src="https://t3.ftcdn.net/jpg/02/33/17/50/360_F_233175040_hwqRyiZlQkXimeLz2AIZhajyfiU9El1m.jpg"
                alt="under construction"
              />
            }
          ></Route>
          <Route
            path="cart"
            element={
              <img
                src="https://t3.ftcdn.net/jpg/02/33/17/50/360_F_233175040_hwqRyiZlQkXimeLz2AIZhajyfiU9El1m.jpg"
                alt="under construction"
              />
            }
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
