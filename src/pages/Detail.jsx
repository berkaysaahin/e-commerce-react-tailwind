import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { productDetailAction } from '../redux/actions/productsAction';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector(state => state.product)
  const [count, setCount] = useState(0)

  const increment = (stock) => {

    if(count <= stock){
      setCount(count + 1)
    }
  }

  const decrement = () => {
    
    if(count > 0){
      setCount(count - 1)
    }
  }



  useEffect(() => {
    dispatch(productDetailAction(id))
  }, [dispatch])

  console.log('id', id)
  console.log('product', product)
  return (
    <div className='w-full flex items-center justify-center space-x-5'>
      <img className='w-1/3' src={product?.image} alt='' />
      <div className='w-2/3 space-y-5'>
        <div className='font-bold text-2xl'>{product?.title}</div>
        <div className='opacity-70'>{product?.description}</div>
        <div className='opacity-70'>{product?.category}</div>
        <div className='opacity-70'>Rate: {product?.rating?.rate} - Stock: {product?.rating?.count}</div>
        <div className='text-xl font-bold'>Price: {product?.price}</div>

        <div className='flex items-center space-x-4'>
          <AiOutlineMinus  onClick={decrement} className='cursor-pointer border rounded-full p-1' size={30} />
          <span>{count}</span>
          <AiOutlinePlus onClick={()=> increment(product?.rating?.count)} className='cursor-pointer border rounded-full p-1' size={30} />
        </div>

        <button className='p-3 w-full  bg-indigo-600 text-center rounded-lg text-white text-lg'>Add To Cart</button>
      </div>
    </div>
  )
}
//49.17

export default Detail