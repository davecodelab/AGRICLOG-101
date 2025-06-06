import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { X, Upload } from 'lucide-react';
import axios from "axios";

interface AddProductFormProps {
  onClose: () => void;
  onSubmit: (productData: any) => void;
}

const AddProductForm = ({ onClose, onSubmit }: AddProductFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    quantity: '',
    unit: 'kg',
    description: '',
    image: null as File | null,
  });

  const categories = ['Vegetables', 'Fruits', 'Grains', 'Dairy', 'Spices'];
  const units = ['kg', 'g', 'pieces', 'bunches', 'liters'];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, imageFile: file }));
    }
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.category || !formData.price || !formData.quantity) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Create a mock image URL for demo purposes
    const imageUrl = formData.image
      // ? URL.createObjectURL(formData.imageFile)
      // : 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1374&auto=format&fit=crop';

    const productData = {
      name: formData.name,
      category: formData.category,
      price: parseFloat(formData.price),
      unit: formData.unit,
      quantity: parseInt(formData.quantity),
      status: 'Available',
      description: formData.description,
      image: formData.image,
    };
    // onSubmit(productData);

    const form = new FormData();
    form.append('name', formData.name);
    form.append('category', formData.category);
    // @ts-expect-error
    form.append('price', parseInt(formData.price));
    form.append('quantity', formData.quantity);
    form.append('unit', formData.unit);
    form.append('description', formData.description);
    form.append('image', imageUrl);
    form.append('status' , "Available")

    onSubmit(form)

    try{
      const URI = import.meta.env.VITE_BACKEND_URI;
      if(!URI){
        toast({
          title: "Error",
          description: "Backend URI is not defined.",
          variant: "destructive",
        });
        return;
      }
      const response = await axios.post(`${URI}/create/product`,form,{
        withCredentials: true
      })
      //
      console.log(response.data)
      toast({
        title: "Success",
        description: "Product added successfully!",
      });
      onClose();
      // setProductData(prev => [...prev, newProduct]);
    }catch (e) {
      console.log(e)
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Add New Product</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Product Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="e.g., Fresh Tomatoes"
                  required
                />
              </div>

              <div>
                <Label htmlFor="category">Category *</Label>
                <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="price">Price per Unit (GHS) *</Label>
                <Input
                  id="price"
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) => handleInputChange('price', e.target.value)}
                  placeholder="40.00"
                  required
                />
              </div>

              <div>
                <Label htmlFor="unit">Unit</Label>
                <Select value={formData.unit} onValueChange={(value) => handleInputChange('unit', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {units.map(unit => (
                      <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="quantity">Available Quantity *</Label>
                <Input
                  id="quantity"
                  type="number"
                  min="1"
                  value={formData.quantity}
                  onChange={(e) => handleInputChange('quantity', e.target.value)}
                  placeholder="100"
                  required
                />
              </div>

              <div>
                <Label htmlFor="image">Product Image</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById('image')?.click()}
                    className="flex items-center space-x-2"
                  >
                    <Upload className="h-4 w-4" />
                    <span>Upload Image</span>
                  </Button>
                  {formData.image && (
                    <span className="text-sm text-gray-600">{formData.image.name}</span>
                  )}
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="description">Description (Optional)</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Add any additional details about your product..."
                rows={3}
              />
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" className="bg-farm-green hover:bg-farm-lightGreen">
                Add Product
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddProductForm;