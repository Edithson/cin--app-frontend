import React from 'react'

export default function GenericError({ message }) {
  const handleRefresh = () => {
    window.location.reload()
  }

  const handleGoHome = () => {
    window.location.href = '/'
  }

  return (
    <section className="bg-gray-900 text-gray-100 min-h-screen">
      <div id="errorGeneric" className="error-page">
        <section className="min-h-screen flex items-center justify-center py-12 px-4">
          <div className="max-w-4xl w-full text-center">
            {/* Icon */}
            <div className="mb-8">
              <div className="w-32 h-32 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div className="flex justify-center items-center gap-4 text-5xl mb-6">
                <span>😕</span>
                <span>🤔</span>
                <span>😔</span>
              </div>
            </div>

            {/* Content */}
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-4">Une erreur s'est produite</h2>
              <p className="text-xl text-gray-400 mb-2">
                Quelque chose ne s'est pas passé comme prévu
              </p>
              <p className="text-gray-500">
                Nous sommes désolés pour le désagrément. Veuillez réessayer dans quelques instants.
              </p>
            </div>

            {/* Error Message Box */}
            <div className="bg-gray-800 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
              <div className="bg-red-900 bg-opacity-20 border border-red-600 rounded-lg p-4 mb-4">
                <p className="text-red-400 text-sm font-mono">
                  Une erreur inattendue s'est produite lors du traitement de votre demande.
                </p>
              </div>
              <p className="text-sm text-gray-400">
                Si cette erreur persiste, veuillez noter le code ci-dessous et contacter notre support :
              </p>
              <div className="bg-gray-900 rounded px-4 py-2 mt-3 text-xs text-gray-500 font-mono">
                REF: CIN-ERR-{new Date().toISOString().split('T')[0].replace(/-/g, '')}-XYZABC
                {message}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button 
                onClick={handleRefresh}
                className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg font-bold transition inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
                Rafraîchir la page
              </button>
              <button 
                onClick={handleGoHome}
                className="bg-gray-700 hover:bg-gray-600 px-8 py-4 rounded-lg font-bold transition inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                Retour à l'accueil
              </button>
              <a 
                href="mailto:support@example.com" 
                className="bg-gray-700 hover:bg-gray-600 px-8 py-4 rounded-lg font-bold transition inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
                Contacter le support
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}