import { Link}  from 'react-router-dom';
import './erro.css'

function Erro() {

    return (
        <div className='errotudo'>
        <div className='erro'>
            <h1>ERRO</h1>
            <h2 className='h2erro'>404</h2>
            <h1>Página não encontrada   </h1>
            <Link to="/">
                    <p className='perro'>  Voltar </p>
                    </Link>
            </div>
        </div>
    );

}
   

export default Erro;