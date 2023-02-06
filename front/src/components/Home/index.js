
import './index.css';

import Header from '../Header';
import ToolBar from '../ToolBar';
import Footer from '../Footer';



function Home(){


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
                <h3>Testando o corpo</h3>
            </div>
            {/** O footer é sempre estático */}
            <div className="footer">
                <Footer />
            </div>
        </div>
            
            
    );
}

export default Home;