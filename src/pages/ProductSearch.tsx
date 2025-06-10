
import {useState, useMemo, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ArrowDown, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import ProductCard, { Product } from '@/components/ProductCard';
import { useToast } from '@/hooks/use-toast';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import axios from "axios";

const productsData: Product[] = [
  {
    id: '1',
    name: 'Fresh Tomatoes',
    category: 'Vegetables',
    price: 40,
    unit: 'kg',
    farmer: 'Robert Awukye',
    location: 'Fiapre, Sunyani ',
    imageUrl: 'https://imgs.search.brave.com/ZQIwhe16XdfAcbluguBWxZzql2SVpSyGfi3pMATU9BA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vaE1SNjBf/cG9nd0hWXzRORmkt/dS1ra2JLQzBtM1ZP/Tm90bEJYX050cDdY/SS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk9E/UTMvTXpNMU1URTJM/M0JvYjNSdi9MM1J2/YldGMGIyVnpMVzl1/L0xYUm9aUzEyYVc1/bExtcHcvWno5elBU/WXhNbmcyTVRJbS9k/ejB3Sm1zOU1qQW1Z/ejFZL2MzQk5NbmxU/ZGxWbWNXcHUvZERk/SVREVnhTM2x1TUhS/NS9VbUkxY1V4elpq/RkhRVkEyL0xUTjRV/WE4zUFE.jpeg',
    available: 100,
  },
  {
    id: '2',
    name: 'Organic Rice',
    category: 'Grains',
    price: 60,
    unit: 'kg',
    farmer: 'Gideon Prempeh',
    location: 'Fankyirebra, Kumasi',
    imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1470&auto=format&fit=crop',
    available: 500,
  },
  {
    id: '3',
    name: 'Fresh Apples',
    category: 'Fruits',
    price: 120,
    unit: 'kg',
    farmer: 'Mathew Opoku',
    location: 'Bonwire, Kumasi',
    imageUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=1374&auto=format&fit=crop',
    available: 80,
  },
  {
    id: '4',
    name: 'Organic Potatoes',
    category: 'Vegetables',
    price: 30,
    unit: 'kg',
    farmer: 'Adom Kyei',
    location: 'Adisadel, Cape Coast',
    imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=1470&auto=format&fit=crop',
    available: 200,
  },
  {
    id: '5',
    name: 'Fresh Oranges',
    category: 'Fruits',
    price: 80,
    unit: 'kg',
    farmer: 'Harpreet Singh',
    location: 'Yabon, Tamale',
    imageUrl: 'https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=1374&auto=format&fit=crop',
    available: 120,
  },
  {
    id: '6',
    name: 'Organic Wheat',
    category: 'Grains',
    price: 45,
    unit: 'kg',
    farmer: 'Kwame Nkrumah',
    location: 'Ntonsu, Ashanti',
    imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1470&auto=format&fit=crop',
    available: 350,
  }
];

const categories = ['Vegetables', 'Fruits', 'Grains', 'Dairy', 'Spices'];
const locations = ['Agona', 'Kyebi', 'Hwidiem', 'Ntonsu', 'Kumasi', 'Accra', 'Takoradi', 'Tamale', 'Cape Coast', 'Sunyani'];

const ProductSearch = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [sortOption, setSortOption] = useState('recommended');
  const [showFilters, setShowFilters] = useState(false);
  const [productes , setProductes] = useState<any[]>([])

  const fetchProducts = async()=>{
    const  URI = import.meta.env.VITE_BACKEND_URI;
    if(!URI) return;
    try{
      const response = await axios.get(`${URI}/get/all/products`)
      setProductes(response.data);
    }catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  const handleLocationChange = (location: string) => {
    setSelectedLocations(prev => 
      prev.includes(location) 
        ? prev.filter(l => l !== location) 
        : [...prev, location]
    );
  };

  const filteredProducts = useMemo(() => {
    return productes.filter(product => {
      // Search term filter
      if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
        return false;
      }
      
      // Location filter
      if (selectedLocations.length > 0 && !selectedLocations.some(location => product.user?.location.includes(location))) {
        return false;
      }
      
      // Price filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }
      
      return true;
    }).sort((a, b) => {
      switch (sortOption) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        default: // 'recommended'
          return 0; // No sorting
      }
    });
  }, [searchTerm, selectedCategories, selectedLocations, priceRange, sortOption]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Find Fresh Produce</h1>
            
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  placeholder="Search products..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64 md:w-80"
                />
              </div>
              
              <Button 
                variant="outline" 
                className="flex items-center md:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters (side panel) */}
            <div className={`${showFilters ? 'block' : 'hidden'} md:block md:w-64 lg:w-72 flex-shrink-0`}>
              <div className="bg-white p-5 rounded-lg shadow-sm mb-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-gray-800">Categories</h3>
                  <Button variant="ghost" size="sm" className="h-auto p-1" onClick={() => setSelectedCategories([])}>
                    Clear
                  </Button>
                </div>
                <div className="space-y-2">
                  {categories.map(category => (
                    <div key={category} className="flex items-center">
                      <Checkbox 
                        id={`category-${category}`} 
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => handleCategoryChange(category)}
                      />
                      <Label htmlFor={`category-${category}`} className="ml-2 text-sm text-gray-600">{category}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm mb-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-gray-800">Price Range</h3>
                  <Button variant="ghost" size="sm" className="h-auto p-1" onClick={() => setPriceRange([0, 150])}>
                    Reset
                  </Button>
                </div>
                <Slider 
                  value={priceRange} 
                  min={0}
                  max={150}
                  step={5}
                  onValueChange={(value) => setPriceRange(value as [number, number])}
                  className="my-6"
                />
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>GHS{priceRange[0]}</span>
                  <span>GHS{priceRange[1]}</span>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-gray-800">Locations</h3>
                  <Button variant="ghost" size="sm" className="h-auto p-1" onClick={() => setSelectedLocations([])}>
                    Clear
                  </Button>
                </div>
                <div className="space-y-2">
                  {locations.map(location => (
                    <div key={location} className="flex items-center">
                      <Checkbox 
                        id={`location-${location}`} 
                        checked={selectedLocations.includes(location)}
                        onCheckedChange={() => handleLocationChange(location)}
                      />
                      <Label htmlFor={`location-${location}`} className="ml-2 text-sm text-gray-600">{location}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Product grid */}
            <div className="flex-1">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-5">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <p className="text-gray-600 mb-2 sm:mb-0">{filteredProducts.length} products found</p>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Sort by:</span>
                    <Select value={sortOption} onValueChange={setSortOption}>
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="recommended">Recommended</SelectItem>
                        <SelectItem value="price-asc">
                          <div className="flex items-center">
                            Price <ArrowUp className="ml-2 h-3 w-3" />
                          </div>
                        </SelectItem>
                        <SelectItem value="price-desc">
                          <div className="flex items-center">
                            Price <ArrowDown className="ml-2 h-3 w-3" />
                          </div>
                        </SelectItem>
                        <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                        <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              {filteredProducts.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                  <h3 className="text-xl font-semibold mb-2">No products found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
                  <Button onClick={() => {
                    setSearchTerm('');
                    setSelectedCategories([]);
                    setSelectedLocations([]);
                    setPriceRange([0, 150]);
                  }}>
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductSearch;
