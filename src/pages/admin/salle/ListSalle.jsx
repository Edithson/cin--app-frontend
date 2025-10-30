import React, { useState } from 'react'
import { salleService } from '../../../services/salleService'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import GenericError from '../../errors/GenericError'
import Bouton from '../../../components/common/Bouton'

export default function ListSalle() {
    const queryClient = useQueryClient();
    const [searchTerm, setSearchTerm] = useState('');
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [salleToDelete, setSalleToDelete] = useState(null);

    // ✅ Correction : enlever les parenthèses () après getAll
    const {data: response, isPending, isError, error} = useQuery({
        queryKey: ['salles'],
        queryFn: () => salleService.getAll()  // Ajout de () =>
    })

    // Mutation pour la suppression
    const deleteMutation = useMutation({
        mutationFn: (id) => salleService.delete(id),
        onSuccess: () => {
            queryClient.invalidateQueries(['salles']);
            setDeleteModalOpen(false);
            setSalleToDelete(null);
        }
    });

    if (isPending) {
        return (
            <main className="flex-1 overflow-y-auto bg-gray-950 p-4 lg:p-6">
                <div className="flex items-center justify-center h-64">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
                        <p className="text-gray-400">Chargement des salles...</p>
                    </div>
                </div>
            </main>
        );
    }

    if (isError) {
        return <GenericError message={error.message} />;
    }

    // ✅ Extraction des données depuis response.data.data (structure Laravel)
    const salles = response?.data?.data || [];
    
    // Filtrer les salles selon la recherche
    const filteredSalles = salles.filter(salle => 
        salle.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        salle.adresse.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDeleteClick = (salle) => {
        setSalleToDelete(salle);
        setDeleteModalOpen(true);
    };

    const handleConfirmDelete = () => {
        if (salleToDelete) {
            deleteMutation.mutate(salleToDelete.id);
        }
    };

    return (
        <main className="flex-1 overflow-y-auto bg-gray-950 p-4 lg:p-6">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <div className="mb-4 sm:mb-0">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-100">Gestion des Salles</h2>
                    <p className="text-gray-400 mt-1">Gérez vos salles de cinéma et leur capacité</p>
                </div>
                <Bouton to="/admin/salles/create" title="➕ Ajouter une salle" type="confirm" />
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-400 text-sm">Total des salles</p>
                            <p className="text-3xl font-bold text-gray-100 mt-1">{salles.length}</p>
                        </div>
                        <div className="w-12 h-12 bg-red-600 bg-opacity-20 rounded-full flex items-center justify-center">
                            <span className="text-2xl">🎬</span>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-400 text-sm">Capacité totale</p>
                            <p className="text-3xl font-bold text-gray-100 mt-1">
                                {salles.reduce((sum, salle) => sum + salle.capacite, 0)}
                            </p>
                        </div>
                        <div className="w-12 h-12 bg-blue-600 bg-opacity-20 rounded-full flex items-center justify-center">
                            <span className="text-2xl">💺</span>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-400 text-sm">Capacité moyenne</p>
                            <p className="text-3xl font-bold text-gray-100 mt-1">
                                {salles.length > 0 ? Math.round(salles.reduce((sum, salle) => sum + salle.capacite, 0) / salles.length) : 0}
                            </p>
                        </div>
                        <div className="w-12 h-12 bg-green-600 bg-opacity-20 rounded-full flex items-center justify-center">
                            <span className="text-2xl">📊</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search Bar */}
            <div className="mb-6">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Rechercher une salle par nom ou adresse..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 pl-12 text-gray-100 focus:outline-none focus:border-red-600 transition"
                    />
                    <svg className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
            </div>

            {/* Salles List */}
            {filteredSalles.length === 0 ? (
                <div className="bg-gray-900 rounded-lg p-12 text-center border border-gray-800">
                    <div className="text-6xl mb-4">🎭</div>
                    <h3 className="text-xl font-bold text-gray-100 mb-2">
                        {searchTerm ? 'Aucune salle trouvée' : 'Aucune salle disponible'}
                    </h3>
                    <p className="text-gray-400 mb-6">
                        {searchTerm ? 'Essayez avec d\'autres termes de recherche' : 'Commencez par ajouter votre première salle de cinéma'}
                    </p>
                    {!searchTerm && (
                        <Bouton to="/admin/salles/create" title="Ajouter une salle" type="confirm" />
                    )}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSalles.map((salle) => (
                        <div key={salle.id} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-red-600 transition">
                            {/* Card Header */}
                            <div className="bg-gradient-to-r from-red-600 to-orange-600 p-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold text-white truncate">{salle.nom}</h3>
                                    <div className="bg-white bg-opacity-20 rounded-full px-3 py-1">
                                        <span className="text-black text-sm font-semibold">#{salle.id}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-4">
                                <div className="space-y-3 mb-4">
                                    {/* Capacité */}
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-blue-600 bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                                            <span className="text-lg">💺</span>
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-xs">Capacité</p>
                                            <p className="text-gray-100 font-semibold">{salle.capacite} places</p>
                                        </div>
                                    </div>

                                    {/* Adresse */}
                                    <div className="flex items-start">
                                        <div className="w-10 h-10 bg-green-600 bg-opacity-20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                            <span className="text-lg">📍</span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-gray-400 text-xs">Adresse</p>
                                            <p className="text-gray-100 text-sm line-clamp-2">{salle.adresse}</p>
                                        </div>
                                    </div>

                                    {/* Date de création */}
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-purple-600 bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                                            <span className="text-lg">📅</span>
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-xs">Créée le</p>
                                            <p className="text-gray-100 text-sm">
                                                {new Date(salle.created_at).toLocaleDateString('fr-FR', {
                                                    day: '2-digit',
                                                    month: 'short',
                                                    year: 'numeric'
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-2 pt-4 border-t border-gray-800">
                                    <Bouton 
                                        to={`/admin/salles/${salle.id}`} 
                                        title="👁️" 
                                        type="info"
                                        className="flex-1"
                                    />
                                    <Bouton 
                                        to={`/admin/salles/${salle.id}/edit`} 
                                        title="✏️" 
                                        type="warning"
                                        className="flex-1"
                                    />
                                    <button
                                        onClick={() => handleDeleteClick(salle)}
                                        className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition text-sm"
                                    >
                                        🗑️
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {deleteModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="bg-gray-800 rounded-lg max-w-md w-full p-6">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-red-600 bg-opacity-20 rounded-full">
                            <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-center mb-2 text-gray-100">Confirmer la suppression</h3>
                        <p className="text-gray-400 text-center mb-6">
                            Êtes-vous sûr de vouloir supprimer la salle <strong className="text-white">"{salleToDelete?.nom}"</strong> ? Cette action est irréversible.
                        </p>
                        <div className="flex gap-4">
                            <button
                                onClick={() => setDeleteModalOpen(false)}
                                disabled={deleteMutation.isPending}
                                className="flex-1 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-semibold transition disabled:opacity-50"
                            >
                                Annuler
                            </button>
                            <button
                                onClick={handleConfirmDelete}
                                disabled={deleteMutation.isPending}
                                className="flex-1 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition disabled:opacity-50"
                            >
                                {deleteMutation.isPending ? 'Suppression...' : 'Supprimer'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}