import './ToolBar.css';
import {Link,} from 'react-router-dom';


function ToolBar(){


    return(    
        <div className="container-tool" style={{display: "inline-block"}}>
            <div className="f1" style={{display: "inline-block"}}>
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
                <Link to={`/requestDonation`}>Requisitar peça para você</Link>
            </div>
            {/* Criar rota do produtos e criar componente produtos com suas funções */}
            <div className="f5">
                <Link to={`/createUser`}>Criar usuario novo</Link>
            </div>
            {/* Criar rota do vendas e criar componente vendas com suas funções */}
            <div className="f6">
                <Link to={`/changePassword`}>Trocar senha</Link>
            </div>
            <div className="f6">
                <Link to={`/changePassword`}>Deletar usuario</Link>
            </div>
        </div>
            
    );
}

export default ToolBar;
