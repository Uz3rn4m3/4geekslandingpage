import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
    <Navbar />
    <div className='container mt-2' style={{
      marginTop: 40}}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      </div>
  );
}

export default App;
