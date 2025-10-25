import React from 'react'

export default function Register() {
  return (
    <section className="py-12 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
                {/* <!-- Header --> */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-2">Créer un compte</h2>
                    <p className="text-gray-400">Rejoignez CinéRéserv et réservez vos films préférés</p>
                </div>

                {/* <!-- Registration Form Card --> */}
                <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
                    {/* <!-- Social Login Buttons --> */}
                    <div className="space-y-3 mb-6">
                        <button type="button" className="w-full bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 px-4 rounded-lg transition flex items-center justify-center">
                            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            S'inscrire avec Google
                        </button>

                        <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition flex items-center justify-center">
                            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                            S'inscrire avec Facebook
                        </button>
                    </div>

                    {/* <!-- Divider --> */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-700"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-gray-800 text-gray-400">Ou avec votre email</span>
                        </div>
                    </div>

                    {/* <!-- Registration Form --> */}
                    <form className="space-y-4">
                        {/* <!-- Nom et Prénom --> */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    Prénom <span className="text-red-500">*</span>
                                </label>
                                <input type="text" required placeholder="Jean"
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    Nom <span className="text-red-500">*</span>
                                </label>
                                <input type="text" required placeholder="Dupont"
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition" />
                            </div>
                        </div>

                        {/* <!-- Email --> */}
                        <div>
                            <label className="block text-sm font-semibold mb-2">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input type="email" required placeholder="exemple@email.com"
                                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition" />
                        </div>

                        {/* <!-- Téléphone --> */}
                        <div>
                            <label className="block text-sm font-semibold mb-2">
                                Téléphone <span className="text-red-500">*</span>
                            </label>
                            <input type="tel" required placeholder="+33 6 12 34 56 78"
                                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition" />
                        </div>

                        {/* <!-- Date de naissance --> */}
                        <div>
                            <label className="block text-sm font-semibold mb-2">
                                Date de naissance <span className="text-red-500">*</span>
                            </label>
                            <input type="date" required
                                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition" />
                            <p className="text-xs text-gray-500 mt-1">Vous devez avoir au moins 13 ans</p>
                        </div>

                        {/* <!-- Mot de passe --> */}
                        <div>
                            <label className="block text-sm font-semibold mb-2">
                                Mot de passe <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input type="password" id="password" required placeholder="••••••••"
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 pr-12 focus:outline-none focus:border-red-500 transition" />
                                <button type="button" onclick="togglePassword('password')" 
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                    </svg>
                                </button>
                            </div>
                            {/* <!-- Password Strength Indicator --> */}
                            <div className="mt-2">
                                <div className="flex gap-1 mb-1">
                                    <div className="h-1 flex-1 bg-gray-700 rounded" id="strength1"></div>
                                    <div className="h-1 flex-1 bg-gray-700 rounded" id="strength2"></div>
                                    <div className="h-1 flex-1 bg-gray-700 rounded" id="strength3"></div>
                                    <div className="h-1 flex-1 bg-gray-700 rounded" id="strength4"></div>
                                </div>
                                <p className="text-xs text-gray-500">
                                    Minimum 8 caractères, avec majuscules, chiffres et caractères spéciaux
                                </p>
                            </div>
                        </div>

                        {/* <!-- Confirm Password --> */}
                        <div>
                            <label className="block text-sm font-semibold mb-2">
                                Confirmer le mot de passe <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input type="password" id="confirmPassword" required placeholder="••••••••"
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 pr-12 focus:outline-none focus:border-red-500 transition" />
                                <button type="button" onclick="togglePassword('confirmPassword')" 
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* <!-- Genre Préféré (optionnel) --> */}
                        <div>
                            <label className="block text-sm font-semibold mb-2">
                                Genre de film préféré (optionnel)
                            </label>
                            <select className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition">
                                <option value="">Sélectionnez un genre</option>
                                <option value="action">Action</option>
                                <option value="comedie">Comédie</option>
                                <option value="drame">Drame</option>
                                <option value="horreur">Horreur</option>
                                <option value="scifi">Science-fiction</option>
                                <option value="romance">Romance</option>
                                <option value="thriller">Thriller</option>
                                <option value="documentaire">Documentaire</option>
                            </select>
                        </div>

                        {/* <!-- Checkboxes --> */}
                        <div className="space-y-3">
                            <label className="flex items-start cursor-pointer group">
                                <input type="checkbox" required 
                                    className="w-4 h-4 mt-1 text-red-600 bg-gray-900 border-gray-700 rounded focus:ring-red-500" />
                                <span className="ml-3 text-sm">
                                    J'accepte les <a href="#" className="text-red-500 hover:text-red-400">conditions générales d'utilisation</a> et la <a href="#" className="text-red-500 hover:text-red-400">politique de confidentialité</a> <span className="text-red-500">*</span>
                                </span>
                            </label>

                            <label className="flex items-start cursor-pointer group">
                                <input type="checkbox" 
                                    className="w-4 h-4 mt-1 text-red-600 bg-gray-900 border-gray-700 rounded focus:ring-red-500" />
                                <span className="ml-3 text-sm text-gray-400 group-hover:text-white transition">
                                    Je souhaite recevoir les newsletters et offres promotionnelles
                                </span>
                            </label>

                            <label className="flex items-start cursor-pointer group">
                                <input type="checkbox" 
                                    className="w-4 h-4 mt-1 text-red-600 bg-gray-900 border-gray-700 rounded focus:ring-red-500" />
                                <span className="ml-3 text-sm text-gray-400 group-hover:text-white transition">
                                    Je souhaite recevoir des notifications par email pour les nouveaux films
                                </span>
                            </label>
                        </div>

                        {/* <!-- Submit Button --> */}
                        <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition mt-6">
                            Créer mon compte
                        </button>
                    </form>

                    {/* <!-- Login Link --> */}
                    <div className="text-center mt-6 text-sm text-gray-400">
                        Vous avez déjà un compte ? 
                        <a href="#" className="text-red-500 hover:text-red-400 font-semibold">Se connecter</a>
                    </div>
                </div>

                {/* <!-- Security Notice --> */}
                <div className="mt-6 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg p-4">
                    <div className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                        <div>
                            <h4 className="font-semibold text-sm mb-1">Vos données sont protégées</h4>
                            <p className="text-xs text-gray-400">
                                Nous utilisons un cryptage SSL pour protéger vos informations personnelles et nous ne partageons jamais vos données avec des tiers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
