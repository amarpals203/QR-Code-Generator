import './App.css';
import CreateQR from './components/CreateQR';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReadQR from './components/ReadQR';

function App() {
  return (
    <>
     <div className='container-fluid'>
        <h1 className='my-5 text-center display-2'>QR Code Reader Generator</h1>
        <div className='row'>
          <CreateQR />  
          <ReadQR />
        </div>
     </div>
    </>
  );
}

export default App;
