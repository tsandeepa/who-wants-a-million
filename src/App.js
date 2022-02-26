import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Home';
import Navbar from './Navbar';
import Create from './Create';
import CreateQuiz from './CreateQuestions';
import StartQuiz from './StartQuiz';
import GlobalStyle from './components/styled/Global.styled';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <div className="App">
        <Navbar/>
        <div className='content'>
        <Routes>
          <Route exact path="/"  element={<Home />} />
          <Route exact path="/create"  element={<Create/>} />
          <Route exact path="/create_qz/:id"  element={<CreateQuiz/>} />
          <Route exact path="/start_qz/:id"  element={<StartQuiz/>} />
        </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
