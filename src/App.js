import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index></Route>
        <Route path="contact" element=""></Route>
      </Routes>
    </div>
  );
}

export default App;
