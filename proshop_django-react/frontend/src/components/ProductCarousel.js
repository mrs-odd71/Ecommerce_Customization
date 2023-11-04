import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'
import './sidebar.css';

function ProductCarousel() {
    const dispatch = useDispatch()

    const productTopRated = useSelector(state => state.productTopRated)
    const { error, loading, products } = productTopRated

    useEffect(() => {
        dispatch(listTopProducts())
    }, [dispatch])

    return (loading ? <Loader />
        : error
            ? <Message variant='danger'>{error}</Message>
            : (

                <div className='row'>
                    <div className='col-md-2'>
                    <>
  <details>
    <summary>
      Exclusive
    </summary>
    <div className="content">
      <ul>
        <li>
          <a href="http://127.0.0.1:8000/#/product/30" target="_blank">
            Macbook
          </a>
        </li>
        <li>
          <a href="http://127.0.0.1:8000/#/product/31" target="_blank">
            Gaming Laptop
          </a>
        </li>
        <li>
          <a href="http://127.0.0.1:8000/#/product/29" target="_blank">
            Mac Mini
          </a>
        </li>
        <li>
          <a href="http://127.0.0.1:8000/#/product/28" target="_blank">
            Iphone 15
          </a>
        </li>
      </ul>
    </div>
  </details>
  <details>
    <summary>
      Gadgets & Accessories <strong></strong>
      <strong></strong> 
    </summary>
    <div className="content">
      <ul>
        <li>
          <a href="http://127.0.0.1:8000/#/product/33" target="_blank">
            Apple Watch Utra 2
          </a>
        </li>
        <li>
          <a href="http://127.0.0.1:8000/#/product/32" target="_blank">
            Apple watch 9
          </a>
        </li>
        <li>
          <a href="http://127.0.0.1:8000/#/product/1" target="_blank">
            Airpods
          </a>
        </li>
        <li>
          <a href="http://127.0.0.1:8000/#/product/3" target="_blank">
            DSLR Camera
          </a>
        </li>
        <li>
          <a href="http://127.0.0.1:8000/#/product/27" target="_blank">
            Health Gadget
          </a>
        </li>
      </ul>
    </div>
  </details>
</>

                    </div>
                    <div className='col-md-10'>
                    <Carousel pause='hover' className='bg-dark'>
                    {products.map(product => (
                        <Carousel.Item key={product._id}>
                            <Link to={`/product/${product._id}`}>
                                <Image src={product.image} alt={product.name} fluid />
                                <Carousel.Caption className='carousel.caption'>
                                    <h4>{product.name} (${product.price})</h4>
                                </Carousel.Caption>
                            </Link>
                        </Carousel.Item>
                    ))}
                </Carousel>
                    </div>

                </div>
                
            )

    )
}

export default ProductCarousel
