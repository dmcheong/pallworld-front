import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FilterSidebar = ({ onFilterChange, category, availableColorsFromSearch = [], availableSizesFromSearch = [] }) => {
  const [filters, setFilters] = useState({
    color: '',
    size: '',
    minPrice: 0,
    maxPrice: 100,
  });
  const [availableSizes, setAvailableSizes] = useState([]);
  const [availableColors, setAvailableColors] = useState([]);

  useEffect(() => {
    if (!availableColorsFromSearch.length && !availableSizesFromSearch.length && category) {
      const fetchSizes = async () => {
        try {
          const response = await axios.get(`http://localhost:${process.env.REACT_APP_PORT_BDD_API}/api/products/sizes`, {
            params: { category },
          });
          setAvailableSizes(response.data.sizes);
        } catch (error) {
          console.error('Erreur lors de la récupération des tailles disponibles:', error);
        }
      };

      const fetchColors = async () => {
        try {
          const response = await axios.get(`http://localhost:${process.env.REACT_APP_PORT_BDD_API}/api/products/colors`, {
            params: { category },
          });
          setAvailableColors(response.data.colors);
        } catch (error) {
          console.error('Erreur lors de la récupération des couleurs disponibles:', error);
        }
      };

      fetchSizes();
      fetchColors();
    } else {
      setAvailableColors(availableColorsFromSearch);
      setAvailableSizes(availableSizesFromSearch);
    }
  }, [category, availableColorsFromSearch, availableSizesFromSearch]);

  const handleColorClick = (color) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      color: prevFilters.color === color ? '' : color,
    }));
  };

  const handleChange = (name, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleSubmit = () => {
    onFilterChange(filters);
  };

  const handleReset = () => {
    const resetFilters = {
      color: '',
      size: '',
      minPrice: 0,
      maxPrice: 100,
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg sticky top-4">
      <h3 className="text-xl font-semibold mb-4">Filtres</h3>

      {/* Colors */}
      <div className="mb-6">
        <h4 className="font-semibold mb-2">Couleurs disponibles :</h4>
        <div className="grid grid-cols-2 gap-2">
          {availableColors.length > 0 ? (
            availableColors.map((color) => (
              <button
                key={color}
                onClick={() => handleColorClick(color)}
                className={`px-3 py-2 rounded-lg border ${
                  filters.color === color
                    ? 'bg-sky-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {color}
              </button>
            ))
          ) : (
            <p>Aucune couleur disponible</p>
          )}
        </div>
      </div>

      {/* Sizes */}
      <div className="mb-6">
        <label className="block mb-2 font-semibold">Taille</label>
        <select
          value={filters.size}
          onChange={(e) => handleChange('size', e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          <option value="">Toutes les tailles</option>
          {availableSizes.length > 0 ? (
            availableSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))
          ) : (
            <option disabled>Aucune taille disponible</option>
          )}
        </select>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <label className="block mb-2 font-semibold">Prix Min (€)</label>
        <input
          type="range"
          value={filters.minPrice}
          min="0"
          max="100"
          onChange={(e) => handleChange('minPrice', e.target.value)}
          className="w-full"
        />
        <span>{filters.minPrice}€</span>
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-semibold">Prix Max (€)</label>
        <input
          type="range"
          value={filters.maxPrice}
          min="0"
          max="100"
          onChange={(e) => handleChange('maxPrice', e.target.value)}
          className="w-full"
        />
        <span>{filters.maxPrice}€</span>
      </div>

      {/* Actions */}
      <div className="flex justify-between">
        <button onClick={handleReset} className="bg-gray-400 text-white px-4 py-2 rounded-md">
          Réinitialiser
        </button>
        <button onClick={handleSubmit} className="bg-sky-600 text-white px-4 py-2 rounded-md">
          Appliquer
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
