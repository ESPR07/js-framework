import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <img src="https://www.abystyle.com/img/c/m/17_S_One_Piece.jpg" alt="One Piece" width={"100%"} />
      <Routes>
        <Route index></Route>
        <Route path="contact" element=""></Route>
      </Routes>
    </div>
  );
}

export default App;
