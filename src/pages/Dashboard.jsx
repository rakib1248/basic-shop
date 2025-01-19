import { FaPlus, FaRegEdit } from "react-icons/fa";
import useToggle from "../hooks/useToggle";
import Modal from "../components/Modal";
import { IoIosCloseCircleOutline } from "react-icons/io";
import useInput from "../hooks/useInput";
import { useRef, useState } from "react";
import { cloudImgUpload } from "../utils/cloudinaryImage";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  DeleteProduct,
} from "../app/feauther/product/ProductApiSlice";
import { IoTrashOutline } from "react-icons/io5";
import { FiEye } from "react-icons/fi";
import { loader } from "../app/feauther/product/ProductSlice";

const Dashboard = () => {
  const { products } = useSelector((state) => state.products);
  const [search, setSearch] = useState("");

  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [singleProduct, setsingleProduct] = useState({});

  const dispatch = useDispatch();

  const { input, setInput, handleInputChange } = useInput({
    name: "",
    price: "",
    r_price: "",
    dec: "",
    for: "",
    brand: "",
  });
  const [toggle, setToggle] = useToggle(false);
  const [producView, setProducView] = useToggle(false);

  const handleViewe = (product) => {
    setProducView(true);
    setsingleProduct(product);
  };

  // submit Form Create Product
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    dispatch(loader());
    const img = await cloudImgUpload({
      file: image,
      cloudName: "drpihbzih",
      preset: "test_upload",
    });
    dispatch(
      createProduct({
        ...input,
        image: img.secure_url,
        createdAt: Date.now(),
      })
    );
    setImage(null);
    fileInputRef.current.value = "";
    setInput({
      name: "",
      price: "",
      r_price: "",
      dec: "",
      for: "",
      brand: "",
    });
    setToggle(false);
  };
  return (
    <>
      <div className="bg-[#F4F7F6] mx-2 my-4 p-3 flex justify-between items-center">
        <div>
          <h1 className="text-3xl">Welcome Back Dashboard</h1>
          <p className="text-[#797979] font-bold text-lg">
            Product Count: {products.length}{" "}
          </p>
        </div>
        <div className="">
          <button
            onClick={setToggle}
            className="flex items-center gap-2 bg-blue-600 text-white py-2 px-5 hover:bg-blue-500 rounded">
            <FaPlus />
            Create Product
          </button>
          <Modal isOpen={toggle}>
            <div className="flex justify-between items-center">
              <div className="text-2xl mb-3">Create Product</div>
              <button className="text-3xl" onClick={setToggle}>
                <IoIosCloseCircleOutline />
              </button>
            </div>
            <div className="">
              <form action="" onSubmit={handleFormSubmit}>
                <div>
                  <label className="font-bold mb-2 inline-block">
                    Product Title
                  </label>
                  <input
                    name="name"
                    value={input.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-[#e9e9e9] focus:outline-none focus:shadow-md"
                    type="text"
                    placeholder="Enter Product Title..."
                  />
                </div>
                <div>
                  <label className="font-bold mb-2 inline-block">
                    Regular Price
                  </label>
                  <input
                    name="r_price"
                    value={input.r_price}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-[#e9e9e9] focus:outline-none focus:shadow-md"
                    type="number"
                    placeholder="Enter Product Title..."
                  />
                </div>
                <div>
                  <label className="font-bold mb-2 inline-block">Price</label>
                  <input
                    name="price"
                    value={input.price}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-[#e9e9e9] focus:outline-none focus:shadow-md"
                    type="number"
                    placeholder="Enter Product Title..."
                  />
                </div>
                <div>
                  <label className="font-bold mb-2 inline-block">
                    Product Description
                  </label>
                  <input
                    name="dec"
                    value={input.dec}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-[#e9e9e9] focus:outline-none focus:shadow-md"
                    type="text"
                    placeholder="Enter Product Title..."
                  />
                </div>
                <div>
                  <label className="font-bold mb-2 inline-block">
                    Product Ren or Sale
                  </label>
                  <select
                    name="for"
                    value={input.for}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-[#e9e9e9] focus:outline-none focus:shadow-md"
                    id="">
                    <option value="">Select</option>
                    <option value="For Rant">Rent</option>
                    <option value="For Sale">Sale</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold mb-2 inline-block">
                    Product Brand
                  </label>
                  <select
                    className="w-full p-2 border border-[#e9e9e9] focus:outline-none focus:shadow-md"
                    name="brand"
                    value={input.brand}
                    onChange={handleInputChange}
                    id="">
                    <option value="">Select</option>
                    <option value="Apple">Apple</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Oneplus">Oneplus</option>
                    <option value="Adidas">Adidas</option>
                    <option value="Bata">Bata</option>
                  </select>
                </div>
                <div>
                  <input
                    onChange={(e) => setImage(e.target.files[0])}
                    className="w-full p-2 border border-[#e9e9e9] focus:outline-none focus:shadow-md mt-3"
                    type="file"
                    ref={fileInputRef}
                    placeholder="Enter Product Title..."
                  />
                </div>
                <button
                  type="submit"
                  className=" bg-blue-600 text-white py-2 px-5 hover:bg-blue-500 rounded mt-2 w-full">
                  Create Product
                </button>
              </form>
            </div>
          </Modal>
        </div>
      </div>

      <div className="bg-[#F4F7F6] mx-2 my-4 p-3">
        <div className="overflow-x-auto w-full md:w-[80%] mx-auto rounded">
          <form action="">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border-b w-full focus:outline-none py-3 px-4 mb-3"
              placeholder="Enter Your search Key Word..."
            />
          </form>
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Image
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Title
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Price
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Brand
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {products
                .filter((item) =>
                  item.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((product) => (
                  <tr key={product.id} className="hover:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {product.name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Price: $
                      {product.r_price ? (
                        <>
                          {product.r_price} <del>{product.price}</del>
                        </>
                      ) : (
                        product.price
                      )}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {product.brand}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 ">
                      <div className="flex items-center justify-evenly">
                        <i
                          onClick={() => dispatch(DeleteProduct(product.id))}
                          className="text-2xl text-red-500 cursor-pointer">
                          <IoTrashOutline />
                        </i>
                        <i className="text-2xl text-yellow-500 cursor-pointer">
                          <FaRegEdit />
                        </i>
                        <i
                          onClick={() => handleViewe(product)}
                          className="text-2xl text-blue-500 cursor-pointer">
                          <FiEye />
                        </i>
                      </div>
                    </td>
                  </tr>
                ))}
              <Modal isOpen={producView}>
                <div className="flex justify-between items-center">
                  <div className="text-2xl mb-3">Sigle Product</div>
                  <button className="text-3xl" onClick={setProducView}>
                    <IoIosCloseCircleOutline />
                  </button>
                </div>
                <div className="mt-3">
                  <div className="relative">
                    <img
                      className="w-full h-64 object-cover object-top"
                      src={singleProduct.image}
                      alt=""
                    />
                    <span className="absolute top-2 left-3 bg-blue-500 text-white px-3 rounded">
                      {singleProduct.for}
                    </span>
                  </div>
                  <h1 className="font-bold text-2xl">{singleProduct.name}</h1>
                  <p>
                    {" "}
                    Price: $
                    {singleProduct.r_price ? (
                      <>
                        {singleProduct.r_price} <del>{singleProduct.price}</del>
                      </>
                    ) : (
                      singleProduct.price
                    )}{" "}
                  </p>
                  <button
                    onClick={setProducView}
                    className=" mt-5 w-full bg-blue-600 text-white py-2 px-5 hover:bg-blue-500 rounded">
                    Add to Card
                  </button>
                </div>
              </Modal>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
