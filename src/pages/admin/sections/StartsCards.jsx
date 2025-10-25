import React from 'react'

export default function StartsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6">
        {/* <!-- Card 1 --> */}
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 hover:border-gray-700 transition">
            <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🎫</span>
                </div>
                <span className="text-green-500 text-sm font-medium">+12%</span>
            </div>
            <h3 className="text-gray-400 text-sm font-medium mb-1">Réservations aujourd'hui</h3>
            <p className="text-2xl lg:text-3xl font-bold text-gray-100">247</p>
        </div>

        {/* <!-- Card 2 --> */}
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 hover:border-gray-700 transition">
            <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                </div>
                <span className="text-green-500 text-sm font-medium">+8%</span>
            </div>
            <h3 className="text-gray-400 text-sm font-medium mb-1">Revenus du jour</h3>
            <p className="text-2xl lg:text-3xl font-bold text-gray-100">12 450 €</p>
        </div>

        {/* <!-- Card 3 --> */}
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 hover:border-gray-700 transition">
            <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">👥</span>
                </div>
                <span className="text-green-500 text-sm font-medium">+15%</span>
            </div>
            <h3 className="text-gray-400 text-sm font-medium mb-1">Nouveaux utilisateurs</h3>
            <p className="text-2xl lg:text-3xl font-bold text-gray-100">89</p>
        </div>

        {/* <!-- Card 4 --> */}
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 hover:border-gray-700 transition">
            <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🎬</span>
                </div>
                <span className="text-gray-500 text-sm font-medium">--</span>
            </div>
            <h3 className="text-gray-400 text-sm font-medium mb-1">Films à l'affiche</h3>
            <p className="text-2xl lg:text-3xl font-bold text-gray-100">24</p>
        </div>
    </div>
  )
}
