
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import LoginPage from "./pages/LoginPage";
import FarmerSignup from "./pages/FarmerSignup";
import BuyerSignup from "./pages/BuyerSignup";
import FarmerDashboard from "./pages/FarmerDashboard";
import BuyerDashboard from "./pages/BuyerDashboard";
import ProductSearch from "./pages/ProductSearch";
import ProductListing from "./pages/ProductListing";
import OrderConfirmation from "./pages/OrderConfirmation";
import OrderTracking from "./pages/OrderTracking";
import DeliveryCompletion from "./pages/DeliveryCompletion";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
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
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
