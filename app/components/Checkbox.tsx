
"use client"

import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { IconContext } from 'react-icons';

interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  //className: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, checked = false, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <label className="inline-flex items-center space-x-2 cursor-pointer">
      <div
        className={`w-6 h-6 flex items-center justify-center border-2 border-gray-300 rounded p-1 ${
          isChecked ? 'bg-green border-blue' : 'bg-white'
        }`}
        onClick={handleCheckboxChange}
      >
        {isChecked && (
          <IconContext.Provider value={{ className: 'text-blue w-4 h-4' }}>
            <FaCheck />
          </IconContext.Provider>
        )}
      </div>
      <span className="text-gray-700">{label}</span>
    </label>
  );
};