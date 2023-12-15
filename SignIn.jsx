import React from 'react'
import { useNavigate } from 'react-router-dom';
import './SignIn.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../Asserts/Images/img5.jpg'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export const   SignIn=()=> {
    const navigate=useNavigate();
  return (
    <Container className="my-5">

      <Card>
        <Row className='g-0'>

          <Col md='6'>
            <Card.Img src={img1} alt="login form" className='rounded-start w-100'/>
          </Col>

          <Col md='6'>
            <Card.Body className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <span className="h1 fw-bold mb-0">Sign Up</span>
              </div>

              <div className="head"><h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}><b>Create your new account</b></h5></div>

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
              <Form.Label column sm="2">
                <div className="text1">Name:</div>
              </Form.Label>
              <Col sm="5">
                <div className="input"><Form.Control type="text" placeholder='Enter your name'/></div>
              </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextId">
              <Form.Label column sm="2">
                <div className="text1">User ID:</div>
              </Form.Label>
              <Col sm="5">
                <div className="input"><Form.Control type="text" placeholder='Enter UserId'/></div>
              </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPass1">
              <Form.Label column sm="2">
                <div className="text1">New Password:</div>
              </Form.Label>
              <Col sm="5">
                <div className="input"><Form.Control type="password" placeholder="New Password" /></div>
              </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPass2">
              <Form.Label column sm="2">
                <div className="text1">Confirm Password:</div>
              </Form.Label>
              <Col sm="5">
                <div className="input"><Form.Control type="password" placeholder="Confirm Password" /></div>
              </Col>
              </Form.Group>

              
              <div className="btn1"><Button className="mb-4 px-5" color='dark' size='sm' column sm="1" onClick={()=>navigate('/')}>Sign Up</Button></div>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Already a user? <a href="#!" style={{color: '#393f81'}}onClick={()=>navigate('/')}>Login!!!</a></p>

              <div className='d-flex flex-row justify-content-start'>
                <div className="t1">
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
                </div>
              </div>

            </Card.Body>
          </Col>

        </Row>
      </Card>

    </Container>
  );
}

