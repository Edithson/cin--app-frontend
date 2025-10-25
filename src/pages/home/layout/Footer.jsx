import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 py-8">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h5 className="font-bold text-lg mb-4 text-red-500">🎬 CinéRéserv</h5>
                    <p className="text-gray-400 text-sm">Votre plateforme de réservation de billets de cinéma en ligne</p>
                </div>
                <div>
                    <h6 className="font-bold mb-4">Navigation</h6>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><a href="#" className="hover:text-white transition">Accueil</a></li>
                        <li><a href="#" className="hover:text-white transition">Films</a></li>
                        <li><a href="#" className="hover:text-white transition">Séances</a></li>
                        <li><a href="#" className="hover:text-white transition">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold mb-4">Légal</h6>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><a href="#" className="hover:text-white transition">CGU</a></li>
                        <li><a href="#" className="hover:text-white transition">Confidentialité</a></li>
                        <li><a href="#" className="hover:text-white transition">Cookies</a></li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold mb-4">Suivez-nous</h6>
                    <div className="flex space-x-4">
                        <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center transition">F</a>
                        <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center transition">T</a>
                        <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center transition">I</a>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
                <p>© 2025 CinéRéserv. Tous droits réservés.</p>
            </div>
        </div>
    </footer>
  )
}
