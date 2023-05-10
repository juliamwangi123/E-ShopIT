import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const Navtop = () => {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex">
            <img className="h-12 w-auto" src="logo.svg" alt="Logo" />
          </div>
          <div className="flex-grow">
            <div className="w-full mx-auto">
              <div className="relative flex items-center">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-500" />
                </div>
                <input
                  className="block w-full bg-gray-100 rounded-full py-2 pl-10 pr-3 text-gray-900 placeholder-gray-500 focus:bg-white focus:outline-none focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm h-8"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="absolute right-0 top-0 mt-2 mr-2">
                  <FaSearch className="text-gray-500" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <FaShoppingCart className="h-6 w-6" />
            </button>
            <button className="ml-4 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <FaUser className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navtop;
