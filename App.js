import{useState} from 'react';
import { FiSearch } from 'react-icons/fi';
import api from './services/api';
import './styles.css';

function App() {
 

  const[input, setInput] = useState('')


  function handleSearch(){
  // 22795565/json/

  if(input === ''){
    alert("Preencha algum cpe!")
    return;
  }


  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
    
      <div className="containerInput">
        <input
         type="text"
         placeholder="Digite seu cep..."
         value={input}
         onChange={(e) => setInput(e.target.value) }
         />
  
        <button className="buttonSearch" onClick={handleSearch}>
           <FiSearch size={25} color="#FFF"/>
        </button>
       </div>
       
        <main className="main">
           <h2>CEP:22735565</h2>

           <span>RUA TESTE</span>
           <span>COMPLEMENTO</span>
           <span>BAIRRO</span>
           <span> Rio de janeiro- Rj</span>
           

        </main>

        </div>
    
  );
}


export default app;