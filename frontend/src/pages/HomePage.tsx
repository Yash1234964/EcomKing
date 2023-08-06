/* eslint-disable @typescript-eslint/no-unused-vars */

import { Col, Row } from 'react-bootstrap'
import { ApiError } from '../types/ApiError'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import ProductItem from '../components/ProductItem'
import { Helmet } from 'react-helmet-async'
import { useGetProductsQuery } from '../hooks/productHooks'
import { getError } from '../types/utils'


export default function HomePage() {
  const {data:products, isLoading, error} = useGetProductsQuery(); 
  return (
    
      isLoading ? (<LoadingBox/>) :error ?(<MessageBox variant="danger" > {getError(error as ApiError)}</MessageBox>):(
              <Row>
                <Helmet>
                  <title>Ecom King</title>
                </Helmet>
             {
              products!.map((product) => {
                return (
                <Col key={product.slug} sm={6} md={4} lg={3}>
                    <ProductItem product={product}/>
                </Col>)
              })
            }
        </Row>)
  )
}
// function getError(arg0: ApiError): string {
//   throw new Error('Function not implemented.')
// }

