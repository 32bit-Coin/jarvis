import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
// import MyCalendar from './components/Calendar';

import Calendar from 'react-calendar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header className="jarvis-header" />
        <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/footer" exact component={Footer}/>
          <Route path="/Calendar" exact component={Calendar}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
