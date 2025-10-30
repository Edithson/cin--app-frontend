import React from 'react';
import { Link } from 'react-router-dom';

export default function Bouton({ to, title, type, onClick }) {
  const getButtonClasses = () => {
    const baseClasses = "inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors";
    
    switch(type) {
      case 'annuler':
        return `${baseClasses} bg-gray-700 text-gray-100 hover:bg-gray-600 border border-gray-600`;
      case 'confirm':
        return `${baseClasses} bg-red-600 text-white hover:bg-red-700`;
      case 'primary':
        return `${baseClasses} bg-blue-600 text-white hover:bg-blue-700`;
      default:
        return `${baseClasses} bg-gray-600 text-white hover:bg-gray-700`;
    }
  };

  // Si c'est un lien
  if (to !== undefined && to !== '') {
    return (
      <Link to={to} className={getButtonClasses()}>
        {title}
      </Link>
    );
  }

  // Si c'est un bouton avec onClick
  return (
    <button type="button" onClick={onClick} className={getButtonClasses()}>
      {title}
    </button>
  );
}