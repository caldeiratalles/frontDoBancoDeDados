import React, {useState} from 'react';
import common from '../../services/commom';
import viacep from '../../services/viacep';
import './CreateUser.css';
import Header from '../Header';

import {useNavigate,} from 'react-router-dom';
import ToolBar from "../ToolBar";
import Footer from "../Footer";


function CreateUser(){
    const navigation = useNavigate();
    const [userCreator, setUserCreator] = useState({
        username: "",
        senha: "",
        tipoUsuario: 2,
        nome: "",
        cpfCnpj: "",
        sexo: "",
        email: "",
        tipoEmail: 1,
        telefone: "",
        tipoTelefone: 1,
        cep: "",
        numeroEndereco: "",
        complementoEndereco: "",
        logradouro: "",
        bairro: "",
        cidade: "",
        estado: ""
      });




    const handleListEndereco = async () => {


        try {
            const response = await viacep.get(`/${userCreator.cep}/json`);
            const cep_data = response.data;
            setUserCreator(
                {
                    ...userCreator,
                    cep:cep_data.cep,
                    bairro:cep_data.bairro,
                    cidade:cep_data.cidade,
                    complemento:cep_data.complemento,
                    logradouro:cep_data.logradouro,
                    uf:cep_data.uf,
                }
            )

        } catch (error) {
            alert('Erro no acesso a API');
        }
    };

    

    const enviar = async () => {
        
        try {
            
            //setPessoa({
            //    ...pessoa, endereco:endereco, email:email,telefone:telefone
            //});
            //enviar para api
            await common.post('/userStock/createUser', userCreator);
            alert('Dados enviados');
            //redirecionar apos o envio
            navigation("/")
        } catch (error) {
            alert('Erro no acesso a API');
        }       
    };

    const handleSubmit = e => {
        e.preventDefault();
        enviar();
    }

    const handleChange = event => {
        setUserCreator({
          ...userCreator,
          [event.target.name]: event.target.value
        });
      };



    return(
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
            <h3>Criar Usuario</h3>
        </div>
          <ToolBar />
        {/** O ToolBar vai ser estático sempre, pois nós vamos apenas criar os links das paginas*/}
        {/** Aqui nós vamos colocar texto, formularios, informações e etc...*/}
        <div className="corpo">
          <div className="container-cliente">
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input type="text"
                name="username"
                id="username"
                value={userCreator.username}
                onChange={handleChange}/>
              <label htmlFor="senha">Senha:</label>
              <input type="password"
                name="senha"
                id="senha"
                value={userCreator.senha}
                onChange={handleChange}/>
              <label htmlFor="nome">Nome:</label>
              <input type="text"
                name="nome"
                id="nome"
                value={userCreator.nome}
                onChange={handleChange}/>
              <label htmlFor="cpfCnpj">CPF/CNPJ:</label>
              <input type="text"
                name="cpfCnpj"
                id="cpfCnpj"
                value={userCreator.cpfCnpj}
                onChange={handleChange}/>
              <label htmlFor="sexo">Sexo(1 Masculino, 2 Feminino ou 3 outros):</label>
              <input type="number"
                name="sexo"
                id="sexo"
                value={userCreator.sexo}
                onChange={handleChange}/>
              <label htmlFor="email">Email:</label>
              <input type="email"
                name="email"
                id="email"
                value={userCreator.email}
                onChange={handleChange}/>
              <label htmlFor="telefone">Telefone:</label>
              <input type="text"
                name="telefone"
                id="telefone"
                value={userCreator.telefone}
                onChange={handleChange}/>
              <label htmlFor="tipoTelefone">Tipo de Telefone(1 fixo ou 2 movel):</label>
              <input type="number"
                name="tipoTelefone"
                id="tipoTelefone"
                value={userCreator.tipoTelefone}
                onChange={handleChange}/>
              <label htmlFor="cep">CEP:</label>
              <input type="text"
                name="cep"
                id="cep"
                value={userCreator.cep}
                onChange={handleChange}/>
              <label htmlFor="numeroEndereco">Número do Endereço:</label>
              <input type="text"
                name="numeroEndereco"
                id="numeroEndereco"
                value={userCreator.numeroEndereco}
                onChange={handleChange}/>
              <label htmlFor="complementoEndereco">Complemento do Endereço:</label>
              <input type="text"
                name="complementoEndereco"
                id="complementoEndereco"
                value={userCreator.complementoEndereco}
                onChange={handleChange}/>
              <label htmlFor="logradouro">Logradouro:</label>
              <input type="text"
                name="logradouro"
                id="logradouro"
                value={userCreator.logradouro}
                onChange={handleChange}/>
              <label htmlFor="bairro">Bairro:</label>
              <input type="text"
                name="bairro"
                id="bairro"
                value={userCreator.bairro}
                onChange={handleChange}/>
              <label htmlFor="cidade">Cidade:</label>
              <input type="text"
                name="cidade"
                id="cidade"
                value={userCreator.cidade}
                onChange={handleChange}/>
              <label htmlFor="estado">Estado:</label>
              <input type="text"
                name="estado"
                id="estado"
                value={userCreator.estado}
                onChange={handleChange}/>
              <button className="btn btn-primary btn-lg" onClick={handleListEndereco}>
                Pesquisar CEP
              </button>
              <button type="submit">Criar Usuário</button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
}
export default CreateUser