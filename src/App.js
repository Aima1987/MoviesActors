import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ModalPage from './components/ModalPage';
import './App.css';

class App extends React.Component{
constructor(){
  super()
  this.state = {
    data:[],
    imgUrl:"http://images.tmdb.org/t/p/w185",
    openModal:false
  }
}
componentDidMount(){
 
  (async ()=>{
    const API = "https://api.themoviedb.org/3/person/popular?api_key=99b7e54dffb135e088fc5567896050e7&language=en"
    try{
    const req = await fetch(API)
    const res = await req.json()
    this.setState({data:res.results})
  }catch(err){
    console.log(err.message)
  }
  })()
}
modal = (movie) =>{
  this.setState({openModal:!this.state.openModal})
}
  render(){
    return(
      <div className='actors'>
        {this.state.openModal ?<ModalPage></ModalPage>:null}
        {
          this.state.data.map(movie=>{
           return(
            <div className='actor' onClick={()=> this.modal(movie)}>
             <img src={`${this.state.imgUrl}${movie.profile_path}`}/>
             <h3>{movie.name}</h3>

             <div className='knowfor'>
               {movie.known_for.map(el=>{
                  return <span>{el.original_title} </span>
                })
             }
             </div>
             </div>)
          })
        }
      </div>
    )
  }
}

export default App;
