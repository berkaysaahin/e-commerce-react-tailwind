import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productsAction } from '../redux/actions/productsAction';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products)

  console.log('products', products)
  useEffect(() => {
    dispatch(productsAction())
  }, [dispatch])

  return (
    <div className='p-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8'>
        {
          products && products.map((prd, i) => (
            <ProductCard key={i} prd={prd} />
          ))
        }
      </div>
    </div>
  )
}

export default Home