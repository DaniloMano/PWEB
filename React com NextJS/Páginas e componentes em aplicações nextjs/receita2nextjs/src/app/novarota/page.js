import { MariaPrea } from "./componentes/componentes"
import { Mensagem } from "./componentes/mensagem";

export default function NovaRotaHome(){
    return (
       <div>
          <h1>Nova Rota, Nova Página</h1>
            <MariaPrea/>
            <Mensagem texto="Morreu Maria Preá... -> isso é uma propriedade._."/>
       </div>
    ) 
}

export function NewYear() {
   return (
     <div>
       <h1>Feliz Ano Novo!</h1>
       <p>Que este novo ano traga muita alegria, paz e realizações para você!</p>
     </div>
   );
 }
 