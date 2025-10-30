import React from 'react'

// Accepter une prop 'onMenuClick'
export default function Header({ onMenuClick }) {
  return (
    <section className="bg-gray-900 border-b border-gray-800 sticky top-0 z-30">
        <div className="flex items-center justify-between px-4 lg:px-6 h-16">
            {/* Utiliser 'onMenuClick' ici */}
            <button 
                className="lg:hidden text-gray-400 hover:text-gray-100"
                onClick={onMenuClick} // Appel de la fonction pour ouvrir/fermer
                aria-label="Ouvrir le menu"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            
            <div className="flex-1 max-w-xl mx-4">
                <div className="relative">
                    <input type="text" placeholder="Rechercher..." className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 rounded-lg focus:outline-none focus:border-red-500" />
                    <svg className="w-5 h-5 text-gray-500 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
            </div>
            
            <div className="flex items-center space-x-4">
                <button className="relative text-gray-400 hover:text-gray-100">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                    </svg>
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
            </div>
        </div>
    </section>
  )
}