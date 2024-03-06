import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';


function App() {
  return (
    <div>
      <Navbar />
      <Footer />
      <Routes>
        <Route index></Route>
        <Route path="contact" element=""></Route>
      </Routes>
    </div>
  );
}

export default App;
