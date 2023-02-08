import {Route, Routes} from 'react-router-dom';
import AllPiece from './components/AllPiece';
import Home from './components/Home';
import CreateUser from './components/CreateUser';
import TrocandoSenha from './components/TrocandoSenha';
import Login from './components/Login'
import CreateDonation from './components/CreateDonation'
import EditarPiece from './components/EditarPiece'
import PrivateRoutes from './PrivateRoute';
import RequestDonation from './components/RequestDonation';
import * as React from 'react';


const RoutesConfig = () => {
    return(
            <Routes>
                <Route exact path="/" element={<Login />}/>
                <Route exact path="/createUser" element={ <CreateUser /> }/>
                <Route element={<PrivateRoutes />}>
                    <Route exact path="/allPiece" element={ <AllPiece /> }/>
                    <Route exact path="/createDonation" element={ <CreateDonation /> }/>
                    <Route exact path="/editPiece/:id" element={ <EditarPiece /> }/>
                    <Route exact path="/requestDonation" element={<RequestDonation />}/>
                    <Route exact path="/changePassword" element={ <TrocandoSenha /> }/>
                </Route>
                <Route exact path="/home" element={ <Home /> }/>
                {/*<Route exact path="/home" element={ <Home /> }/>
                <Route exact path="/section" element={ <Section /> }/>
                <Route exact path="/criar_cliente" element={ <CriarCliente /> }/>
                <Route exact path="/editar/:id" element={<Editar />}/>*/}
            </Routes>
        
    );
}
export default RoutesConfig