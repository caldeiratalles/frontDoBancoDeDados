import './index.css';
import RoutesConfig from './RoutesConfig';

import {BrowserRouter} from 'react-router-dom';


function App() {

    
    return(

            <BrowserRouter>
                    <RoutesConfig />
            </BrowserRouter>
     
        
    );
}
export default App;