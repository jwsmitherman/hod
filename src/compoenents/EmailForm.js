import React from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'
import emailjs from 'emailjs-com';

export default function EmailForm() {

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_5oonc5q', 'template_ch0z9nt', e.target, 'user_J0i3VdNto3RqfzABqfRuF')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
        e.preventDefault();
        e.target.reset();
    }

    return (
    <Form id = "houz-of-dyza-email" onSubmit={sendEmail}>
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='First name'
        placeholder='First name'
        name = 'user_firstname'
      />
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Last name'
        placeholder='Last name'
        name = 'user_lastname'

      />
    </Form.Group>
    <Form.Field
      id='form-textarea-control-opinion'
      control={TextArea}
      label='Tell Us What You Are Interested In'
      placeholder='Message'
      name = 'message'
    />
    <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='Email'
      placeholder='joe@schmoe.com'
      name = 'user_email'
    />
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Submit'
      label=''
    />
  </Form>


    );
  }
