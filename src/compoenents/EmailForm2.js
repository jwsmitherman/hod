import { EmailJSResponseStatus } from "emailjs-com"
import React from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'
import emailjs from 'emailjs-com';


class SupportContainer extends React.Component{
  constructor(){
    super()
    this.state = {
      userEmail:"",
      concernCategory:"",
      emailTitle:"",
      emailDetails:""
    }
  }

  handleFormFormSubmit = () => {
    console.log(this.state)
    this.props.submitInfo()
    var service_id = "";
    var template_id = "";
    var user_id = "";
    emailjs.send(service_id,template_id, this.state, user_id)
  }

}