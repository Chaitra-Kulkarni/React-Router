import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { Orders } from './components/Orders';
import { NoMatch } from './components/Nomatch';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="orders" element={<Orders />}></Route>
      <Route path="*" element={<NoMatch />}></Route>
    </Routes>
    </>
  );
}

export default App;
