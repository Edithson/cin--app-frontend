import React from 'react'
import { NavLink } from 'react-router-dom'
import Lien from '../../../components/layout/admin/Lien'

// Accept a prop 'isOpen' and 'onClose'
export default function SideBar({ isOpen, onClose }) {
  return (
    // Ajoutez des classes pour le rendre un "drawer" sur mobile
    // Fixe, hauteur totale, transition et z-index élevé.
    // 'hidden lg:flex' est remplacé par un affichage conditionnel basé sur 'isOpen'
    <section 
      className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-gray-100 border-r border-gray-800 z-40 transform transition-transform duration-300 ease-in-out 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 lg:static lg:flex lg:flex-col lg:h-auto lg:z-auto`}
    >
        {/* Le reste du contenu de la SideBar reste inchangé */}
        <div className="flex items-center justify-between h-16 bg-gray-950 border-b border-gray-800 px-4">
            <h1 className="text-xl font-bold text-red-500">🎬 CinéRéserv Admin</h1>
            {/* Bouton de fermeture pour mobile */}
            <button 
                className="lg:hidden text-gray-400 hover:text-gray-100" 
                onClick={onClose}
                aria-label="Fermer le menu"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4">
            <Lien to={"/admin"} icon={"📊"} label={"Dashboard"} onClick={onClose} />
            <Lien to={"/admin/films"} icon={"🎬"} label={"Films"} onClick={onClose} />
            <Lien to={"/admin/seances"} icon={"🎭"} label={"Séances"} onClick={onClose} />
            <Lien to={"/admin/salles"} icon={"🏛️"} label={"Salles"} onClick={onClose} />
            <Lien to={"/admin/reservations"} icon={"🎫"} label={"Réservations"} onClick={onClose} />
            <Lien to={"/admin/categorie"} icon={"🗃️"} label={"Catégorie"} onClick={onClose} />
            <Lien to={"/admin/utilisateurs"} icon={"👥"} label={"Utilisateurs"} onClick={onClose} />
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
            <button className="w-full mt-4 bg-gray-800 hover:bg-gray-700 text-gray-300 py-2 rounded-lg text-sm transition" onClick={onClose}>
                Déconnexion
            </button>
        </div>
    </section>
  )
}