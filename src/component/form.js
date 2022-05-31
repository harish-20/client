import React, { Component } from 'react';

class Infoform extends Component {
    constructor(props){
        super();
        this.state={
            name:'',
            age:0,
            email:'',
            isEdit:false
        }
    }
    componentWillReceiveProps(){
        console.log('will mount on');
        console.log(Boolean(this.props.edit));
        const editinfo=this.props.editinfo;
        if(this.props.edit){
        }
    }
    submithandle= e =>{
        e.preventDefault();
        if(this.state.isEdit){
            const info={
                name:this.state.name,
                age:this.state.age,
                email:this.state.email
            };
            this.setState({
                isEdit:false
            })
            this.props.editData(info);
        }
        else{
        const info={
            name:this.state.name,
            age:this.state.age,
            email:this.state.email
        };
        this.props.forminfo(info);
        }
    }
    changehandle = e =>{
        const {name,value}= e.target;
        this.setState({
            [name]:value
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={(e)=>this.submithandle(e)}>
  <div className="form-group">
    <label>Name</label>
    <input type="text" onChange={this.changehandle} className="form-control" name="name" placeholder="Enter name"/>
  </div>
  <div className="form-group">
    <label>Age</label>
    <input type="number" onChange={this.changehandle} className="form-control" name="age" placeholder="Enter age"/>
  </div>
  <div className="form-group">
    <label>Email</label>
    <input type="email" onChange={this.changehandle} className="form-control" name="email" placeholder="Enter Email"/>
  </div>
  <button type="submit" className="btn btn-primary">{this.props.edit? 'Edit':'Submit'}</button>
</form>
            </div>
        );
    }
}

export default Infoform;