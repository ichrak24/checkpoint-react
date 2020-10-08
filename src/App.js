import React from 'react';
import logo from './logo.svg';
import './App.css';

import  'bootstrap/dist/css/bootstrap.min.css' ;

import { Form , Row , Col , Button} from 'react-bootstrap';




function App() {
  return (

    

    <Form className="Login-form">
       <div className="wrapper">
       <div className="form-wrapper">
         <h1> Welcome  </h1>
         </div>
     </div>



     <Form.Group as={Row} controlId="formHorizontalFirstName">
      <Form.Label column sm={2}>
        First Name
      </Form.Label>
      <Col sm={10}>
        <Form.Control type="firstname" placeholder="FirstName" />
      </Col>
    </Form.Group>


    
    <Form.Group as={Row} controlId="formHorizontalLastName">
      <Form.Label column sm={2}>
       Last Name
      </Form.Label>
      <Col sm={10}>
        <Form.Control type="lasttname" placeholder="LastName" />
      </Col>
    </Form.Group>




     
    <Form.Group as={Row} controlId="formHorizontalEmail">
      <Form.Label column sm={2}>
        Email
      </Form.Label>
      <Col sm={10}>
        <Form.Control type="email" placeholder="Email" />
      </Col>
    </Form.Group>
  
    <Form.Group as={Row} controlId="formHorizontalPassword">
      <Form.Label column sm={2}>
        Pwd
      </Form.Label>
      <Col sm={10}>
        <Form.Control type="password" placeholder="Password" />
      </Col>
    </Form.Group>

    
   
    <Form.Group as={Row} controlId="formHorizontalCheck">
      <Col sm={{ span: 10, offset: 2 }}>
        <Form.Check label="Remember me" />
      </Col>
    </Form.Group>
  
    <Form.Group as={Row}>
      <Col sm={{ span: 10, offset: 2 }}>
        <Button className="createAccount" type="submit">Create Account</Button>
      
      </Col>
    </Form.Group>
  </Form>
         
        
      
      
  );
}

export default App;
