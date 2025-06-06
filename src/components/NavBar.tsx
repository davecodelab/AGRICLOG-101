
import {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import axios from "axios";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ state , SetState ] = useState<boolean>(false);
  const navigate = useNavigate();
  const [userStatus, setUserStatus] = useState<string | null>(null);



  const fetchState = async()=>{
    const URI = import.meta.env.VITE_BACKEND_URI;
    if(!URI)return;
    try{
      const response = await axios.get(`${URI}/protected`, {
        withCredentials: true
      })
      SetState(response.data.states);
      const userStatus = response.data.user?.status;
      SetState(response.data.states);

      if (response.data.states === true) {
        if (userStatus === "farmer") {
          setUserStatus("/dashboard/farmer");
        } else if (userStatus === "buyer") {
          setUserStatus("/dashboard/buyer");
        }
      }
      console.log(response.data)
    }catch (e) {
      SetState(false)
    }
  }

  useEffect(() => {
    fetchState()
  });

  return (
    <nav className= "sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img 
                className="h-20 w-20 mr-2" 
                src="../logo.png" 
                alt="AgroDevs Logo"
              />
              <span className="text-farm-green font-bold text-xl">AGRODEVS</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-farm-green">
              Home
            </Link>
            <Link to="/about" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-farm-green">
              About Us
            </Link>
            <Link to="/services" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-farm-green">
              Services
            </Link>
            <Link to="/contact" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-farm-green">
              Contact
            </Link>
            {
              state ? (
                  <Link to={userStatus}>
                    <Button variant="ghost" className="text-farm-green hover:text-farm-green hover:bg-green-50">
                      Dashboard
                    </Button>
                  </Link>
              ):(
                  <Link to="/login">
                    <Button variant="ghost" className="text-farm-green hover:text-farm-green hover:bg-green-50">
                      Sign In
                    </Button>
                  </Link>
              )
            }
            <Link to="/products/search">
              <Button className="bg-farm-green hover:bg-farm-lightGreen text-white">
                Browse Products
              </Button>
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-farm-green">
              Home
            </Link>
            <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-farm-green">
              About Us
            </Link>
            <Link to="/services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-farm-green">
              Services
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-farm-green">
              Contact
            </Link>
            <Link to="/login" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-farm-green">
              Sign In
            </Link>
            <Link to="/products/search" className="block px-3 py-2 text-base font-medium text-farm-green hover:bg-gray-50">
              Browse Products
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
