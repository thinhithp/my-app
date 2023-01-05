import React, {Component} from 'react';

class Demo2 extends Component {
    constructor() {
        super();
        //TODO: state là dữ liệu nội tại sử dụng trong component, giống nhu 1 dạng private
        this.state = {
            name: "test",
            arr:[1,2,3,4],
            isTrue: true,
            obj:{
                age:20
            }
        }
    }

    render() {
        const {age} = this.state.obj
        const {name} = this.state

        //TODO: Đây là Object ditructoring
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">ClassName</th>
                        <th scope="col">Action</th>
                    </tr>
                    <tr>
                        <td>{age}</td>
                        <td>{name}</td>
                        <td>{name}</td>
                        <td>{name}</td>
                        <td>{name}</td>
                    </tr>
                    </thead>
                    <tbody id="tbody">

                    </tbody>
                    <tbody id="searchBody">

                    </tbody>
                </table>
            </div>

        );

    }
}

export default Demo2;