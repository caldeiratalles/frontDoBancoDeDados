import React, {useEffect, useState} from 'react';
import commom from '../../services/commom';
import {Link, useNavigate} from 'react-router-dom';
import Header from '../Header';
import ToolBar from '../ToolBar';
import Footer from '../Footer';
import "../AllPiece/indexAllPiece.css";

function AllPiece(){
    //use state sempre no inicio
    const navigation = useNavigate();
    const [login, setLogin] = useState({
        username:localStorage.getItem("username"),
        senha:localStorage.getItem("senha")})

    const [stockSimples, setStockSimple] = useState([])
    const [reload, setReload] = useState(false)

    const editClientButton = (id) => (
        <Link to={{
                    pathname: `/editPiece/${id}`
                }}>
                    editar
        </Link>
        );

    const handleListStock = async () => {


        try {
            console.log(login);
            const response = await commom.get('/stock/allPiece');
            const list = response.data;

            setStockSimple(list);
            console.log(list);

        } catch (error) {
            alert('Erro no acesso a API');
        }
    };
    //[executa algo apos fazer algo antes]
    useEffect(() => {
        handleListStock()
    }, [reload])


    const delete_peca = async (id_item) => {

        //console.log(id_p);
        try {
            //(path,body(tem que explicitar que está enviando um tipo de data),config) => axios
            const response = await commom.delete(`/stock/delete/${id_item}`);
            navigation("/home");
            
            console.log();
        } catch (error) {
            alert('Erro no acesso a API');
        }
    };


        return(   
            <div className="container">
                {/** Aqui nós queremos apenas repetir o que está definido no componente header */}
                <div className="logo">
                    <Header />
                </div>
                {/** Aqui nós queremos deixar o crud sem ser estático pois criaremos funções de editar, excluir ...*/}
                <div className="crud">
                    <h3>Todas peças disponíveis</h3>
                </div>
                {/** O ToolBar vai ser estático sempre, pois nós vamos apenas criar os links das paginas*/}
                <div className="ToolBar">
                    <ToolBar />
                </div>
                {/** Aqui nós vamos colocar texto, formularios, informações e etc...*/}
                <div className="corpo">
                <div className="container--section">
                {stockSimples.map(list => {
                return (
                    <div key={list.id_item} className="stock-item">
                        <hr className="item-hr"/>
                        <p className="item-title">Item: {list?.item}</p>
                        <p className="item-desc">Descricao: {list?.descricao}</p>
                        <p className="item-qty">Quantidade em estoque: {list?.qtd_estoque}</p>
                        <img src={list?.imagem} alt="Red dot" className="item-img"/>
                        <p className="item-cat">Categoria: {list?.td_categoria_id_categoria}</p>
                        <hr className="item-hr"/>
                        <div className="item-btns">
                            <button className="btn btn-primary btn-lg" onClick={() => (delete_peca(list.id_item))}>
                                Deletar 
                            </button>
                            <button className="btn btn-primary btn-lg">
                                {editClientButton(list.id_item)}
                            </button>
                        </div>
                        <br />
                    </div>
                )
            })}

        </div>
                </div>
                {/** O footer é sempre estático */}
                <div className="footer">
                    <Footer />
                </div>
            </div>
                
                
        );
}

export default AllPiece;