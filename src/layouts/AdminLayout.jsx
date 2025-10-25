import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../pages/admin/layout/SideBar'
import Header from '../pages/admin/layout/Header'

export default function AdminLayout() {
  return (
    <body className="bg-gray-950">
        <div className="flex h-screen overflow-hidden">
            <SideBar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <Outlet />
            </div>
        </div>
    </body>
  )
}
