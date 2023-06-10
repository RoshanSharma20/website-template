import Footer from './components/Footer';
import Header from './components/Header';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from './pages/Homepage';
import Socila from './components/Socila';
import About from './pages/About';
import Products from './pages/Products';

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Socila></Socila>
        <div>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
          </Routes>
        </div>
        <Footer></Footer>
      </Router>

    </>
  );
}

export default App;
