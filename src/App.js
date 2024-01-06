import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Form from './Form';
import Result from './Result';

function App() {
  return (
    <div>
     <BrowserRouter basename="/BMI_Calculator-Health-is-wealth-">
       <Routes>
         <Route path="/" element={<Form />}/>
         <Route path="/result" element={<Result />}/>
       </Routes>
     </BrowserRouter>
 
   </div>
  );
}

export default App;
