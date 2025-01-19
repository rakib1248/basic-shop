const Sidebar = () => {
  return (
    <>
      <div className=" bg-gray-800 text-white p-4 space-y-6 rounded-sm ">
        <h2 className="text-xl font-bold">Filters</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Electronics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Clothing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Accessories
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Price Range</h3>
            <input type="range" className="w-full mt-2" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Brands</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Apple
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Samsung
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Sony
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
