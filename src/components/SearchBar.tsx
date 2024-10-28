import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { foods } from '../data/foods';

const SearchBar: React.FC = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const navigate = useNavigate();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getSuggestions = (inputValue: string) => {
    const inputValueLower = inputValue.trim().toLowerCase();
    return foods
      .filter(food => food.name.toLowerCase().includes(inputValueLower))
      .map(food => food.name);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    setSuggestions(getSuggestions(newValue));
    setIsOpen(true);
    setHighlightedIndex(-1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const food = foods.find(f => f.name.toLowerCase() === value.toLowerCase());
    if (food) {
      navigate(`/food/${food.slug}`);
      setIsOpen(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setValue(suggestion);
    const food = foods.find(f => f.name === suggestion);
    if (food) {
      navigate(`/food/${food.slug}`);
    }
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0) {
          handleSuggestionClick(suggestions[highlightedIndex]);
        } else {
          handleSubmit(e);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
    }
  };

  return (
    <div ref={wrapperRef} className="w-full max-w-xl relative">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Wyszukaj jedzenie..."
            className="w-full px-4 py-3 rounded-full border-2 border-gray-200 focus:border-orange-500 focus:outline-none pr-12"
            role="combobox"
            aria-expanded={isOpen}
            aria-autocomplete="list"
            aria-controls="search-suggestions"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-colors"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>
      </form>

      {isOpen && suggestions.length > 0 && (
        <ul
          id="search-suggestions"
          className="absolute w-full bg-white mt-1 rounded-lg shadow-lg z-10 max-h-60 overflow-auto"
          role="listbox"
        >
          {suggestions.map((suggestion, index) => (
            <li
              key={suggestion}
              role="option"
              aria-selected={index === highlightedIndex}
              className={`px-4 py-2 cursor-pointer transition-colors ${
                index === highlightedIndex ? 'bg-orange-100' : 'hover:bg-gray-100'
              }`}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;