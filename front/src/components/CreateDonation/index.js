import React, {useState} from 'react';
import common from '../../services/commom';
import './CreateDonation.css';

import {useNavigate,} from 'react-router-dom';
import Header from "../Header";

function CreateDonation(){
    const navigation = useNavigate();

    const [login, setLogin] = useState({
        username:localStorage.getItem("username"),
        senha:localStorage.getItem("senha")})

    const [createDonation, setCreateDonation] = useState({
        item_item: "",
        descricao_item: "",
        qtd_estoque_item: "",
        imagem_item: "",
        td_categoria_id_categoria_item: "",
        login_usuario: login.username,
        recebe: 1,
        doa: null,
        qtd_doa: null,
      });



    

    const enviar = async () => {
        
        try {
            console.log(createDonation);
            const response = await common.post('/stock/createDonation', createDonation);
            alert('Dados enviados');
            //redirecionar apos o envio
            navigation("/AllPiece")
        } catch (error) {
            alert('Erro no acesso a API');
        }       
    };

    const handleSubmit = e => {
        e.preventDefault();
        enviar();
    }

    const handleChange = (event) => {
        setCreateDonation({
          ...createDonation,
          [event.target.name]: event.target.value,
        });
      };

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
        setCreateDonation({ ...createDonation, imagem: base64 });
    };

        

        
          return (
              <div className="container">
                  {/** Aqui nós queremos apenas repetir o que está definido no componente header */}
                  <div className="logo">
                      <Header />
                  </div>
                  {/** Aqui nós queremos deixar o crud sem ser estático pois criaremos funções de editar, excluir ...,
                   * Tarefa: Modificar com os cruds corretos do criar cliente
                   * obs: Olhar as collections e olhar o componente section que vcs vão entender
                   */}
                  <div className="crud">
                      <h3>Criar doação para o sistema</h3>
                  </div>
                  {/** O ToolBar vai ser estático sempre, pois nós vamos apenas criar os links das paginas*/}
                  {/** Aqui nós vamos colocar texto, formularios, informações e etc...*/}
                  <div className="corpo">
                      <div className="container-cliente">
                          <form onSubmit={handleSubmit}>
                              <div style={{ display: "block" }}>
                                  <label>Item:</label>
                                  <input
                                      type="text"
                                      name="item_item"
                                      value={createDonation.item_item}
                                      onChange={handleChange}
                                  />
                              </div>
                              <div style={{ display: "block" }}>
                                  <label>Descrição:</label>
                                  <input
                                      type="text"
                                      name="descricao_item"
                                      value={createDonation.descricao_item}
                                      onChange={handleChange}
                                  />
                              </div>
                              <div style={{ display: "block" }}>
                                  <label>Quantidade para doação no Estoque:</label>
                                  <input
                                      type="number"
                                      name="qtd_estoque_item"
                                      value={createDonation.qtd_estoque_item}
                                      onChange={handleChange}
                                  />
                              </div>
                              <div style={{ display: "block" }}>
                                  <label>Imagem:</label>
                                  <input
                                      type="file"
                                      name="imagem_item"
                                      onChange={e => handleFileUpload(e)}
                                  />
                              </div>
                              <div style={{ display: "block" }}>
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
                                  <label>Categoria:</label>
                                  <input
                                      type="number"
                                      name="td_categoria_id_categoria_item"
                                      value={createDonation.td_categoria_id_categoria_item}
                                      onChange={handleChange}
                                  />
                              </div>
                              <button type="submit">Criar Doação</button>
                          </form>
                      </div>
                  </div>
                  {/** O footer é sempre estático */}
              </div>
          );
}
export default CreateDonation