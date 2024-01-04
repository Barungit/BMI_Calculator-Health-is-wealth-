import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  function handleSubmit(event){
    event.preventDefault()
    // Get the values from the input fields
    const weight = parseFloat(event.target.elements.weight.value);
    const height = parseFloat(event.target.elements.height.value);

    // Display the values in the alert
    alert(`Weight: ${weight} KGs\nHeight: ${height} cms`);
    
  }

  return (
    <div className="App d-flex justify-content-center align-items-center">
      <div className='my-3 form-Background w-50' >
        <form onSubmit={handleSubmit}>
          <label for='weight' className='my-3 mx-3'> Weight : </label>
          <input type='number' placeholder='in KGs' name='weight' />

          <br/>
          <label for='height' className='my-3 mx-3'> Height : </label>
          <input type='number' placeholder='in cms' name='height'/>
          <br/>

          <button type='submit' className=' my-3 btn btn-warning' >
          Submit!
        </button>
        </form>

        
      </div>
      
    </div>
  );
}

export default App;
