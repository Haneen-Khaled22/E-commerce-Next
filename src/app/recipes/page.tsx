
import Link from 'next/link';
import React, { Suspense } from 'react'
import RecipeList from '../_components/RecipeList';
import Loading from '../loading';

export const metadata={
  title:"recipes",
  discription:"Recipes website"
}

export const revalidate = 10;

 export default async function  Page() {


    return (
        <div>    
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">All Recipes</h1>
           <Suspense fallback={<Loading/>}>
           <RecipeList/>
           </Suspense>
            
          </div>
        </div>
      )
}


