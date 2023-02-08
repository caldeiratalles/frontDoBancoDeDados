import './ToolBar.css';
import {Link,} from 'react-router-dom';


function ToolBar(){


    return(    
        <div className="container-tool" style={{textDecoration: "none", color: "black", display: "flex"}}>
            <div className="f1">
                <Link to={`/home`} style={{textDecoration: "none", color: "black", padding: "10px"}}>Home</Link>
            </div>
            <div className="f2">
                <Link to={`/allPiece`} style={{textDecoration: "none", color: "black", padding: "10px"}}>Todas peças</Link>
            </div>
            <div className="f3">
                <Link to={`/createDonation`} style={{textDecoration: "none", color: "black", padding: "10px"}}>Doar peça para o sistema</Link>
            </div>
            {/* Criar rota do balanço e criar componente balanço com suas funções */}
            <div className="f4">
                <Link to={`/requestDonation`} style={{textDecoration: "none", color: "black" , padding: "10px"}}>Requisitar peça para você</Link>
            </div>
            {/* Criar rota do produtos e criar componente produtos com suas funções */}
            <div className="f5">
                <Link to={`/createUser`} style={{textDecoration: "none", color: "black" , padding: "10px"}}>Criar usuario novo</Link>
            </div>
            {/* Criar rota do vendas e criar componente vendas com suas funções */}
            <div className="f6">
                <Link to={`/changePassword`} style={{textDecoration: "none", color: "black", padding: "10px"}}>Trocar senha</Link>
            </div>
        </div>
            
    );
}

export default ToolBar;
