import './Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Result from './Result';

function Form(){
const [formData, setFormData] = useState({});
const [formValues, setFormValues] = useState([]);
const [disp,setDisp] = useState(false);
const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();
    setDisp(true);
    setFormValues(Object.entries(formData));
    
   // navigate("/result")
  };

  // input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return(
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
        {disp && <h2>Form Values: </h2>}
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
export default Form;