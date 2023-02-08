import React, {useState} from 'react';
import common from '../../services/commom';
import {useNavigate, useParams} from 'react-router-dom';
import './index.css';
import Header from '../Header';
import ToolBar from '../ToolBar';
import Footer from '../Footer';


function TrocandoSenha(){
    let params = useParams();
    const navigation = useNavigate();
    
    const [login, setLogin] = useState({
        username:"",
        senha:"",})

    const [changeLogin, setChangeLogin] = useState({
        username:"",
        senha:"",
        senhaNova:"",})
    const [reload, setReload] = useState(false)

    
    const deletar = async () => {
        try {
            console.log(login);
            await common.put('/userStock/deleteUser', login);
            alert('Dados excluidos');
            navigation("/")
        } catch (error) {
            alert('Erro no acesso a API');
        }       
    };

    const trocarSenha = async () => {
        try {
            
            await common.put('/userStock/changePassword', changeLogin);
            alert('Dados enviados');
            navigation("/")
        } catch (error) {
            alert('Erro no acesso a API');
        }       
    };

    const handleSubmitDeletar = e => {
        e.preventDefault();
        deletar();
    }

    const handleSubmitTrocar = e => {
        e.preventDefault();
        trocarSenha();
    }

    const handleDeletar = event => {
        setLogin({
          ...login,
          [event.target.name]: event.target.value
        });
      };

      const handleChange = event => {
        setChangeLogin({
          ...changeLogin,
          [event.target.name]: event.target.value
        });
      };


    return(
      <div className="container">
      {/** Aqui nós queremos apenas repetir o que está definido no componente header */}
      <div className="logo">
          <Header />
      </div>
      {/** Aqui nós queremos deixar o crud sem ser estático pois criaremos funções de editar, excluir ...*/}
      <div className="crud">
          <h3>BEM-VINDO AO ADMINISTRATIVO</h3>
      </div>
      {/** O ToolBar vai ser estático sempre, pois nós vamos apenas criar os links das paginas*/}
      <div className="ToolBar">
          <ToolBar />
      </div>
      {/** Aqui nós vamos colocar texto, formularios, informações e etc...*/}
      <div className="corpo">
      <form onSubmit={handleSubmitDeletar}>
    <div style={{ display: "block" }}>
  <label htmlFor="username">Username:</label>
  <input
    type="text"
    name="username"
    id="username"
    value={login.username}
    onChange={handleDeletar}
  />
  </div>
  <div style={{ display: "block" }}>
  <label htmlFor="senha">Senha:</label>
  <input
    type="password"
    name="senha"
    id="senha"
    value={login.senha}
    onChange={handleDeletar}
  />
  </div>
  <button type="submit">Deletar Usuário</button>
</form>
<br />
<form onSubmit={handleSubmitTrocar}>
    <div style={{ display: "block" }}>
  <label htmlFor="username">Username:</label>
  <input
    type="text"
    name="username"
    id="username"
    value={changeLogin.username}
    onChange={handleChange}
  />
  </div>
  <div style={{ display: "block" }}>
  <label htmlFor="senha">Senha:</label>
  <input
    type="password"
    name="senha"
    id="senha"
    value={changeLogin.senha}
    onChange={handleChange}
  />
  </div>
  <div style={{ display: "block" }}>
  <label htmlFor="senha">Senha Nova:</label>
  <input
    type="password"
    name="senhaNova"
    id="senhaNova"
    value={changeLogin.senhaNova}
    onChange={handleChange}
  />
  </div>
  <button type="submit">Trocar senha de usuario</button>
</form>
      </div>
      {/** O footer é sempre estático */}
      <div className="footer">
          <Footer />
      </div>
  </div>
    );
    

}

export default TrocandoSenha