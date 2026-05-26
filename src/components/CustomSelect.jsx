import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

const CustomSelect = ({ options, placeholder, onChange, value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(listRef.current, 
        { opacity: 0, y: -10, scale: 0.95 },
        { opacity: 1, y: 5, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full">
      {/* Trigger */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-[#1a1425] border rounded-full px-8 py-4 flex items-center justify-between cursor-pointer transition-all duration-300 ${
          isOpen ? 'border-primary/50 ring-2 ring-primary/10' : 'border-white/5 hover:border-white/20'
        }`}
      >
        <span className={`text-sm tracking-wide ${value ? 'text-white' : 'text-gray-500'}`}>
          {(value && typeof value === 'object' ? (value.name || value.label) : value) || placeholder}
        </span>
        <svg 
          className={`w-3 h-3 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} 
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Options List */}
      {isOpen && (
        <div 
          ref={listRef}
          className="absolute z-[100] top-full left-0 w-full bg-[#1a1425] border border-white/10 rounded-3xl mt-2 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-3xl overflow-visible"
        >
          <div className="max-h-[250px] overflow-y-auto custom-scrollbar">
            {options && options.length > 0 ? (
              options.map((option, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                  className="px-8 py-3 text-sm text-gray-400 hover:text-white hover:bg-primary/10 transition-colors cursor-pointer border-l-2 border-transparent hover:border-primary"
                >
                  {option && typeof option === 'object' ? (option.name || option.label) : option}
                </div>
              ))
            ) : (
              <div className="px-8 py-4 text-xs text-gray-500 italic text-center">
                No options available
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
