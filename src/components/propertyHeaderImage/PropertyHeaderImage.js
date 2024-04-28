import Image from 'next/image'
import React from 'react'

function PropertyHeaderImage({ image }) {
    return (
        <section>
            <div className='container-xl m-auto'>
                <div className='grid grid-cols-1'>
                    <Image
                        src={`/images/properties/${image}`}
                        className='object-cover h-[400px] w-full'
                        width='0'
                        alt='image'
                        height='0'
                        sizes='100vw'
                    />
                </div>
            </div>
        </section>
    )
}

export default PropertyHeaderImage