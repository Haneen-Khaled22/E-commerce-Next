import CategoryList from '@/app/_components/CategoryList'
import React from 'react'

interface Props {
    filteredValue: string
}

function Page({filteredValue}:Props) {
    

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4 py-6">Appetizer</h1>
            <CategoryList filteredValue="Appetizer"/>
        </div>
    )
}

export default Page
