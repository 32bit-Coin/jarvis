import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import MyCal from './components/Calendar';
// import Calendar from 'react-calendar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Tania from './components/Tania'
import Honesty from './components/Honesty';

function App() {
  return (
    <div className="App">
      <Router>
        <Header className="jarvis-header" vara="test"/>
        <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/footer" exact component={Footer}/>
          {/* <Route path="/Calendar" exact component={Calendar}/> */}
          <Route path="/MyCal" exact component={MyCal}/>
          <Route path="/Tania" exact component={Tania}/>
          <Route path="/Honesty" exact component={Honesty}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
