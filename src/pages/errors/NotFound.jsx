import React from 'react'

export default function NotFound() {
  return (
    <body className="bg-gray-900 text-gray-100">
        <div id="error404" className="error-page">
            <section className="min-h-screen flex items-center justify-center py-12 px-4">
                <div className="max-w-4xl w-full text-center">
                    {/* <!-- Animated 404 --> */}
                    <div className="mb-8">
                        <h1 className="text-9xl md:text-[200px] font-bold text-red-600 leading-none mb-4 animate-pulse">404</h1>
                        <div className="flex justify-center items-center gap-4 text-6xl mb-6">
                            <span>🎬</span>
                            <span>🎞️</span>
                            <span>🍿</span>
                        </div>
                    </div>

                    {/* <!-- Content --> */}
                    <div className="mb-8">
                        <h2 className="text-4xl font-bold mb-4">Oups ! Film introuvable</h2>
                        <p className="text-xl text-gray-400 mb-2">
                            Cette page semble avoir quitté l'affiche...
                        </p>
                        <p className="text-gray-500">
                            La page que vous recherchez n'existe pas ou a été déplacée.
                        </p>
                    </div>

                    {/* <!-- Suggestions --> */}
                    <div className="bg-gray-800 rounded-lg p-8 mb-8 max-w-2xl mx-auto">
                        <h3 className="text-xl font-bold mb-4">Suggestions :</h3>
                        <ul className="space-y-3 text-left">
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                                <span className="text-gray-300">Vérifiez l'URL dans la barre d'adresse</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                                <span className="text-gray-300">Retournez à la page d'accueil</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                                <span className="text-gray-300">Utilisez la recherche pour trouver un film</span>
                            </li>
                        </ul>
                    </div>

                    {/* <!-- Action Buttons --> */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#" className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg font-bold transition inline-flex items-center justify-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                            </svg>
                            Retour à l'accueil
                        </a>
                        <a href="#" className="bg-gray-700 hover:bg-gray-600 px-8 py-4 rounded-lg font-bold transition inline-flex items-center justify-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                            Rechercher un film
                        </a>
                    </div>

                    {/* <!-- Help Link --> */}
                    <div className="mt-8 text-gray-500">
                        Besoin d'aide ? <a href="#" className="text-red-500 hover:text-red-400">Contactez notre support</a>
                    </div>
                </div>
            </section>
        </div>
    </body>
  )
}
