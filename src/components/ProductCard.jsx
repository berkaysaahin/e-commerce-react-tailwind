import React from 'react'

const ProductCard = ({ prd }) => {
    return (
        <div className='hover:border-secondary w-1/5 h-[350px] border border-secondary rounded-lg m-2 flex flex-col items-center p-1 space-y-2 '>
            <img onClick={() => window.location = `detail/ ${prd.id}`} className='h-32 object-cover' src={prd?.image} alt='' />
            <div className='font-bold h-16 text-center mt-2'>{(prd?.title).substring(0, 45)} ...</div>
            <div className='text-center opacity-70 text-sm h-[70px]'>{(prd?.description).substring(0, 45)} ...</div>
            <div className='flex items-center justify-between'>
                <div className='text-xl font-bold mx-3 '>{prd?.price} eur</div>
                <button className='w-full px-5 py-2 text-sm tracking-wide bg-secondary text-gray-600 capitalize transition-colors duration-300 transform border rounded-md sm:mx-2 dark:border-gray-400 dark:text-gray-300 sm:mt-0 sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring dark:hover:bg-gray-800 focus:ring-gray-300 focus:ring-opacity-40'>Add To Cart</button>
            </div>

        </div>
        //1.05
    )
}

export default ProductCard