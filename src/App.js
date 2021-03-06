
import './App.css';
import Listapp from './Component/Listapp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { handelmek, handelSET, handelset, handelSetMovie } from './redux/action';
import Footer from './Component/Footer';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Listmekup from './Component/ListLMekup';
import ListMekup from './Component/ListLMekup';
import ListLMekup from './Component/ListLMekup';


function App() {
  const dispatch = useDispatch()


    useEffect(() => {
        let getpress =async()=>{
       try {
           let res=await axios.get("http://universities.hipolabs.com/search?country=United+States")
          dispatch(handelset(res.data)) 
          
       } catch (error) {
           console.log(error)
           
       }
       
    }
    getpress()
    }, [])
  
    

    useEffect(() => {
      let getuser=async()=>
      { try {
          let res=
          
              await axios.get(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`)
              dispatch(handelSetMovie(res.data))
              console.log(res)
          
      } catch (error) {
          console.log(error)
          
      }
     
    }
    getuser()}
     , [])
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Listapp}/>
      <Route exact path="/makeup" component={ListLMekup} />
      </Switch>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
