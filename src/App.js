import logo from './logo.svg';
import './App.css';
import Contact from './Component/Contact/Contact';
import Exso from './Component/Exercice/Exso';
import About from './Component/About'
import Apropos from './Component/About';
import Calculatrice from './Component/Calculatrice'
import Technology from './Component/Technology';
import Practice from './Component/Practice';
import MyStateHook from './Component/MyStateHook/MyStateHook'
import ExerciceState from  './Component/ExerciceState'

function App() {
  return (
    <div className="App">
     <p> Hello!! Develops</p><br></br>
   
     
     <Contact/>
     <Exso/>
     <Apropos name = {'Macelia'} age={56}/>
     <Calculatrice note1={17} note2={13}/>
     <Technology/>
     <Practice message={ "Have you a Very Good Day"}/>
     <MyStateHook/>
     <ExerciceState/>
     
  
    </div>
  );
}

export default App;
