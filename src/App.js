import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Form from './Form';

function App() {

  // function handleSubmit(event){
  //   event.preventDefault()
  //   // Get the values from the input fields
  //   const weight = parseFloat(event.target.elements.weight.value);
  //   const height = parseFloat(event.target.elements.height.value);

  //   // Display the values in the alert
  //   alert(`Weight: ${weight} KGs\nHeight: ${height} cms`);
    
  // }
  

  // form submission handler
  
  return (
    <div>
      <Form />
    </div>
  );
}

export default App;
