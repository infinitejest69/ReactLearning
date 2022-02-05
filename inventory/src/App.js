import logo from './logo.svg';
import './App.css';
import Info from './Components/Info';
import YourInfo from './Components/YouClass';


function App() {
  return (
    <div className="App">
      <p>My First App</p>
      <Info Name="Jest" Telphone="012345 876596"/>
      <Info />
      <YourInfo Name="Jester" Telphone="012345 999999"/>
      <YourInfo />
    </div>
  );
}

export default App;
