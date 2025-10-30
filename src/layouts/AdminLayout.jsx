import React, { useState } from 'react' // 1. Importation de useState
import { Outlet } from 'react-router-dom'
import SideBar from '../pages/admin/layout/SideBar'
import Header from '../pages/admin/layout/Header'

export default function AdminLayout() {
  // 2. Définition de l'état pour l'ouverture de la sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Fonction pour basculer l'état
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  // Fonction pour fermer explicitement la sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <section className="bg-gray-950">
        <section className="flex h-screen overflow-hidden">
            {/* 3. Passage de l'état et de la fonction de fermeture à SideBar */}
            <SideBar 
                isOpen={isSidebarOpen} 
                onClose={closeSidebar} 
            />
            
            {/* 4. Overlay sombre qui apparaît sur mobile lorsque la sidebar est ouverte */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
                    onClick={closeSidebar} // Ferme la sidebar si l'utilisateur clique sur l'overlay
                ></div>
            )}
            
            <section className="flex-1 flex flex-col overflow-hidden">
                {/* 5. Passage de la fonction de bascule (toggle) à Header */}
                <Header onMenuClick={toggleSidebar} />
                
                {/* Assurez-vous d'envelopper <Outlet /> dans un élément principal pour le défilement du contenu */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto">
                    <Outlet />
                </main>
            </section>
        </section>
    </section>
  )
}