import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Lien({ to, icon, label }) {
  return (
    <NavLink
        to={to}
        end
        className={({ isActive }) => (
            isActive 
            ? "flex items-center px-6 py-3 text-gray-100 bg-red-600 border-l-4 border-red-500" 
            : "flex items-center px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-gray-100 transition"
        )}>
        {({ isActive }) => (
            <>
            <span className="mr-3">{icon}</span>
            <span className={isActive ? "font-medium" : ""}>{label}</span>
            </>
        )}
    </NavLink>
  )
}
