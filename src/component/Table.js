import React, { Component } from 'react';

class Table extends Component {
    constructor(props){
        super();
    }
    deleteData = (id)=>{
        console.log("deleted id:"+id);
        this.props.del(id);
    }
    editData = (data)=>{
        this.props.edit(data);
    }
    render() {
        return (
            <>
              <table className='mytable' border='1'>
                  <thead>
                  <tr>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Email</th>
                      <th>Delete</th>
                      <th>Edit</th>
                  </tr>
                  </thead>
                  <tbody>
                  {(this.props.data).map((e,index)=>{
                      return <tr key={index}>
                          <td>{e.name}</td>
                          <td>{e.age}</td>
                          <td>{e.email}</td>
                          <td onClick={(event)=> this.deleteData(e._id)} className='del'><span className="material-symbols-outlined">
                            delete
                            </span>
                          </td>
                          <td onClick={(event)=> this.editData(e)} className='edit'><span className="material-symbols-outlined">
                            edit
                            </span>
                          </td>
                      </tr>
                  })}
                  </tbody>
                  </table>  
            </>
        );
    }
}

export default Table;