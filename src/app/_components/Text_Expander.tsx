"use client"
import React, { useState } from 'react';

interface Props {
    children: React.ReactNode;
}

function TextExpander({ children }: Props) {
    const [isExpanded, setExpanded] = useState(false);

    return (
        <div>
            <span className="text-gray-700">
                {isExpanded ? children : React.Children.toArray(children).slice(0, 3)}
                {!isExpanded && '...'}
            </span>
            <button
                className="text-red-600 "
                onClick={() => setExpanded(!isExpanded)}
            >
                {isExpanded ? 'Show Less' : 'Show More'}
            </button>
        </div>
    );
}

export default TextExpander;
