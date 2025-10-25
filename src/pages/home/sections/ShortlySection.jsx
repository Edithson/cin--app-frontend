import React from 'react'

export default function ShortlySection() {
  return (
    <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold">Prochainement</h3>
                <a href="#" className="text-red-500 hover:text-red-400 transition">Voir tout →</a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* <!-- Coming Soon Card 1 --> */}
                <div className="bg-gray-900 rounded-lg overflow-hidden flex">
                    <div className="w-32 h-48 bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center flex-shrink-0">
                        <span className="text-4xl">🔥</span>
                    </div>
                    <div className="p-4 flex flex-col justify-between">
                        <div>
                            <h4 className="font-bold text-lg mb-1">Inferno Rising</h4>
                            <p className="text-gray-400 text-sm mb-2">Action • 2h 20min</p>
                            <p className="text-red-500 text-sm font-semibold">Sortie: 15 Nov 2025</p>
                        </div>
                        <button className="text-red-500 hover:text-red-400 text-sm font-semibold">Me notifier →</button>
                    </div>
                </div>

                {/* <!-- Coming Soon Card 2 --> */}
                <div className="bg-gray-900 rounded-lg overflow-hidden flex">
                    <div className="w-32 h-48 bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center flex-shrink-0">
                        <span className="text-4xl">🎪</span>
                    </div>
                    <div className="p-4 flex flex-col justify-between">
                        <div>
                            <h4 className="font-bold text-lg mb-1">Le Cirque Magique</h4>
                            <p className="text-gray-400 text-sm mb-2">Fantaisie • 1h 45min</p>
                            <p className="text-red-500 text-sm font-semibold">Sortie: 22 Nov 2025</p>
                        </div>
                        <button className="text-red-500 hover:text-red-400 text-sm font-semibold">Me notifier →</button>
                    </div>
                </div>

                {/* <!-- Coming Soon Card 3 --> */}
                <div className="bg-gray-900 rounded-lg overflow-hidden flex">
                    <div className="w-32 h-48 bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                        <span className="text-4xl">🌊</span>
                    </div>
                    <div className="p-4 flex flex-col justify-between">
                        <div>
                            <h4 className="font-bold text-lg mb-1">Océan Profond</h4>
                            <p className="text-gray-400 text-sm mb-2">Documentaire • 1h 30min</p>
                            <p className="text-red-500 text-sm font-semibold">Sortie: 01 Déc 2025</p>
                        </div>
                        <button className="text-red-500 hover:text-red-400 text-sm font-semibold">Me notifier →</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
