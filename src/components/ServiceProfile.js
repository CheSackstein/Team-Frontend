import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { GETFromProviders } from '../lib/FetchShortcuts'
import { BeautyProviders } from '../lib/mockProviders'

export default function ServiceProfile() {
    const [provider, setProvider] = useState({})
    const { id } = useParams()
    useEffect(() => {
        // for when we connect to backend
       // GETFromProviders(`getById`, JSON.stringify(id) )
        setProvider(BeautyProviders[0])
        
    }, [])

    
    return (
        <div>
            <div className="banner">
                <img src="/hairsalon1.jpg" alt="banner" />
            </div>
            <div className="data">
             <h2>
                {provider.companyName}
            </h2>
            </div>
        </div>
    )
}
