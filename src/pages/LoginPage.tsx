
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ScrollAnimate } from "../components/ScrollAnimate";

const LoginPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<'farmer' | 'buyer'>('farmer');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // In a real app, this would be an API call to authenticate
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login Successful",
        description: `Welcome back! You are logged in as a ${userType}.`
      });
      
      // Redirect based on user type
      navigate(userType === 'farmer' ? '/dashboard/farmer' : '/dashboard/buyer');
    }, 1000);
  };

  return (
      <ScrollAnimate>
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-12">
        <div className="w-full max-w-md px-4">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-farm-green">Sign In to Farm-to-Market</CardTitle>
            </CardHeader>
            
            <CardContent>
              <Tabs defaultValue="farmer" onValueChange={(value) => setUserType(value as 'farmer' | 'buyer')}>
                <TabsList className="grid grid-cols-2 mb-6">
                  <TabsTrigger value="farmer">Farmer</TabsTrigger>
                  <TabsTrigger value="buyer">Buyer</TabsTrigger>
                </TabsList>
                
                <TabsContent value="farmer">
                  <form onSubmit={handleLogin}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="farmer-email">Email</Label>
                        <Input 
                          id="farmer-email"
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="farmer-password">Password</Label>
                          <Link to="#" className="text-xs text-farm-green hover:underline">
                            Forgot password?
                          </Link>
                        </div>
                        <Input 
                          id="farmer-password"
                          type="password"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <Button 
                        type="submit"
                        className="w-full bg-farm-green hover:bg-farm-lightGreen"
                        disabled={isLoading}
                      >
                        {isLoading ? "Signing in..." : "Sign In as Farmer"}
                      </Button>
                    </div>
                  </form>
                </TabsContent>
                
                <TabsContent value="buyer">
                  <form onSubmit={handleLogin}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="buyer-email">Email</Label>
                        <Input 
                          id="buyer-email"
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="buyer-password">Password</Label>
                          <Link to="#" className="text-xs text-farm-green hover:underline">
                            Forgot password?
                          </Link>
                        </div>
                        <Input 
                          id="buyer-password"
                          type="password"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <Button 
                        type="submit"
                        className="w-full bg-farm-green hover:bg-farm-lightGreen"
                        disabled={isLoading}
                      >
                        {isLoading ? "Signing in..." : "Sign In as Buyer"}
                      </Button>
                    </div>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
            
            <CardFooter>
              <div className="w-full text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link 
                    to={userType === 'farmer' ? '/signup/farmer' : '/signup/buyer'} 
                    className="text-farm-green hover:underline"
                  >
                    Sign up now
                  </Link>
                </p>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
    </ScrollAnimate>
  );
};

export default LoginPage;
