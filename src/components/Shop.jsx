import { useState } from "react";

import ProductCart from "./Products/ProductCart";
import ProductList from "./Products/ProductList";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgMenuGridR } from "react-icons/cg";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const Shop = () => {
  const [productList, setProductList] = useState(true);
  const [search, setSearch] = useState("");

  const { products, isLoder } = useSelector((state) => state.products);

  return (
    <>
      {isLoder ? <Loader /> : ""}
    

      {/*  */}
      <div className="flex flex-col sm:flex-row items-center justify-between py-5 px-3">
        <h1 className="font-bold text-2xl ">All Products</h1>
        <div className="sm:w-1/2 w-full items-center flex gap-2 ">
          <form action="" className="w-[80%]">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border-b w-full focus:outline-none py-3"
              placeholder="Enter Your search Key Word..."
            />
          </form>
          <i
            onClick={() => setProductList(true)}
            className="text-2xl cursor-pointer">
            <CgMenuGridR />
          </i>
          <i
            onClick={() => setProductList(false)}
            className="text-2xl cursor-pointer">
            <GiHamburgerMenu />
          </i>
        </div>
      </div>
      <div
        className={
          productList
            ? " mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10"
            : "mx-auto flex flex-col gap-6 justify-normal"
        }>
        {products
          .filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => (
            <div className=" " key={item.id}>
              {/* Render item details here */}
              {productList ? (
                <ProductCart product={item} />
              ) : (
                <ProductList product={item} />
              )}
            </div>
          ))}
      </div>
    </>
  );
};

export default Shop;
