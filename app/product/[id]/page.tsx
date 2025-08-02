import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ArrowLeft, ShoppingCart, Heart, Star } from 'lucide-react';
import Link from 'next/link';

interface ProductPageProps {
  params: {
    id: string;
  };
}

// Generate static params for build
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: 'premium-hoodie' },
    { id: 'urban-tshirt' },
    { id: 'streetwear-jacket' },
    { id: 'designer-pants' },
    { id: 'limited-edition' }
  ];
}

export default function ProductPage({ params }: ProductPageProps) {
  // Default values for server-side rendering
  const selectedSize = 'M';
  const quantity = 1;

  // Mock product data - in a real app this would come from an API
  const product = {
    id: params.id,
    name: params.id === '1' ? 'Nike Tech Fleece Replica' :
          params.id === '2' ? 'Adidas Tiro Tracksuit' :
          params.id === '3' ? 'Nike Sportswear Set' :
          params.id === '4' ? 'Adidas Originals Tracksuit' :
          params.id === '5' ? 'Nike ACG Collection' :
          params.id === '6' ? 'Adidas Y-3 Style' :
          "Premium Streetwear Hoodie",
    price: params.id === '1' ? 35.99 :
           params.id === '2' ? 28.99 :
           params.id === '3' ? 42.99 :
           params.id === '4' ? 32.99 :
           params.id === '5' ? 48.99 :
           params.id === '6' ? 55.99 :
           89.99,
    originalPrice: params.id === '1' ? 120 :
                   params.id === '2' ? 90 :
                   params.id === '3' ? 150 :
                   params.id === '4' ? 110 :
                   params.id === '5' ? 180 :
                   params.id === '6' ? 300 :
                   129.99,
    description: "Premium quality streetwear with unique design. Made from high-quality materials with reinforced stitching for durability.",
    images: [
      params.id === '1' ? "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=800&fit=crop" :
      params.id === '2' ? "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop" :
      params.id === '3' ? "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=800&fit=crop&crop=center" :
      params.id === '4' ? "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop&crop=center" :
      params.id === '5' ? "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=800&fit=crop&crop=top" :
      params.id === '6' ? "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop&crop=top" :
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=800&fit=crop&crop=top"
    ],
    sizes: [
      { size: 'XS', available: false },
      { size: 'S', available: true },
      { size: 'M', available: true },
      { size: 'L', available: true },
      { size: 'XL', available: false },
      { size: 'XXL', available: false }
    ],
    colors: ['Black', 'White', 'Red'],
    rating: 4.8,
    reviews: 124,
    inStock: true
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/shop" className="flex items-center text-zinc-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Shop
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-zinc-900 rounded-2xl overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-square bg-zinc-900 rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`${product.name} ${index + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-black text-white mb-4">{product.name}</h1>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="text-white ml-1">{product.rating}</span>
                    <span className="text-zinc-400 ml-2">({product.reviews} reviews)</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    product.inStock 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-3xl font-black text-white">${product.price}</span>
                  <span className="text-xl text-zinc-400 line-through">${product.originalPrice}</span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                </div>
                <p className="text-zinc-300 text-lg leading-relaxed">{product.description}</p>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-white font-semibold mb-4">Select Size</h3>
                <div className="grid grid-cols-6 gap-3">
                  {product.sizes.map((sizeData) => (
                    <button
                      key={sizeData.size}
                      disabled={!sizeData.available}
                      className={`py-3 px-4 rounded-lg border-2 font-medium transition-all ${
                        !sizeData.available
                          ? 'border-zinc-600 bg-zinc-800 text-zinc-500 cursor-not-allowed line-through'
                          : selectedSize === sizeData.size
                          ? 'border-red-500 bg-red-500/10 text-red-500'
                          : 'border-zinc-700 text-zinc-300 hover:border-zinc-600 hover:text-white'
                      }`}
                    >
                      {sizeData.size}
                    </button>
                  ))}
                </div>
                <p className="text-zinc-400 text-sm mt-2">Available sizes: S, M, L</p>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="text-white font-semibold mb-4">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <button
                    className="w-10 h-10 rounded-lg border border-zinc-700 text-zinc-300 hover:border-zinc-600 hover:text-white transition-colors"
                  >
                    -
                  </button>
                  <span className="text-white font-semibold w-16 text-center">{quantity}</span>
                  <button
                    className="w-10 h-10 rounded-lg border border-zinc-700 text-zinc-300 hover:border-zinc-600 hover:text-white transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/25 flex items-center justify-center space-x-2">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart - ${(product.price * quantity).toFixed(2)}</span>
                </button>
                <button className="w-full border border-zinc-700 text-zinc-300 hover:border-zinc-600 hover:text-white py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Add to Wishlist</span>
                </button>
              </div>

              {/* Product Details */}
              <div className="border-t border-zinc-800 pt-8">
                <h3 className="text-white font-semibold mb-4">Product Details</h3>
                <div className="space-y-3 text-zinc-300">
                  <div className="flex justify-between">
                    <span>Material:</span>
                    <span>100% Cotton</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Care:</span>
                    <span>Machine wash cold</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Origin:</span>
                    <span>Made in USA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 