import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { productDetailAction } from '../redux/actions/productsAction';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector(state => state.product)



  useEffect(() => {
    dispatch(productDetailAction(id))
  }, [dispatch])

  console.log('id', id)
  console.log('product', product)
  return (
    <div className='w-full flex justify-center space-x-5'>
      <img className='w-1/3' src={product?.image} alt='' />
      <div className='w-2/3 space-y-5'>
        <div className='font-bold text-2xl'>{product?.title}</div>
        <div className='opacity-70'>{product?.description}</div>
      </div>
    </div>
  )
}
//49.17

export default Detail