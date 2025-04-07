import CategoryList from '@/app/_components/CategoryList'
import React from 'react'


function Page() {
    

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4 py-6">Dinner</h1>
            <CategoryList filteredValue="Dinner"/>
        </div>
    )
}



export default Page
