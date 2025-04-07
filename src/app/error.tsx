"use client"
import React from 'react'



interface Props{
    error : Error

}

function Error({error}: Props) {
    

    return (
        <div className="text-red-600 text-center mx-auto">{error.message}</div>
    )
}

export default Error
