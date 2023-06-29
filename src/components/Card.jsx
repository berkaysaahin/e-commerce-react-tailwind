import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from 'react-redux';


const Card = () => {
    const dispatch = useDispatch()
    return (
        <div className='w-1/3 h-full border fixed top-0 right-0 z-50 bg-white'>
            <div className='flex items-center h-20 justify-between'>
                <h1 className='text-2xl'>Cart:</h1>
                <AiOutlineClose onClick={() => dispatch({ type: 'DRAWER', payload: false })} size={25} className='cursor-pointer' />
            </div>


            <div className='h-28 flex items-center justify-between border py-10 mt-5'>
                <img className='h-24' alt='' src='https://i.ebayimg.com/images/g/5R0AAOSwMDZhTrQk/s-l225.webp' />
                <div className='w-44'>
                    <div className='font-bold text-sm'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</div>
                    <div className='opacity-70 text-xs'>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</div>
                </div>
                <div className='font-bold text-lg'>200 eur</div>
                <div className='bg-red-500 w-20 p-2 text-center text-white rounded-lg cursor-pointer'>discard</div>
            </div>

            <div className='h-28 flex items-center justify-between border py-10 mt-5'>
                <img className='h-24' alt='' src='https://i.ebayimg.com/images/g/5R0AAOSwMDZhTrQk/s-l225.webp' />
                <div className='w-44'>
                    <div className='font-bold text-sm'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</div>
                    <div className='opacity-70 text-xs'>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</div>
                </div>
                <div className='font-bold text-lg'>200 eur</div>
                <div className='bg-red-500 w-20 p-2 text-center text-white rounded-lg cursor-pointer'>discard</div>
            </div>

            <div className='h-28 flex items-center justify-between border py-10 mt-5'>
                <img className='h-24' alt='' src='https://i.ebayimg.com/images/g/5R0AAOSwMDZhTrQk/s-l225.webp' />
                <div className='w-44'>
                    <div className='font-bold text-sm'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</div>
                    <div className='opacity-70 text-xs'>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</div>
                </div>
                <div className='font-bold text-lg'>200 eur</div>
                <div className='bg-red-500 w-20 p-2 text-center text-white rounded-lg cursor-pointer'>discard</div>
            </div>

            <div className='h-28 flex items-center justify-between border py-10 mt-5'>
                <img className='h-24' alt='' src='https://i.ebayimg.com/images/g/5R0AAOSwMDZhTrQk/s-l225.webp' />
                <div className='w-44'>
                    <div className='font-bold text-sm'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</div>
                    <div className='opacity-70 text-xs'>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</div>
                </div>
                <div className='font-bold text-lg'>200 eur</div>
                <div className='bg-red-500 w-20 p-2 text-center text-white rounded-lg cursor-pointer'>discard</div>
            </div>
        </div>
    )
}
//1.06
export default Card