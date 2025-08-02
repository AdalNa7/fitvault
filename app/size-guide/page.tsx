import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Ruler, Info } from 'lucide-react';

export default function SizeGuidePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-black text-white mb-4">Size Guide</h1>
            <p className="text-zinc-400 text-lg">
              Find your perfect fit with Nike and Adidas replica sizing charts
            </p>
          </div>

          {/* How to Measure */}
          <div className="bg-zinc-900 rounded-lg p-6 mb-8 border border-zinc-800">
            <div className="flex items-center mb-4">
              <Ruler className="w-6 h-6 text-red-500 mr-3" />
              <h2 className="text-2xl font-bold text-white">How to Measure</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-white font-semibold mb-3">Chest</h3>
                <p className="text-zinc-400 text-sm">
                  Measure around the fullest part of your chest, keeping the tape horizontal.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3">Waist</h3>
                <p className="text-zinc-400 text-sm">
                  Measure around your natural waistline, keeping the tape comfortably loose.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3">Hips</h3>
                <p className="text-zinc-400 text-sm">
                  Measure around the fullest part of your hips, keeping the tape horizontal.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3">Length</h3>
                <p className="text-zinc-400 text-sm">
                  Measure from the top of your shoulder to your desired length.
                </p>
              </div>
            </div>
          </div>

          {/* Nike Size Chart */}
          <div className="bg-zinc-900 rounded-lg p-6 mb-8 border border-zinc-800">
            <h2 className="text-2xl font-bold text-white mb-6">Nike Size Chart</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-700">
                    <th className="text-left py-3 px-4 text-white font-semibold">Size</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Chest (inches)</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Waist (inches)</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Hips (inches)</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Length (inches)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4 text-white font-medium">XS</td>
                    <td className="py-3 px-4 text-zinc-400">32-34</td>
                    <td className="py-3 px-4 text-zinc-400">26-28</td>
                    <td className="py-3 px-4 text-zinc-400">34-36</td>
                    <td className="py-3 px-4 text-zinc-400">26-27</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4 text-white font-medium">S</td>
                    <td className="py-3 px-4 text-zinc-400">34-36</td>
                    <td className="py-3 px-4 text-zinc-400">28-30</td>
                    <td className="py-3 px-4 text-zinc-400">36-38</td>
                    <td className="py-3 px-4 text-zinc-400">27-28</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4 text-white font-medium">M</td>
                    <td className="py-3 px-4 text-zinc-400">36-38</td>
                    <td className="py-3 px-4 text-zinc-400">30-32</td>
                    <td className="py-3 px-4 text-zinc-400">38-40</td>
                    <td className="py-3 px-4 text-zinc-400">28-29</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4 text-white font-medium">L</td>
                    <td className="py-3 px-4 text-zinc-400">38-40</td>
                    <td className="py-3 px-4 text-zinc-400">32-34</td>
                    <td className="py-3 px-4 text-zinc-400">40-42</td>
                    <td className="py-3 px-4 text-zinc-400">29-30</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4 text-white font-medium">XL</td>
                    <td className="py-3 px-4 text-zinc-400">40-42</td>
                    <td className="py-3 px-4 text-zinc-400">34-36</td>
                    <td className="py-3 px-4 text-zinc-400">42-44</td>
                    <td className="py-3 px-4 text-zinc-400">30-31</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white font-medium">XXL</td>
                    <td className="py-3 px-4 text-zinc-400">42-44</td>
                    <td className="py-3 px-4 text-zinc-400">36-38</td>
                    <td className="py-3 px-4 text-zinc-400">44-46</td>
                    <td className="py-3 px-4 text-zinc-400">31-32</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Adidas Size Chart */}
          <div className="bg-zinc-900 rounded-lg p-6 mb-8 border border-zinc-800">
            <h2 className="text-2xl font-bold text-white mb-6">Adidas Size Chart</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-700">
                    <th className="text-left py-3 px-4 text-white font-semibold">Size</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Chest (inches)</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Waist (inches)</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Hips (inches)</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Length (inches)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4 text-white font-medium">XS</td>
                    <td className="py-3 px-4 text-zinc-400">32-34</td>
                    <td className="py-3 px-4 text-zinc-400">26-28</td>
                    <td className="py-3 px-4 text-zinc-400">34-36</td>
                    <td className="py-3 px-4 text-zinc-400">26-27</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4 text-white font-medium">S</td>
                    <td className="py-3 px-4 text-zinc-400">34-36</td>
                    <td className="py-3 px-4 text-zinc-400">28-30</td>
                    <td className="py-3 px-4 text-zinc-400">36-38</td>
                    <td className="py-3 px-4 text-zinc-400">27-28</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4 text-white font-medium">M</td>
                    <td className="py-3 px-4 text-zinc-400">36-38</td>
                    <td className="py-3 px-4 text-zinc-400">30-32</td>
                    <td className="py-3 px-4 text-zinc-400">38-40</td>
                    <td className="py-3 px-4 text-zinc-400">28-29</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4 text-white font-medium">L</td>
                    <td className="py-3 px-4 text-zinc-400">38-40</td>
                    <td className="py-3 px-4 text-zinc-400">32-34</td>
                    <td className="py-3 px-4 text-zinc-400">40-42</td>
                    <td className="py-3 px-4 text-zinc-400">29-30</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4 text-white font-medium">XL</td>
                    <td className="py-3 px-4 text-zinc-400">40-42</td>
                    <td className="py-3 px-4 text-zinc-400">34-36</td>
                    <td className="py-3 px-4 text-zinc-400">42-44</td>
                    <td className="py-3 px-4 text-zinc-400">30-31</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white font-medium">XXL</td>
                    <td className="py-3 px-4 text-zinc-400">42-44</td>
                    <td className="py-3 px-4 text-zinc-400">36-38</td>
                    <td className="py-3 px-4 text-zinc-400">44-46</td>
                    <td className="py-3 px-4 text-zinc-400">31-32</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Fit Guide */}
          <div className="bg-zinc-900 rounded-lg p-6 mb-8 border border-zinc-800">
            <h2 className="text-2xl font-bold text-white mb-6">Fit Guide</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-white font-semibold mb-2">Nike Fit</h3>
                <p className="text-zinc-400 text-sm">
                  Nike replicas follow the original Nike sizing and fit. Choose your usual Nike size for the best fit.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Adidas Fit</h3>
                <p className="text-zinc-400 text-sm">
                  Adidas replicas match the original Adidas sizing. Select your regular Adidas size for optimal fit.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Streetwear Style</h3>
                <p className="text-zinc-400 text-sm">
                  For an oversized, contemporary look, consider sizing up one size from your usual fit.
                </p>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
            <div className="flex items-center mb-4">
              <Info className="w-6 h-6 text-red-500 mr-3" />
              <h2 className="text-2xl font-bold text-white">Sizing Tips</h2>
            </div>
            <ul className="space-y-2 text-zinc-400">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                All measurements are in inches and match original Nike/Adidas sizing
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Choose your usual Nike or Adidas size for the best replica fit
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Our replicas use the same sizing as the original brands
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Contact our customer service if you need help finding your size
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 