import React, {useState} from 'react';
import common from '../../services/commom';
import './CreateDonation.css';

import {useNavigate,} from 'react-router-dom';
import Header from "../Header";
import ToolBar from "../ToolBar";
import Footer from "../Footer";

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

    const options = [
        {value: 0, text: '--Choose an option--'},
        {value: 1, text: 'Processador AMD'},
        {value: 2, text: 'Processador Intel'},
        {value: 3, text: 'Placa mãe AMD'},
        {value: 4, text: 'Placa mãe INTEL'},
        {value: 5, text: 'Memoria DDR4 4 GB'},
        {value: 6, text: 'Memoria DDR4 8 GB'},
        {value: 7, text: 'Memoria DDR4 16 GB'},
        {value: 8, text: 'HD'},
        {value: 9, text: 'SSD'},
    ];

    const [selected, setSelected] = useState(options[0].value);

    const handleChanges = event => {
        setSelected(event.target.value);
        setCreateDonation({...createDonation, td_categoria_id_categoria_item: event.target.value})
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
                  <ToolBar />
                  {/** O ToolBar vai ser estático sempre, pois nós vamos apenas criar os links das paginas*/}
                  {/** Aqui nós vamos colocar texto, formularios, informações e etc...*/}
                  <div className="corpo">
                      <div className="container-cliente">
                          <form onSubmit={handleSubmit}>

                                  <label>Item:</label>
                                  <input
                                      type="text"
                                      name="item_item"
                                      value={createDonation.item_item}
                                      onChange={handleChange}
                                  />


                                  <label>Descrição:</label>
                                  <input
                                      type="text"
                                      name="descricao_item"
                                      value={createDonation.descricao_item}
                                      onChange={handleChange}
                                  />


                                  <label>Quantidade para doação no Estoque:</label>
                                  <input
                                      type="number"
                                      name="qtd_estoque_item"
                                      value={createDonation.qtd_estoque_item}
                                      onChange={handleChange}
                                  />


                                  <label>Imagem:</label>
                                  <input
                                      type="file"
                                      name="imagem_item"
                                      onChange={e => handleFileUpload(e)}
                                  />
                              <label>Categoria:</label>

                              <select id="td_categoria_id_categoria" value={selected} onChange={handleChanges}>
                                  {options.map(option => (
                                      <option key={option.value} value={option.value}>
                                          {option.text}
                                      </option>
                                  ))}
                              </select>
                              <button type="submit">Criar Doação</button>
                          </form>
                      </div>
                  </div>
                  <Footer />
              </div>
          );
}
export default CreateDonation