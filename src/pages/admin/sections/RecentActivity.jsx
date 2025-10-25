import React from 'react'

export default function RecentActivity() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* <!-- Activité récente --> */}
        <div className="bg-gray-900 rounded-lg border border-gray-800">
            <div className="p-6 border-b border-gray-800">
                <h3 className="text-lg font-bold text-gray-100">Activité récente</h3>
            </div>
            <div className="p-6">
                <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 border border-green-500/30">
                            <span className="text-sm text-green-400">✓</span>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-gray-100"><strong>Nouvelle réservation</strong></p>
                            <p className="text-xs text-gray-400">Jean Dupont - Le Grand Mystère - 2 places</p>
                            <p className="text-xs text-gray-500 mt-1">Il y a 5 minutes</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 border border-blue-500/30">
                            <span className="text-sm text-blue-400">👤</span>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-gray-100"><strong>Nouvel utilisateur</strong></p>
                            <p className="text-xs text-gray-400">marie.martin@email.com</p>
                            <p className="text-xs text-gray-500 mt-1">Il y a 15 minutes</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 border border-yellow-500/30">
                            <span className="text-sm text-yellow-400">⭐</span>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-gray-100"><strong>Nouvel avis</strong></p>
                            <p className="text-xs text-gray-400">Voyage Cosmique - 5/5 étoiles</p>
                            <p className="text-xs text-gray-500 mt-1">Il y a 32 minutes</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 border border-red-500/30">
                            <span className="text-sm text-red-400">✕</span>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-gray-100"><strong>Annulation</strong></p>
                            <p className="text-xs text-gray-400">Pierre Blanc - Amour Éternel</p>
                            <p className="text-xs text-gray-500 mt-1">Il y a 1 heure</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Top Films --> */}
        <div className="bg-gray-900 rounded-lg border border-gray-800">
            <div className="p-6 border-b border-gray-800">
                <h3 className="text-lg font-bold text-gray-100">Films les plus populaires</h3>
            </div>
            <div className="p-6">
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <span className="text-2xl font-bold text-red-500">1</span>
                            <div>
                                <p className="font-bold text-gray-100">Voyage Cosmique</p>
                                <p className="text-xs text-gray-400">892 réservations</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-bold text-gray-100">⭐ 4.8</p>
                            <p className="text-xs text-gray-500">156 avis</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <span className="text-2xl font-bold text-gray-500">2</span>
                            <div>
                                <p className="font-bold text-gray-100">Le Grand Mystère</p>
                                <p className="text-xs text-gray-400">745 réservations</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-bold text-gray-100">⭐ 4.5</p>
                            <p className="text-xs text-gray-500">132 avis</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <span className="text-2xl font-bold text-gray-500">3</span>
                            <div>
                                <p className="font-bold text-gray-100">Aventure Préhistorique</p>
                                <p className="text-xs text-gray-400">623 réservations</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-bold text-gray-100">⭐ 4.6</p>
                            <p className="text-xs text-gray-500">98 avis</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <span className="text-2xl font-bold text-gray-500">4</span>
                            <div>
                                <p className="font-bold text-gray-100">Amour Éternel</p>
                                <p className="text-xs text-gray-400">487 réservations</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-bold text-gray-100">⭐ 4.2</p>
                            <p className="text-xs text-gray-500">87 avis</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
