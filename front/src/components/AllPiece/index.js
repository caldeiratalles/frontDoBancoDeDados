import React,{ useState, useEffect } from 'react';
import commom from '../../services/commom';
import { Link,useNavigate } from 'react-router-dom';
import Header from '../Header';

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
                    pathname: `/editarPiece/${id}`
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
        <div className="container--section">
            {stockSimples.map(list => {
                return (
                    <div key={list.id_item}>
                        <hr/>
                        <p>Item: {list?.item}</p>
                        <p>Descricao: {list?.descricao}</p>
                        <p>Quantidade em estoque: {list?.qtd_estoque}</p>
                        <img src={list?.imagem} alt="Red dot" />
                        <p>Categoria: {list?.td_categoria_id_categoria}</p>
                        <hr/>
                        <button className="btn btn-primary btn-lg" onClick={() => (delete_peca(list.id_item))}>
                            Deletar 
                        </button>
                        <button className="btn btn-primary btn-lg">
                        {editClientButton(list.id_item)}
                        </button>
                        <br/>
                    </div>
                )
            })}
        </div>
    )

}

export default AllPiece;