import React from 'react';
import './App.css';
import Infoform from './component/form';
import Table from './component/Table';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
       dataarr: [{name:"",
        age:0,
        email:''}]
    };
  } 
  create = data =>{
    axios.post('http://localhost:3001/user/newuser',data).then(res=>{
    console.log(res);
  });
  }

  componentDidMount(){
    this.getAll();
  }

  getAll=()=>{
    console.log('get all worked');
    axios.get('http://localhost:3001/user/alluser').then(res =>{
      this.setState({
        dataarr:res.data
      })
    })
  }

  delOne = async id =>{
    await axios.delete('http://localhost:3001/user/deleteuser/'+id).then(res=>{
      console.log(res);
    });
    this.getAll();
  }

  editData= async data =>{
    this.setState({
      dataarr : [data]
    });
    console.log(data);
    return true
  }

  editDataSubmit = async data=>{
    axios.patch('http://localhost:3001/user/updateuser/'+data._id,data).then(res=>{
      console.log(res);
    });
  }

  render() {
    return (
    <div className="container">
    <div className="formdiv">
      <h1>CRUD with api (a practice project)</h1>
      <Infoform forminfo={this.create} editInfo={this.state.dataarr} editSubmit={this.editDataSubmit}/>
      </div>
      
    <div className="infodiv">
    <h2>This is the infos in db</h2>
      <Table data={this.state.dataarr} del={this.delOne} edit={this.editData}/>
      </div>  
    </div>
  );
}
}

export default App;
