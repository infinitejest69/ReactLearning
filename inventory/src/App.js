import logo from './logo.svg';
import './App.css';
import Info from './Components/Info';


function App() {
  return (
    <div className="App">
      <p>My First App</p>
      <Info Name="Jest" Telphone="012345 876596"/>
      <Info />
    </div>
  );
}

export default App;
