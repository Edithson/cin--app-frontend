import React from 'react'

export default function SideBar() {
  return (
    <aside className="hidden lg:flex lg:flex-col w-64 bg-gray-900 text-gray-100 border-r border-gray-800">
        <div className="flex items-center justify-center h-16 bg-gray-950 border-b border-gray-800">
            <h1 className="text-xl font-bold text-red-500">🎬 CinéRéserv Admin</h1>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4">
            <a href="#" className="flex items-center px-6 py-3 text-gray-100 bg-red-600 border-l-4 border-red-500">
                <span className="mr-3">📊</span>
                <span className="font-medium">Dashboard</span>
            </a>
            <a href="#" className="flex items-center px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-gray-100 transition">
                <span className="mr-3">🎬</span>
                <span>Films</span>
            </a>
            <a href="#" className="flex items-center px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-gray-100 transition">
                <span className="mr-3">🎭</span>
                <span>Séances</span>
            </a>
            <a href="#" className="flex items-center px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-gray-100 transition">
                <span className="mr-3">🏛️</span>
                <span>Salles</span>
            </a>
            <a href="#" className="flex items-center px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-gray-100 transition">
                <span className="mr-3">🎫</span>
                <span>Réservations</span>
            </a>
            <a href="#" className="flex items-center px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-gray-100 transition">
                <span className="mr-3">👥</span>
                <span>Utilisateurs</span>
            </a>
            {/* <a href="#" className="flex items-center px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-gray-100 transition">
                <span className="mr-3">⭐</span>
                <span>Notes & Avis</span>
            </a>
            <a href="#" className="flex items-center px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-gray-100 transition">
                <span className="mr-3">📧</span>
                <span>Emails</span>
            </a>
            <a href="#" className="flex items-center px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-gray-100 transition">
                <span className="mr-3">⚙️</span>
                <span>Paramètres</span>
            </a> */}
        </nav>
        
        <div className="p-4 border-t border-gray-800">
            <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">
                    A
                </div>
                <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-100">Admin User</p>
                    <p className="text-xs text-gray-500">admin@cinereserv.com</p>
                </div>
            </div>
            <button className="w-full mt-4 bg-gray-800 hover:bg-gray-700 text-gray-300 py-2 rounded-lg text-sm transition">
                Déconnexion
            </button>
        </div>
    </aside>
  )
}
