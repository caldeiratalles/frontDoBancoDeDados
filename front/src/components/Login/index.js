import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';

import './Login.css';

function Login (handleListPessoa){
  const navigation = useNavigate();
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  
  const handleLogin = async () => {
    const data = { username, senha };
    try {
      const axiosI = axios.create({ baseURL: 'https://back-endserver-production.up.railway.app'});
      const response = await axiosI.post("/userStock/login", data);
      localStorage.setItem("username", response.data.username)
      localStorage.setItem("senha", response.data.senha)
      alert("Login com sucesso");
      navigation("/home")          
    } catch (error) {
      alert("Erro no acesso a API");
    }
  }

    return(  
      <div className="login">
        <h1>Login</h1>
        <div className="form">
          <input type="username"
            name="u"
            placeholder="Username"
            required="required"
            value={username}
            onChange={(e) => setUsername(e.target.value)}/>

          <input type="password"
            name="p"
            placeholder="Password"
            required="required"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}/>

          <button className="btn btn-primary btn-block btn-large" onClick={handleLogin}>Logar</button>

          <Link to={`/createUser`}>Criar Usuario</Link>
        </div>
      </div> 
    );
}

export default Login;