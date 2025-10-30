import React from 'react'
import { salleService } from '../../../services/salleService'
import { useQuery } from '@tanstack/react-query'
import GenericError from '../../errors/GenericError'

export default function ListSalle() {

    const {data: salles, isPending, isError, error} = useQuery({
        queryKey: ['salles'],
        queryFn: salleService.getAll
    })

    if (isPending) {
        return <p>Chargement des films...</p>;
    }

    if (isError) {
        return <GenericError message={error.message} />;
    }

  return (
    <main className="flex-1 overflow-y-auto bg-gray-950 p-4 lg:p-6">
        {/* <!-- Page Header --> */}
        <div className="mb-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-100">Gestion das salles</h2>
            <p className="text-gray-400 mt-1">Vue d'ensemble de votre plateforme</p>
        </div>
        
    </main>
  )
}
