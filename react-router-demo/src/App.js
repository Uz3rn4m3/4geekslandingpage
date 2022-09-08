
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Jumbotron />
      <div className='row'>
        <div className='col-sm-3'>
      <Card cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."/>
      </div>
      <div className='col-sm-3'>
      <Card cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."/>
      </div>
      <div className='col-sm-3'>
      <Card cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."/>
      </div>
      <div className='col-sm-3'>
      <Card cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."/>
      </div>
      </div>
      <Footer />
      </div>
     
  );
}

export default App;
