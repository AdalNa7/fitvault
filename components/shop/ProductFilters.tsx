'use client';

interface FilterProps {
  filters: {
    size: string;
    brand: string;
    priceRange: number[];
    sortBy: string;
  };
  setFilters: (filters: any) => void;
}

export function ProductFilters({ filters, setFilters }: FilterProps) {
  const sizes = ['Medium', 'Large'];
  const brands = ['FitVault', 'Nike-Inspired', 'Adidas-Inspired', 'Prada-Inspired'];
  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'popular', label: 'Most Popular' }
  ];

  return (
    <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
      <h3 className="text-xl font-bold text-white mb-6">Filters</h3>

      {/* Size Filter */}
      <div className="mb-6">
        <h4 className="text-white font-semibold mb-3">Size</h4>
        <div className="space-y-2">
          {sizes.map(size => (
            <label key={size} className="flex items-center">
              <input
                type="radio"
                name="size"
                value={size}
                checked={filters.size === size}
                onChange={(e) => setFilters({ ...filters, size: e.target.value })}
                className="text-red-500 focus:ring-red-500 bg-zinc-800 border-zinc-600"
              />
              <span className="ml-2 text-zinc-300">{size}</span>
            </label>
          ))}
        </div>
        {filters.size && (
          <button
            onClick={() => setFilters({ ...filters, size: '' })}
            className="text-red-500 text-sm mt-2 hover:underline"
          >
            Clear Size
          </button>
        )}
      </div>

      {/* Brand Filter */}
      <div className="mb-6">
        <h4 className="text-white font-semibold mb-3">Brand Style</h4>
        <div className="space-y-2">
          {brands.map(brand => (
            <label key={brand} className="flex items-center">
              <input
                type="radio"
                name="brand"
                value={brand}
                checked={filters.brand === brand}
                onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
                className="text-red-500 focus:ring-red-500 bg-zinc-800 border-zinc-600"
              />
              <span className="ml-2 text-zinc-300">{brand}</span>
            </label>
          ))}
        </div>
        {filters.brand && (
          <button
            onClick={() => setFilters({ ...filters, brand: '' })}
            className="text-red-500 text-sm mt-2 hover:underline"
          >
            Clear Brand
          </button>
        )}
      </div>

      {/* Sort By */}
      <div className="mb-6">
        <h4 className="text-white font-semibold mb-3">Sort By</h4>
        <select
          value={filters.sortBy}
          onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
          className="w-full bg-zinc-800 border border-zinc-600 text-white rounded px-3 py-2 focus:outline-none focus:border-red-500"
        >
          {sortOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Clear All Filters */}
      <button
        onClick={() => setFilters({ size: '', brand: '', priceRange: [0, 500], sortBy: 'newest' })}
        className="w-full bg-red-600 hover:bg-red-500 text-white py-2 rounded font-semibold transition-colors"
      >
        Clear All Filters
      </button>
    </div>
  );
}