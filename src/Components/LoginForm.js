import React, { useState, useContext } from 'react'
import { Button, Checkbox, Form,label} from 'semantic-ui-react'
import {AuthContext} from '../Contexts/AuthContext';

const FormExampleForm = () => {
  
  const [email,onChangeEmail]=useState("");
  const [password,onChangePassword]=useState("");


  const authContext=useContext(AuthContext);

  const {onAuthChange}=authContext;


  console.log(authContext);

  const onSubmitForm=()=>
  {
    const obj={email,password};
    
    onAuthChange({...authContext,loggedInUser:obj});
  }

  return(
  <Form>
    <Form.Field>
      <label>Email</label>
      <input value={email} onChange={(e)=>onChangeEmail(e.target.value)}  placeholder='Email' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input value={password} onChange={(e)=>onChangePassword(e.target.value)}  placeholder='Password' />
    </Form.Field>
    <Button onClick={()=>onSubmitForm()} type='submit'>Submit</Button>
  </Form>
  )
}

export default FormExampleForm;