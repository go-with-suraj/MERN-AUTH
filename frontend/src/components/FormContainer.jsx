import { Container, Row, Col } from 'react-bootstrap'
import React from 'react'

export const FormContainer = ({children}) => {
  return (
    <Container>
       <Row className='justify-content-md-center mt-5'>
        <Col xs={12} md={6} className='cardp-5'>
        {
            children
        }
        </Col>
       </Row>
    </Container>
  )
}
