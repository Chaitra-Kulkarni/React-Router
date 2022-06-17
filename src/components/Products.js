import { Link, Outlet } from "react-router-dom";
import './Products.css';

export const Products = () => {
  return (
    <>
      <div>
        <h2>List Of Products</h2>
        <input type="search" placeholder="Search for products" />
      </div>
      <div className="products-list">
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
        <Outlet />
      </div>
    </>
  );
};
