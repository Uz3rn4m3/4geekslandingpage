import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className='container mt-2' style={{
      marginTop: 40}}>
        <Switch>
          <Route exact path='/Home'>
        <Home />
        </Route>
        <Route exact path='/About'>
        <About />
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
