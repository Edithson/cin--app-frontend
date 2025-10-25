import React from 'react'

export default function FeatureSection() {
  return (
    <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12">Pourquoi choisir CinéRéserv ?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">⚡</span>
                    </div>
                    <h4 className="text-xl font-bold mb-2">Réservation rapide</h4>
                    <p className="text-gray-400">Réservez vos places en moins de 2 minutes avec notre interface intuitive</p>
                </div>

                <div className="text-center p-6">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">🎫</span>
                    </div>
                    <h4 className="text-xl font-bold mb-2">Billets électroniques</h4>
                    <p className="text-gray-400">Recevez vos billets par email et présentez-les directement sur votre smartphone</p>
                </div>

                <div className="text-center p-6">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">💳</span>
                    </div>
                    <h4 className="text-xl font-bold mb-2">Paiement sécurisé</h4>
                    <p className="text-gray-400">Plusieurs moyens de paiement acceptés avec un système totalement sécurisé</p>
                </div>
            </div>
        </div>
    </section>
  )
}
