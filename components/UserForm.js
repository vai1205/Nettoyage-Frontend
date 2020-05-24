import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {useState, useEffect} from 'react';
import {submitFormEndPoint} from "../actions/form";

const userForm = props => {

  const {nameLabel, namePlaceholder, phoneNumber, phoneNumberPlaceholder, emailLabel, emailPlaceholder, selectService, message, messagePlaceholder, submit, services, sendingMessage, messageSent, thanksForContacting, defaultOption, phoneNumberLabel} = props.language;
  const [values, setValues] = useState({
    name:"",
    email:"",
    phone:"",
    service:"",
    userMessage:"",
    sent: false,
    success: false,
    error: false,
    buttonText:submit
  });

  useEffect(()=>{
    setValues({...values, buttonText:submit})
  },[submit]);

  const {name, email, phone, service, userMessage, sent, success, error, buttonText} = values;

  const handleSubmit = e => {
    e.preventDefault();
    setValues({...values, buttonText:sendingMessage});
    submitFormEndPoint({name, email, phone, service, userMessage}).then(resp => {
      if(resp.error) {
        let errorMessage = resp.error;
        if(props.language.name === "french") {
          switch (errorMessage) {
            case "Name is Required" :
              errorMessage = "Le nom est requis";
              break;
            case "Must be a valid email address" :
              errorMessage = "Doit être une adresse e-mail valide";
              break;
            case "Phone number is Required" :
              errorMessage = "Le numéro de téléphone est requis";
              break;
            case "Select at least one service" :
              errorMessage = "Sélectionnez au moins un service";
              break;
            case "Message must be at least 20 Characters long" :
              errorMessage = "Le message doit contenir au moins 20 caractères";
              break;
          }
        }
        setValues({...values, error:errorMessage});
      } else {
        setValues({
          name:"", email:"", phone:"", service:"", userMessage:"", 
          buttonText:messageSent, 
          success: resp.success
        })
      }
    })
  };

  const handleChange = name => e => {
    setValues({...values, [name]: e.target.value, error:false, success:false, buttonText:submit });
  };

  const handleMouseMove = e => {
    setValues({ ...values, success: false, buttonText: submit, error: false });
  };

  const showSuccessMessage = () => success && alert(thanksForContacting);

  const showErrorMessage = () => (
    error && alert(error)
  );

  return (
    <React.Fragment>
    <Form onSubmit={handleSubmit} onMouseMove={handleMouseMove} onTouchMove={handleMouseMove}>
      <FormGroup>
        <Label for="name">{nameLabel}</Label>
        <Input 
          id="name" 
          placeholder={namePlaceholder} 
          value={name}
          onChange={handleChange("name")} 
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">{emailLabel}</Label>
        <Input 
          type="text" 
          id="email" 
          value={email}
          placeholder={emailPlaceholder} 
          onChange={handleChange("email")} 
        />
      </FormGroup>
      <FormGroup>
        <Label for="phoneNumber">{phoneNumberLabel}</Label>
        <Input 
          type="number" 
          id="phoneNumber" 
          value={phone}
          placeholder={phoneNumberPlaceholder} 
          onChange={handleChange("phone")} 
        />
      </FormGroup>
      <FormGroup>
        <Label for="selectService">{selectService}</Label>
        <Input 
          type="select" 
          value={service}
          id="selectService" 
          onChange={handleChange("service")} 
        >
          <option>{defaultOption}</option>
          {
            services && services.map((service, index) => <option key={index}>{service.title}</option>)
          }
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="message">{message}</Label>
        <Input 
          type="textarea" 
          name="text" 
          id="message" 
          value={userMessage}
          placeholder={messagePlaceholder}
          onChange={handleChange("userMessage")} 
        />
      </FormGroup>
      <Button className="submit-button btn btn-secondary">{buttonText}</Button>
    </Form>
    <div className="mt-5 container">
        {showErrorMessage()}
        {showSuccessMessage()}
    </div>
    </React.Fragment>
  );
}

export default userForm;