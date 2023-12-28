import './App.css'
import { useState } from "react";



// export default AddContact;

const AddContact = ({ onAddContact }) => {
  
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddContact(formValues);
    setFormValues({
      name: "",
      email: "",
      phone: "",
      address: ""
    });
  };

    return (
    
        <div className="modal">
          <h1>Add a new Contact</h1>
          <form className="form" onSubmit={handleSubmit}>
            <label for="name">Name:</label>
              <input type="text"
                    name="name" 
                    id="name" 
                    placeholder="Full Name"
                    value={formValues.name}
                    onChange={handleInputChange}></input>
            <label for="email">E-mail:</label>
              <input type="text" 
                    name="email" 
                    id="email" 
                    placeholder="Enter E-mail"
                    value={formValues.email}
                    onChange={handleInputChange}></input>
            <label for="phone">Phone Number:</label>
              <input type="text" 
                    name="phone" 
                    id="phone" 
                    placeholder="Enter Phone"
                    value={formValues.phone}
                    onChange={handleInputChange}></input>
            <label for="address">Address:</label>
              <input type="text" 
                    name="address" 
                    id="address" 
                    placeholder="Enter Address"
                    value={formValues.address}
                    onChange={handleInputChange}></input>
            <button type="submit">Submit</button>
          </form>
      <a href="./">or get back to contacts</a>
        </div>
    
    );
  };
  
  export default AddContact;

  
