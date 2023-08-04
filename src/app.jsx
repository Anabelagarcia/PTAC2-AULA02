import './app.css'
import { Exemplo } from './exemplo'
export default function App({nome}) {
  const listaAlunos = ["João","Maria","Marcos","Tereza"];
  return (
      <div>

        <h1>Meu nome é {nome} </h1>
        <Exemplo lista = {listaAlunos} />

        </div>
  
    );
  }
  