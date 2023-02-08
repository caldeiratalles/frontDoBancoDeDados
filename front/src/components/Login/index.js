import React, {useState} from 'react';
import './index.css';
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';


function Login (handleListPessoa){
  const navigation = useNavigate();
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(false);
  
  const handleLogin = async () => {
      const data = { username, senha };
      try {
          const response = await axios.create({ baseURL: 'back-endserver-production.up.railway.app'}).post("/userStock/login", data);
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
                <div className="form" >
                    <input type="username" name="u" placeholder="Username" required="required" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <input type="senha" name="p" placeholder="Password" required="required" value={senha} onChange={(e) => setSenha(e.target.value)}/>
                    <button class="btn btn-primary btn-block btn-large" onClick={handleLogin}>Logar</button>
                </div>
                <Link to={`/createUser`}>Criar Usuario</Link>
            </div>
            
            
      );
}

export default Login;