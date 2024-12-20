import './css/App.css';
import Home from "./pages/Home.jsx";
import Favorites from "./pages/Favorites.jsx";
import {Routes, Route} from 'react-router-dom';
import { MovieProvider } from "./contexts/MovieContext.jsx";
import NavBar from "./components/NavBar.jsx";


function App() {


  return (
   
    <MovieProvider>


      <div>

      <NavBar />

      <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
      </main>  

      </div>



    </MovieProvider>

    
  )
}


export default App
