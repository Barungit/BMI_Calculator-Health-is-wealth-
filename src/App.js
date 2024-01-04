import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {

  // function handleSubmit(event){
  //   event.preventDefault()
  //   // Get the values from the input fields
  //   const weight = parseFloat(event.target.elements.weight.value);
  //   const height = parseFloat(event.target.elements.height.value);

  //   // Display the values in the alert
  //   alert(`Weight: ${weight} KGs\nHeight: ${height} cms`);
    
  // }
  const [formData, setFormData] = useState({});
  const [formValues, setFormValues] = useState([]);

  // form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValues(Object.entries(formData));
  };

  // input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="App d-flex justify-content-center align-items-center">
      <div className='my-3 form-Background w-50' >
        <form onSubmit={handleSubmit}>
          <label for='weight' className='my-3 mx-3'> Weight : </label>
          <input type='number' placeholder='in KGs' name='weight' onChange={handleChange} />

          <br/>
          <label for='height' className='my-3 mx-3'> Height : </label>
          <input type='number' placeholder='in cms' name='height' onChange={handleChange}/>
          <br/>

          <button type='submit' className=' my-3 btn btn-warning' >
          Submit!
        </button>
        </form>
        <div>
        {/* <pre>{JSON.stringify(formValues, null, 2)}</pre> */}
        <div>
        <h2>Form Values:</h2>
        <ul>
          {formValues.map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>
      </div>
        
      </div>
      
    </div>
  );
}

export default App;
