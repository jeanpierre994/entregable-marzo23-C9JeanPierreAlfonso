import { useState } from 'react'
import './App.css'
import { Card } from './Card';
import { Form } from './Form';

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const[data, setData] = useState({})
  const onSubmit = (data) => {
    setData(data)
  };
  console.log(data)

  return (
    <div className="App">
      <h1>Jean Pierre Alfonso Front III</h1>
      <div className='divPrincipal'>
        <Form onSubmit={onSubmit} />
        {(data.name != undefined) && 
        <Card info={data}/>
        }
      </div>

      <form>{/* aqui deberias escribir tu codigo */}</form>
    </div>
  );
}

export default App;
