import React from 'react'

// Accepter les props 'isOpen' et 'onToggle' du parent
export default function NavBar({ isOpen, onToggle }) {
  return (
    <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
                
                {/* Logo et liens principaux (visibles sur md et plus) */}
                <div className="flex items-center space-x-8">
                    <h1 className="text-2xl font-bold text-red-500">🎬 CinéRéserv</h1>
                    
                    {/* Liens de navigation pour les grands écrans */}
                    <div className="hidden md:flex space-x-6">
                        <a href="#" className="text-gray-300 hover:text-white transition">Accueil</a>
                        <a href="#" className="text-gray-300 hover:text-white transition">Films</a>
                        <a href="#" className="text-gray-300 hover:text-white transition">Séances</a>
                    </div>
                </div>
                
                <div className="flex items-center space-x-4">
                    {/* Bouton de recherche (visible sur tous les écrans) */}
                    <button className="text-gray-300 hover:text-white transition">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                    
                    {/* Boutons de connexion/inscription (visibles sur md et plus) */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition">Connexion</button>
                        <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition">Inscription</button>
                    </div>

                    {/* Bouton Hamburger pour mobile (visible sous md) */}
                    <button 
                        className="md:hidden text-gray-300 hover:text-white transition focus:outline-none"
                        onClick={onToggle} // Utilise la prop pour basculer l'état
                        aria-label="Menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {/* Affiche l'icône X si ouvert, sinon l'icône Hamburger */}
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        
        {/* Menu mobile déroulant (affiché conditionnellement) */}
        <div 
            className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-800 border-t border-gray-700`}
        >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900">Accueil</a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition">Films</a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition">Séances</a>
                {/* Boutons pour mobile */}
                <div className="pt-4 border-t border-gray-700 flex flex-col space-y-2">
                    <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition text-white">Connexion</button>
                    <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition text-white">Inscription</button>
                </div>
            </div>
        </div>
    </nav>
  )
}