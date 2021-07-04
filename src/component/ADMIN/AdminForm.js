import React from "react";
import {connect} from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import {clearAuthState,sendRequest} from '../../actions/admin';

class AdminForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      name:''

    }
  }
  componentWillUnmount(){
    this.props.dispatch(clearAuthState());
  }
handleEmailSend=(e)=>{
  console.log(e.target.value);
  this.setState({
    email:e.target.value
  })
}
handNameSend=(e)=>{
  console.log(e.target.value);
  this.setState({
    name:e.target.value
  })
}
handleFormSubmit  = (e)=>{
  e.preventDefault();
  console.log('this.state',this.state);
  const{email,name}=this.state;
  if(email && name){
    this.props.dispatch(sendRequest(email,name));
  }
}

 render() {
   const {error,isSend,isProgress}=this.props.admin;
   
  return (
    <div>
    <div >
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
           type="email" 
           placeholder="Enter email" 
           onChange={this.handleEmailSend}
           value={this.state.email}
           />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" 
          placeholder="Name"
          onChange={this.handNameSend}
          value={this.state.name}
          />
        </Form.Group>

        <Button variant="primary"
         type="submit"
         onClick={this.handleFormSubmit}
         >
          Sent
        </Button>
      </Form>
      </div>
    </div>
  );
}
}
function mapStateToProps(state){
  return {
    admin:state.admin,
  }
}
export default connect(mapStateToProps)(AdminForm);
