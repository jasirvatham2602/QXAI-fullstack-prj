import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyNavBar from './NavBar.jsx'
import './App.css'
import TheForm from './TheForm.jsx'
import AIPage from './AIPage.jsx' 
// import 
// function fetchTime() {
//   useEffect(() => {
//     fetch('http://localhost:8001/time').then(res => res.json()).then((data) => {
//       setTime(data.time)
//       console.log(data.time);
//     } ).catch((err) => console.log(err))
//   }, []); 
// }
function App() {
  // const [count, setCount] = useState(0)
  const [message, setMessage] = useState("Loading..."); 
  const [time, setTime] = useState("-1"); 

  // useEffect(() => {
  //   fetch('http://localhost:8001/').then(res => res.json()).then((data) => setMessage(data.status)).catch((err) => console.log(err))
  // }, []); 
  // useEffect(() => {
  //   fetch('http://localhost:8001/time').then(res => res.json()).then((data) => {
  //     setTime(data.time)
  //     console.log(data.time);
  //   } ).catch((err) => console.log(err))
  // }, []); 
//   useEffect(() => {
//   fetch('http://localhost:8001/time').then(res => res.json()).then((data) => {
//     setTime(data.time) 
//   } ).catch((err) => console.log(err))
// }, []); 
  // setInterval(() => fetch('http://localhost:8001/time').then(res => res.json()).then((data) => {
  //   setTime(data.time) 
  // } ).catch((err) => console.log(err)), 1000);
  useEffect(() => {
    fetch('https://jasirvatham2602-qxai-backend-hugging-face.hf.space/').then(res => res.json()).then((data) => setMessage(data.status)).catch((err) => console.log(err))
  }, []); 
  return (
    <>
      <div>
          <MyNavBar></MyNavBar> 
      </div> 
    </>
  );
};

export default App; 
