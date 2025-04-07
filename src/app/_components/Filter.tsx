"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

function Filter() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const [activeFilter, setActiveFilter] = useState('All');

    function handleFilter(filter: string) {
        console.log(filter);
        setActiveFilter(filter);
        router.push(`/category/${filter}`);
        const params = new URLSearchParams(searchParams);
        params.set('mealType', filter);
        router.replace(`${pathname}?${params.toString()}`);
    }

    const categories = [
        'All', 'Breakfast', 'Dinner', 'Lunch', 'Appetizer', 'Side Dish', 'Snack', 'Beverage', 'Dessert'
    ];

    return (
        <div className="py-4 px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 justify-center">
                {categories.map((category) => (
                    <button 
                        key={category} 
                        className={`text-gray-800 font-semibold px-4 py-2 border border-gray-300 rounded-lg transition duration-300 ${activeFilter === category ? 'bg-gray-300' : 'hover:bg-gray-200'}`}
                        onClick={() => handleFilter(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Filter;
