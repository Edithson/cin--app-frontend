import React from 'react'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-red-900 to-gray-900 py-20">
        <div className="container mx-auto px-4">
            <div className="max-w-3xl">
                <h2 className="text-5xl font-bold mb-4">Réservez vos billets en quelques clics</h2>
                <p className="text-xl text-gray-300 mb-8">Découvrez les derniers films et réservez vos places pour les meilleures séances</p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <input type="text" placeholder="Rechercher un film..." className="flex-1 px-6 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-500"/>
                    <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition">Rechercher</button>
                </div>
            </div>
        </div>
    </section>
  )
}
