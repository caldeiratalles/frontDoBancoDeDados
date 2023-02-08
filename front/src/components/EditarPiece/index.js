import React, {useEffect, useState} from 'react';
import commom from '../../services/commom';
import {useNavigate, useParams} from 'react-router-dom';
import Header from '../Header';
import './index.css';


function EditarPiece(){
    let params = useParams();
    let paramsID = params.id;
    const navigation = useNavigate();
    const [login, setLogin] = useState({
        username:localStorage.getItem("username"),
        senha:localStorage.getItem("senha")})
    const [stockSimples, setStockSimple] = useState({
        id_item:paramsID,
        item:"",
        descricao:"",
        qtd_estoque:"",
        imagem:"",
        td_categoria_id_categoria:"",
    });


    const [reload, setReload] = useState(false)

    const handleStock = async () => {


        try {
            console.log(paramsID);
            console.log(login);
            const response = await commom.post(`/stock/byPiece/${paramsID}`);
            const list = response.data;

            setStockSimple(list);
            console.log();

        } catch (error) {
            alert('Erro no acesso a API');
        }
    };
    //[executa algo apos fazer algo antes]
    useEffect(() => {
        handleStock()
    }, [reload])

    const editar_peca = async () => {
        //console.log(id_p);
        try {
            //(path,body(tem que explicitar que está enviando um tipo de data),config) => axios
            console.log(stockSimples);
            const response = await commom.put(`/stock/editar`, stockSimples);
            alert('Dados Atualizados');
            navigation("/home")
        } catch (error) {
            alert('Erro no acesso a API');
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        editar_peca();
    }

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      };

      const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setStockSimple({ ...stockSimples, imagem: base64 });
    };

    const handleChange = event => {
        setStockSimple({
          ...stockSimples,
          [event.target.name]: event.target.value
        });
      };


    return(
        <div className="header-master">
            <Header/>
            <div className="container-cliente">
                
    
                <div className="container--cliente">
                <p>
1	Processador AMD
<br/>
2	Processador Intel
<br/>
3	Placa mãe AMD
<br/>
4	Placa mãe Intel
<br/>
5	Memoria DDR4 4 GB
<br/>
6	Memoria DDR4 8 GB
<br/>
7	Memoria DDR4 16 GB
<br/>
8	HD
<br/>
9	SSD
</p>
                    <form onSubmit={handleSubmit} style={{ display: "block" }}>
                        <div className="container--labels">
                            <label for="lname">Item:</label>
                            <br />
                            <label for="fname">Descricao:</label>
                            <br />
                            <label for="lname">Quantidade em estoque:</label>
                            <br />
                            <label for="lname">Imagem:</label>                        
                        </div>
                        



                        <div className="container--inputs" style={{ display: "block" }}>
                            <input type="text" id="item" name="item"  value={stockSimples.item} placeholder="" onChange={handleChange} required="required" />
                            <br />
                            <input type="text" id="descricao" name="descricao" value={stockSimples.descricao} placeholder="" onChange={handleChange}required="required"/>
                            <br />
                            <input type="number" id="qtd_estoque" name="qtd_estoque" value={stockSimples.qtd_estoque} placeholder="" onChange={handleChange}required="required"/>
                            <br />
                            <input type="number" id="td_categoria_id_categoria" name="td_categoria_id_categoria" value={stockSimples.td_categoria_id_categoria} placeholder="" onChange={handleChange}required="required"/>
                            <br />
                            <input type="file" multiple accept="image/*" onChange={e => handleFileUpload(e)}/>
                            <br />
                            <button className="btn btn-primary btn-lg ">
                            Enviar Dados
                            </button>
                        </div>

                    </form> 
    
                </div>
            </div>
        </div>
        );

}

export default EditarPiece;