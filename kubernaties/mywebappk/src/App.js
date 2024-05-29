import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Kubernaties and docker learning ========== v2
        </p>
        <p>
          Kubernaties and docker learning === v2
        </p>
        <a
          className="App-link"
          href="https://kubernetes.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Kubernaties
        </a>
      </header>
    </div>
  );
}

export default App;
