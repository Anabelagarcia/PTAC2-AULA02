import './app.css'
import { Exemplo } from './Exemplo'
export default function App({nome}) {
  
  const lista = [
    {nome: "Victor", idade: 16, cidade: "Batayporã"},
    {nome: "Analinda", idade: 16, cidade: "Nova York"},
    {nome: "Anabela", idade: 16, cidade: "Nova Andradina"},
  ]
  return (
      <div>

        
        <Exemplo lista = {lista} />

        </div>
  
    );
  }
  