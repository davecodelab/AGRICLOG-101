
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { ScrollAnimate } from "../components/ScrollAnimate";// Adjust the path as needed
 // Adjust the path as needed
const AboutUs = () => {
  // This component renders the About Us page with a mission statement, team introduction, and company story.
  return (
      <ScrollAnimate delay="delay-100">
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <div className="bg-farm-green py-16">
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           
            <h1 className="text-4xl font-bold text-white mb-4">About AGRODEVS</h1>
            <p className="text-green-100 max-w-3xl mx-auto text-lg">
              We're on a mission to revolutionize the agricultural supply chain and create a more sustainable future for farming communities.
            </p> 
          </div>
        </div>
       

        
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <ScrollAnimate delay="delay-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Agrodevs was born from a simple observation: farmers were losing a significant portion of their harvest because they couldn't find buyers quickly enough, while food vendors in cities struggled to source consistent, quality produce.
                </p>
                <p className="text-gray-600 mb-4">
                  We saw this disconnect as an opportunity to create a platform that would connect these two groups directly, cutting out middlemen and creating value for both sides of the market.
                </p>
                <p className="text-gray-600">
                  What started as a small initiative in 2023 has now grown into a thriving marketplace that helps farmers increase their income while providing businesses with better access to fresh, local produce.
                </p>
                  </ScrollAnimate>
              </div>
              <ScrollAnimate delay="delay-200">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1470&auto=format&fit=crop" 
                  alt="Farmers in a field" 
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              </ScrollAnimate>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                To create a sustainable agricultural ecosystem that benefits everyone involved, from farm to table.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-farm-green mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Empower Farmers</h3>
                <p className="text-gray-600">
                  We help farmers maximize their income by connecting them directly to buyers, providing market insights, and reducing post-harvest losses.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-farm-green mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Support Local Economy</h3>
                <p className="text-gray-600">
                  By facilitating local transactions and using existing transport networks, we keep money within communities and reduce food miles.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-farm-green mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Reduce Food Waste</h3>
                <p className="text-gray-600">
                  Our platform helps reduce food waste by creating efficient supply chains and better matching supply with demand.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                A passionate group of individuals committed to transforming agriculture through technology.
              </p>
            </div>
            <ScrollAnimate delay="delay-200">
            <div className="grid md:grid-cols-4 gap-4">

              <div className="text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="/choco.jpg" 
                    alt="Team member" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <ScrollAnimate delay="delay-300">
                <h3 className="text-xl font-semibold">Owusu Badu</h3>
                <p className="text-gray-600">CEO & Co-founder</p>
                </ScrollAnimate>
              </div>
              
              <div className="text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="/dave.jpg" 
                    alt="Team member" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <ScrollAnimate delay="delay-300">
                <h3 className="text-xl font-semibold">Agyemang David</h3>
                <p className="text-gray-600">COO & Co-founder</p>
                </ScrollAnimate>
              </div>
              
              <div className="text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="/adom.jpg" 
                    alt="Team member" 
                    className="w-full h-full object-cover"
                  />
                </div>
               <ScrollAnimate delay="delay-300">
                <h3 className="text-xl font-semibold">Adom Fosu</h3>
                <p className="text-gray-600">CTO</p>
                 </ScrollAnimate>
              </div>
               <div className="text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="/justice.jpg" 
                    alt="Team member" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <ScrollAnimate delay="delay-300">
                <h3 className="text-xl font-semibold">Justice Akoto</h3>
                <p className="text-gray-600">Sales and Marketing</p>
                </ScrollAnimate>
              </div>
              
            </div>
            </ScrollAnimate>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  </ScrollAnimate>
  );
};

export default AboutUs;
