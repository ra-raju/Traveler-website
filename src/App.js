import './App.css';
import Header from './Components/SharedPage/Header/Header';
import AuthProvider from './Contexts/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
      </AuthProvider>
    </div>
  );
}

export default App;
