import React, { useState } from 'react' // Importation de useState
import { Outlet } from 'react-router-dom'
import NavBar from '../pages/home/layout/NavBar'
import Footer from '../pages/home/layout/Footer'

export default function HomeLayout() {
  // Définition de l'état pour l'ouverture du menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour basculer l'état
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <section className="bg-gray-900 text-gray-100">
      {/* Passage de l'état et de la fonction de bascule à NavBar */}
      <NavBar isOpen={isMenuOpen} onToggle={toggleMenu} />
      
      <main>
        <Outlet />
      </main>
      
      <Footer />
    </section>
  )
}