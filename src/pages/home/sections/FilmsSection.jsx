import React from 'react'

export default function FilmsSection() {
  return (
    <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold">Films à l'affiche</h3>
                <a href="#" className="text-red-500 hover:text-red-400 transition">Voir tout →</a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* <!-- Film Card 1 --> */}
                <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition cursor-pointer">
                    <div className="h-96 bg-gradient-to-br from-red-600 to-purple-600 flex items-center justify-center">
                        <span className="text-6xl">🎭</span>
                    </div>
                    <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-lg">Le Grand Mystère</h4>
                            <span className="flex items-center text-yellow-400">
                                ⭐ 4.5
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm mb-3">Action, Thriller • 2h 15min</p>
                        <button className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg font-semibold transition">Réserver</button>
                    </div>
                </div>

                {/* <!-- Film Card 2 --> */}
                <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition cursor-pointer">
                    <div className="h-96 bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                        <span className="text-6xl">🌌</span>
                    </div>
                    <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-lg">Voyage Cosmique</h4>
                            <span className="flex items-center text-yellow-400">
                                ⭐ 4.8
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm mb-3">Science-fiction • 2h 30min</p>
                        <button className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg font-semibold transition">Réserver</button>
                    </div>
                </div>

                {/* <!-- Film Card 3 --> */}
                <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition cursor-pointer">
                    <div className="h-96 bg-gradient-to-br from-pink-600 to-rose-600 flex items-center justify-center">
                        <span className="text-6xl">💕</span>
                    </div>
                    <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-lg">Amour Éternel</h4>
                            <span className="flex items-center text-yellow-400">
                                ⭐ 4.2
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm mb-3">Romance, Drame • 1h 50min</p>
                        <button className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg font-semibold transition">Réserver</button>
                    </div>
                </div>

                {/* <!-- Film Card 4 --> */}
                <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition cursor-pointer">
                    <div className="h-96 bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
                        <span className="text-6xl">🦖</span>
                    </div>
                    <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-lg">Aventure Préhistorique</h4>
                            <span className="flex items-center text-yellow-400">
                                ⭐ 4.6
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm mb-3">Aventure, Famille • 2h 05min</p>
                        <button className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg font-semibold transition">Réserver</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
