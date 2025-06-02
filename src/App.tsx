import {Suspense,lazy} from "react"// Adjust the path as needed
import { Toaster } from "@/components/ui/toaster";
import Loader from "./components/Loader";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollAnimate } from "./components/ScrollAnimate";
import { CartProvider } from "@/contexts/CartContext";
const  LandingPage =lazy(()=>import("./pages/LandingPage"));
const AboutUs = lazy(()=>import("./pages/AboutUs"));
const Services = lazy(()=>import("./pages/Services"));
const Contact = lazy(()=>import("./pages/Contact"));
const LoginPage = lazy(()=> import("./pages/LoginPage"));
const FarmerSignup = lazy(()=>import("./pages/FarmerSignup"));
const BuyerSignup = lazy(()=>import( "./pages/BuyerSignup"));
const FarmerDashboard = lazy(()=>import( "./pages/FarmerDashboard"));
const BuyerDashboard = lazy(()=>import( "./pages/BuyerDashboard"));
const ProductSearch =lazy(()=>import(  "./pages/ProductSearch"));
const ProductListing = lazy(()=>import( "./pages/ProductListing"));
const OrderConfirmation = lazy(()=>import( "./pages/OrderConfirmation"));
const OrderTracking =lazy(()=>import(  "./pages/OrderTracking"));
const DeliveryCompletion = lazy(()=>import( "./pages/DeliveryCompletion"));
const  NotFound = lazy(()=>import( "./pages/NotFound"));


const queryClient = new QueryClient();

const App = () => (
 <Suspense fallback={<Loader />}>
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light">
      <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <ScrollAnimate>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup/farmer" element={<FarmerSignup />} />
            <Route path="/signup/buyer" element={<BuyerSignup />} />
            <Route path="/dashboard/farmer" element={<FarmerDashboard />} />
            <Route path="/dashboard/buyer" element={<BuyerDashboard />} />
            <Route path="/products/search" element={<ProductSearch />} />
            <Route path="/products/:id" element={<ProductListing />} />
            <Route path="/order/confirmation" element={<OrderConfirmation />} />
            <Route path="/order/tracking" element={<OrderTracking />} />
            <Route path="/delivery/completion" element={<DeliveryCompletion />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ScrollAnimate>
        </BrowserRouter>
      </TooltipProvider>
      </CartProvider>
    </ThemeProvider>
  </QueryClientProvider>
   </Suspense>
);
  

export default App;
