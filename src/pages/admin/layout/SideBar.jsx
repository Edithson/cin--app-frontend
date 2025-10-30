import React from 'react'
import { NavLink } from 'react-router-dom'
import Lien from '../../../components/layout/admin/Lien'

export default function SideBar() {
  return (
    <aside className="hidden lg:flex lg:flex-col w-64 bg-gray-900 text-gray-100 border-r border-gray-800">
        <div className="flex items-center justify-center h-16 bg-gray-950 border-b border-gray-800">
            <h1 className="text-xl font-bold text-red-500">🎬 CinéRéserv Admin</h1>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4">
            <Lien to={"/admin"} icon={"📊"} label={"Dashboard"} />
            <Lien to={"/admin/films"} icon={"🎬"} label={"Films"} />
            <Lien to={"/admin/seances"} icon={"🎭"} label={"Séances"} />
            <Lien to={"/admin/salles"} icon={"🏛️"} label={"Salles"} />
            <Lien to={"/admin/reservations"} icon={"🎫"} label={"Réservations"} />
            <Lien to={"/admin/categorie"} icon={"🗃️"} label={"Catégorie"} />
            <Lien to={"/admin/utilisateurs"} icon={"👥"} label={"Utilisateurs"} />
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
