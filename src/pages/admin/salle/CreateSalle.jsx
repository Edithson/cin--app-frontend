import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { z } from 'zod';
import Bouton from '../../../components/common/Bouton';
import { salleService } from '../../../services/salleService';

// Schéma de validation Zod
const salleSchema = z.object({
  nom: z
    .string()
    .min(3, 'Le nom doit contenir au moins 3 caractères')
    .max(255, 'Le nom ne peut pas dépasser 255 caractères')
    .trim(),
  
  capacite: z
    .string()
    .min(1, 'La capacité est requise')
    .transform((val) => parseInt(val, 10))
    .refine((val) => !isNaN(val) && val >= 10, {
      message: 'La capacité doit être au minimum 10 places',
    })
    .refine((val) => val <= 500, {
      message: 'La capacité ne peut pas dépasser 500 places',
    }),
  
  adresse: z
    .string()
    .min(10, "L'adresse doit contenir au moins 10 caractères")
    .max(200, "L'adresse ne peut pas dépasser 200 caractères")
    .trim(),
});

export default function CreateSalle() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // React Hook Form avec Zod
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(salleSchema),
    defaultValues: {
      nom: '',
      capacite: '',
      adresse: '',
    },
  });

  // Observer la valeur de l'adresse pour le compteur
  const adresseValue = watch('adresse');

  // Mutation TanStack Query
  const mutation = useMutation({
    mutationFn: (newSalle) => salleService.create(newSalle),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['salles'] });
      navigate('/admin/salles', {
        state: { message: 'Salle créée avec succès !' },
      });
    },
    onError: (error) => {
      console.error('Erreur lors de la création de la salle:', error);
    },
  });

  // Soumission du formulaire
  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <main className="flex-1 overflow-y-auto bg-gray-950 p-4 lg:p-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div className="mb-4 sm:mb-0">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-100">
            Gestion des Salles
          </h2>
          <p className="text-gray-400 mt-1">
            Ajout d'une nouvelle salle de projection
          </p>
        </div>
        <Bouton to="/admin/salles" title="Annuler" type="annuler" />
      </div>

      {/* Message d'erreur global */}
      {mutation.isError && (
        <div className="mb-6 bg-red-900/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg">
          <p className="font-medium">Erreur lors de la création</p>
          <p className="text-sm mt-1">
            {mutation.error?.response?.data?.message ||
              'Une erreur est survenue. Veuillez réessayer.'}
          </p>
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <div className="space-y-4">
            {/* Nom de la salle et capacité */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Nom de la salle */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nom de la salle <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  {...register('nom')}
                  className={`w-full bg-gray-800 border ${
                    errors.nom ? 'border-red-500' : 'border-gray-700'
                  } text-gray-100 rounded-lg px-4 py-2.5 focus:outline-none focus:border-red-500 placeholder-gray-500`}
                  placeholder="Ex: Salle de célébration A2"
                  disabled={mutation.isPending}
                />
                {errors.nom && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.nom.message}
                  </p>
                )}
              </div>

              {/* Capacité */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Capacité (nombre de places){' '}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  {...register('capacite')}
                  min="10"
                  max="500"
                  className={`w-full bg-gray-800 border ${
                    errors.capacite ? 'border-red-500' : 'border-gray-700'
                  } text-gray-100 rounded-lg px-4 py-2.5 focus:outline-none focus:border-red-500 placeholder-gray-500`}
                  placeholder="120"
                  disabled={mutation.isPending}
                />
                {errors.capacite && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.capacite.message}
                  </p>
                )}
              </div>
            </div>

            {/* Adresse */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Adresse <span className="text-red-500">*</span>
              </label>
              <textarea
                {...register('adresse')}
                rows="3"
                className={`w-full bg-gray-800 border ${
                  errors.adresse ? 'border-red-500' : 'border-gray-700'
                } text-gray-100 rounded-lg px-4 py-2.5 focus:outline-none focus:border-red-500 resize-none placeholder-gray-500`}
                placeholder="Situé à ... après ..."
                disabled={mutation.isPending}
              />
              {errors.adresse && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.adresse.message}
                </p>
              )}
              <p className="text-xs text-gray-500 mt-1">
                {adresseValue?.length || 0}/200 caractères
              </p>
            </div>
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <Bouton
              to="/admin/salles"
              title="Annuler"
              type="annuler"
              disabled={mutation.isPending}
            />
            <button
              type="submit"
              disabled={mutation.isPending || isSubmitting}
              className={`inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors ${
                mutation.isPending || isSubmitting
                  ? 'bg-red-400 cursor-not-allowed'
                  : 'bg-red-600 hover:bg-red-700'
              } text-white`}
            >
              {mutation.isPending || isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Création en cours...
                </>
              ) : (
                'Créer la salle'
              )}
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}