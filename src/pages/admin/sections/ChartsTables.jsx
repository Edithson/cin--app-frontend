import React from 'react'

export default function ChartsTables() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* <!-- Séances aujourd'hui --> */}
        <div className="lg:col-span-2 bg-gray-900 rounded-lg border border-gray-800">
            <div className="p-6 border-b border-gray-800">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-100">Séances d'aujourd'hui</h3>
                    <select className="text-sm bg-gray-800 border border-gray-700 text-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:border-red-500">
                        <option>Toutes les salles</option>
                        <option>Salle 1</option>
                        <option>Salle 2</option>
                        <option>Salle 3</option>
                    </select>
                </div>
            </div>
            <div className="p-6">
                <div className="space-y-4">
                    {/* <!-- Séance 1 --> */}
                    <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-800 hover:border-gray-700 transition">
                        <div className="flex items-center space-x-4">
                            <div className="w-16 h-20 bg-gradient-to-br from-red-600 to-purple-600 rounded flex items-center justify-center flex-shrink-0">
                                <span className="text-2xl">🎭</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-100">Le Grand Mystère</h4>
                                <p className="text-sm text-gray-400">Salle 1 • 14:30 - 16:45</p>
                                <div className="flex items-center mt-1 space-x-2">
                                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded border border-green-500/30">En cours</span>
                                    <span className="text-xs text-gray-500">156/200 places</span>
                                </div>
                            </div>
                        </div>
                        <button className="text-red-500 hover:text-red-400 text-sm font-medium">Détails →</button>
                    </div>

                    {/* <!-- Séance 2 --> */}
                    <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-800 hover:border-gray-700 transition">
                        <div className="flex items-center space-x-4">
                            <div className="w-16 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded flex items-center justify-center flex-shrink-0">
                                <span className="text-2xl">🌌</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-100">Voyage Cosmique</h4>
                                <p className="text-sm text-gray-400">Salle 2 • 17:00 - 19:30</p>
                                <div className="flex items-center mt-1 space-x-2">
                                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded border border-blue-500/30">À venir</span>
                                    <span className="text-xs text-gray-500">189/250 places</span>
                                </div>
                            </div>
                        </div>
                        <button className="text-red-500 hover:text-red-400 text-sm font-medium">Détails →</button>
                    </div>

                    {/* <!-- Séance 3 --> */}
                    <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-800 hover:border-gray-700 transition">
                        <div className="flex items-center space-x-4">
                            <div className="w-16 h-20 bg-gradient-to-br from-pink-600 to-rose-600 rounded flex items-center justify-center flex-shrink-0">
                                <span className="text-2xl">💕</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-100">Amour Éternel</h4>
                                <p className="text-sm text-gray-400">Salle 3 • 20:00 - 21:50</p>
                                <div className="flex items-center mt-1 space-x-2">
                                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded border border-blue-500/30">À venir</span>
                                    <span className="text-xs text-gray-500">67/150 places</span>
                                </div>
                            </div>
                        </div>
                        <button className="text-red-500 hover:text-red-400 text-sm font-medium">Détails →</button>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Quick Actions --> */}
        <div className="bg-gray-900 rounded-lg border border-gray-800">
            <div className="p-6 border-b border-gray-800">
                <h3 className="text-lg font-bold text-gray-100">Actions rapides</h3>
            </div>
            <div className="p-6">
                <div className="space-y-3">
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition flex items-center justify-center">
                        <span className="mr-2">➕</span> Ajouter un film
                    </button>
                    <button className="w-full bg-gray-800 hover:bg-gray-700 text-gray-100 py-3 rounded-lg font-medium transition flex items-center justify-center border border-gray-700">
                        <span className="mr-2">🎭</span> Créer une séance
                    </button>
                    <button className="w-full bg-gray-800 hover:bg-gray-700 text-gray-100 py-3 rounded-lg font-medium transition flex items-center justify-center border border-gray-700">
                        <span className="mr-2">🏛️</span> Gérer les salles
                    </button>
                    <button className="w-full bg-gray-800 hover:bg-gray-700 text-gray-100 py-3 rounded-lg font-medium transition flex items-center justify-center border border-gray-700">
                        <span className="mr-2">📧</span> Envoyer un email
                    </button>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-800">
                    <h4 className="text-sm font-bold text-gray-100 mb-3">Alertes système</h4>
                    <div className="space-y-3">
                        <div className="flex items-start space-x-2 text-sm p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                            <span className="text-yellow-500">⚠️</span>
                            <div>
                                <p className="text-gray-100 font-medium">Conflit détecté</p>
                                <p className="text-gray-400 text-xs">Salle 2 - Chevauchement horaire</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-2 text-sm p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                            <span className="text-red-500">🔴</span>
                            <div>
                                <p className="text-gray-100 font-medium">Capacité atteinte</p>
                                <p className="text-gray-400 text-xs">Voyage Cosmique - 17h00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
