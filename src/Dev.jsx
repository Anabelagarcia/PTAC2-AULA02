export function Exemplo({lista}){
    return (
        <div>
            {lista.map(aluno=>(
                <ul>
                    <li>{aluno}</li>
                </ul>
            ))}
            <h2>Meu nome é : {nome} </h2>
        </div>
    );
}