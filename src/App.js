import React, {Component} from 'react';
import Form from "./Form";
import "./App.css"
import Table from "./Table";
class App extends Component {
constructor() {
    super();
    this.state = {
        dataArr:[
            {id:1, nameApp:"test", age:"18"},
            {id:2, nameApp:"test2", age:"11"}
        ],
    };
}
setData = (data) =>{
    let newData = [...this.state.dataArr];
    newData.push(data)
    this.setState({
        dataArr: newData,
    })
}
    handleDelete = (id) => {
    const index = this.state.dataArr.findIndex((item) => item.id === id)
        let newData = [...this.state.dataArr]
            newData.splice(index,1)
            this.setState({
                dataArr:newData

            })
        ;
    }

    render() {

        return (
          <div className="mt-3">
              <div className="container">
                  <Form setData={this.setData}/>
                  <Table data={this.state.dataArr} onDelete={this.handleDelete} />
              </div>

          </div>
        );
    }
}

export default App;