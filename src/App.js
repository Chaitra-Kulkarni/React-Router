import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { Orders } from './components/Orders';
import { NoMatch } from './components/Nomatch';
import { Products } from './components/Products';
import { FeaturedProducts } from './components/FeaturedProducts';
import { NewProducts } from './components/NewProducts';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="products" element={<Products />}>
        <Route index element={<FeaturedProducts />} />
        <Route path="featured" element={<FeaturedProducts />} />
        <Route path="new" element={<NewProducts />} />
      </Route>
      <Route path="orders" element={<Orders />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
    </>
  );
}

export default App;
