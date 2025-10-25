import React from 'react'
import ChartsTables from './sections/ChartsTables'
import RecentActivity from './sections/RecentActivity'
import StartsCards from './sections/StartsCards'

export default function Dashboard() {
  return (
    <main className="flex-1 overflow-y-auto bg-gray-950 p-4 lg:p-6">
        {/* <!-- Page Header --> */}
        <div className="mb-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-100">Tableau de bord</h2>
            <p className="text-gray-400 mt-1">Vue d'ensemble de votre plateforme</p>
        </div>
        {/* <!-- Stats Cards --> */}
        <StartsCards />
        {/* <!-- Charts and Tables --> */}
        <ChartsTables />
        {/* <!-- Recent Activity --> */}
        <RecentActivity />
    </main>
  )
}
