import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './NavigationBar';
import Analytics from './components/Analytics';
import { Container } from 'react-bootstrap';
import FormFill from './components/scheduleDrive/FormFill';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>

      <BrowserRouter>
        <div className='body pb-5'>
          <NavigationBar />
          {/* <Container className='my-5'><Analytics /></Container> */}
        </div>
      </BrowserRouter>

    </>
  );
}

export default App;
