import './App.css';

function App() {
  return (
    <div className="app--container">
      <div className='register--container'>
        <h1 className='register--title'>Scrim Shop</h1>

        <input type="text" name="nome" placeholder="Nome" className="register--input"/>
        <input type="text" name="preco" placeholder="Preco" className="register--input"/>
        <input type="text" name="categoria" placeholder="Categoria" className="register--input"/>
        <button className='register--button'>Cadastrar</button>
      </div>
    </div>
  );
}

export default App;
