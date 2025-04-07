import React from 'react'

interface Props {}

function Loading(props: Props) {
    const {} = props

    return (
        <div className="flex items-center justify-center h-screen">
            <div
                className="spinner-border animate-spin w-15 h-15 border-4 rounded-full text-red-600 border-t-transparent"
                role="status"
            ></div>
        </div>
    )
}

export default Loading