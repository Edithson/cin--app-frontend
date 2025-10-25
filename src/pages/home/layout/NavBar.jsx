import React from 'react'

export default function NavBar() {
  return (
    <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center space-x-8">
                    <h1 className="text-2xl font-bold text-red-500">🎬 CinéRéserv</h1>
                    <div className="hidden md:flex space-x-6">
                        <a href="#" className="text-gray-300 hover:text-white transition">Accueil</a>
                        <a href="#" className="text-gray-300 hover:text-white transition">Films</a>
                        <a href="#" className="text-gray-300 hover:text-white transition">Séances</a>
                        <a href="#" className="text-gray-300 hover:text-white transition">À propos</a>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="text-gray-300 hover:text-white transition">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition">Connexion</button>
                    <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition">Inscription</button>
                </div>
            </div>
        </div>
    </nav>
  )
}
