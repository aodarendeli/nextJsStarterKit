import React, { useEffect, useState } from 'react'
import PropertyCard from '../property/PropertyCard'
import { fetchProperties } from '../../utils/request'
function HomeProperty() {
    const [den, setDen] = useState()
    useEffect(() => {
        fetchProperties().then(data => {
            setDen(data.sort(() => Math.random() - Math.random()).slice(0, 3));
        });
    }, [])
    return (
        <section className="px-4 py-6">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
                    Recent Properties
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {den && den.length === 0 ? (
                        <p>No properties found</p>
                    ) : (den && den.map((item) => (
                        <PropertyCard key={item._id} property={item} />
                    ))
                    )}
                </div>
            </div>
        </section>
    )
}

export default HomeProperty