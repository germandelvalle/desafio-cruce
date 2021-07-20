//import Catalogo from "./Catalogo"
import {db} from '../firebase/client'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
  } from "react-router-dom";
import Header from "./Header";
import AddProduct from "./AddProduct";
import EditProduct from './EditProduct'
import CatalogoApi from "./CatalogoApi";
import Welcome from "./Welcome";

const Main = ({dataUser})=>{

    const addProductFunc = async (prod)=>{
        await db.collection('products').doc().set(prod)
        console.log('agregadaaaaaaaaaa')
     }
    
     
    return(
        <main className="container-fluid">
            <Router>
            <Header  />
            
                <Switch>
                    <Route exact path='/'>
                        <Welcome userName={dataUser.name}/>
                    </Route>
                    {/* <Route path='/catalogo'>
                        <Catalogo/>
                    </Route> */}
                    <Route path='/agregarproducto'>
                        <AddProduct addProductFunc={addProductFunc}/>
                    </Route>
                    <Route path='/editarproducto'>
                        <EditProduct addProductFunc={addProductFunc}/>
                    </Route>
                    <Route path='/catalogoapi'>
                        <CatalogoApi/>
                    </Route>
                </Switch>
            </Router>
            

        </main>
    )
}

export default Main