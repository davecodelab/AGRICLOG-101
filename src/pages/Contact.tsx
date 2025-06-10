
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ScrollAnimate } from "../components/ScrollAnimate";
import axios from "axios";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const URI = import.meta.env.VITE_BACKEND_URL;
    if(!URL)return
    const response = await axios.post(`${URI}/send/email` ,formData , {
      withCredentials: true,
    })

    console.log(response.data)
    // In a real app, this would send the form data to an API
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1000);
  };

  return (
         <ScrollAnimate>
    <div className="min-h-screen flex flex-col">
      <NavBar />
     
      <main className="flex-grow">
        
        <div className="bg-farm-green py-16">
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <ScrollAnimate>
            <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-green-100 max-w-2xl mx-auto text-lg">
              Have questions or need assistance? We're here to help! Reach out to our team using the form below.
            </p>
            </ScrollAnimate>
          </div>
        </div>
     

        
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
            <ScrollAnimate delay="delay-200">
              <div className="md:col-span-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-farm-green">
                        <MapPin className="w-5 h-5" />
                      </div>
                    </div>
                   
                   
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1">Office Location</h3>
                      <p className="text-gray-600">
                        AGRODEVS Headquarters<br />
                        Splendor Hostel- KNUST<br />
                        Ayeduase-Newsite, Kumasi
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-farm-green">
                        <Phone className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1">Phone Number</h3>
                      <p className="text-gray-600">
                        General Inquiries: +233 559441309<br />
                        Support: +233 551982938
                      </p>
                    </div>
                  </div>
                  
      
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-farm-green">
                        <Mail className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1">Email Address</h3>
                      <p className="text-gray-600">
                        info@agrodevs.com<br />
                        support@agrodevs.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-farm-green">
                        <Clock className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </ScrollAnimate>
             
              
              <div className="md:col-span-2">
                <ScrollAnimate delay="delay-400">
                <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                        <Input 
                          id="name" 
                          name="name" 
                          value={formData.name} 
                          onChange={handleChange} 
                          placeholder="Your Name" 
                          required 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          value={formData.email} 
                          onChange={handleChange} 
                          placeholder="youremail@email.com" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          value={formData.phone} 
                          onChange={handleChange} 
                          placeholder="+233 XXX XXX XXX" 
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                        <Input 
                          id="subject" 
                          name="subject" 
                          value={formData.subject} 
                          onChange={handleChange} 
                          placeholder="How can we help you?" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">Your Message</label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        placeholder="Please provide details about your inquiry..." 
                        rows={6} 
                        required 
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-farm-green hover:bg-farm-lightGreen text-white py-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>
                </ScrollAnimate>
              </div>
            </div>
          </div>
        </section>
        

        <ScrollAnimate delay="delay-300">
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Find Us</h2>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.752986419096!2d-1.5600993269895844!3d6.6774950933176624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb95041f66e059%3A0xc650b5412f18495b!2sSplendor%20Hostel!5e0!3m2!1sen!2sgh!4v1748078811752!5m2!1sen!2sgh" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
        </ScrollAnimate>

      </main>
      
      <Footer />
    </div>
    </ScrollAnimate>
  );
};

export default Contact;
