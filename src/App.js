import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Cards from './components/cards';

function App() {
  
  const [values, setValues] = useState();
  const [listGames, setListGames] = useState();

  const handleChangeValues = value => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    axios.post("http://localhost:3002/register",{
      nome: values.nome,
      preco: values.preco,
      categoria: values.categoria
    }).then((res)=> {
      console.log(res);
    });
    console.log(values);
  };

  console.log(listGames);
  useEffect(() => {
    axios.get("http://localhost:3002/getCards").then((res)=>{
      setListGames(res.data);
    });
  }, []);


  return (
    <div className="app--container">
      <div className='register--container'>
        <h1 className='register--title'>Scrim Shop</h1>

        <input type="text" name="nome" placeholder="Nome" className="register--input" onChange={handleChangeValues}/>
        <input type="text" name="preco" placeholder="Preco" className="register--input"onChange={handleChangeValues}/>
        <input type="text" name="categoria" placeholder="Categoria" className="register--input"onChange={handleChangeValues}/>
        <button className='register--button' onClick={()=> {handleClickButton()}}>Cadastrar</button>
      </div>
      {typeof listGames !== "undefined" && listGames.map((value) => {
         return <Cards key={value.id} listCard={listGames} setListCard={setListGames} id={value.id} nome={value.nome} preco={value.preco} categoria={value.categoria}/>
      })
      }
    </div>
  );
}

export default App;
