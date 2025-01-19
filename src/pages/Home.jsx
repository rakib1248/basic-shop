import Shop from "../components/Shop";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row h-screen">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-gray-100 p-4 hidden md:block">
          <Sidebar />
        </div>

        {/* Shop */}
        <div className="w-full md:w-3/4 bg-white p-4 overflow-y-auto">
          <Shop />
        </div>
      </div>
    </>
  );
};

export default Home;
