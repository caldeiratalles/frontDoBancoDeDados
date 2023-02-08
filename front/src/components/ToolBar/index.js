import './ToolBar.css';
import {Link,} from 'react-router-dom';


function ToolBar(){


    return(    
        <div className="container-tool">
            <div className="f1">
                <Link to={`/home`}>Home</Link>
            </div>
            <div className="f2">
                <Link to={`/allPiece`}>Todas peças</Link>
            </div>
            <div className="f3">
                <Link to={`/createDonation`}>Doar peça para o sistema</Link>
            </div>
            {/* Criar rota do balanço e criar componente balanço com suas funções */}
            <div className="f4">
                <Link to={`/requisitarDoacao`}>Requisitar peça para você</Link>
            </div>
            {/* Criar rota do produtos e criar componente produtos com suas funções */}
            <div className="f5">
                <Link to={`/criarUsuario`}>Criar usuario novo</Link>
            </div>
            {/* Criar rota do vendas e criar componente vendas com suas funções */}
            <div className="f6">
                <Link to={`/trocandoSenha`}>Trocar senha</Link>
            </div>
            <div className="f6">
                <Link to={`/trocandoSenha`}>Deletar usuario</Link>
            </div>
        </div>
            
    );
}

export default ToolBar;
