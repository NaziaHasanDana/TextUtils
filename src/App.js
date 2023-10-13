
import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import {useState} from 'react'
import Alert from './Alert';


function App() {
  const [mode, setMode]= useState('light'); //by default false, whether dark mode is enabled or not 
  const [alert, setAlert]= useState(null); 
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.title= 'TextUtils - Dark Mode On';// it enables the dark mode in the webpage title
      setInterval(()=>{
        document.title = "TextUtils is Amazing Mode";
      }, 2000);
      setInterval(()=>{
        document.title = "Install TextUtlis Now";
      }, 1000);
    }
    else{
      setMode ('light'); 
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }




  return (
    <>  
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="Container my-1">
   <TextForm showAlert={showAlert} heading="Enter your full name"  mode={mode}/>
    {/*<About/>*/}
    </div>

    </>

  );
}

export default App;
