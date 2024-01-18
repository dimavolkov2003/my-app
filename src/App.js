import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Profile from './components/Profile';

function App() {
  return (
    <div>
      <Header />
      <div className = "wrapper-main">
        <NavBar />
        <Profile />
      </div>
    </div>
  );
}

export default App;
