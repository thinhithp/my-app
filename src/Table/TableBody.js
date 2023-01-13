import React, {Component} from 'react';

class TableBody extends Component {
    constructor() {
        super();
        this.state ={
            count:0
        }
    }
    handleDlete = (id) =>{
        this.props.onDelete(id)
    }
    render() {
        const {data} = this.props
        return (
            <>
                <tbody>
                {data.map(p =>(
                    <tr key={p.id}>
                        <th scope="row">{p.id}</th>
                        <td>{p.nameApp}</td>
                        <td>{p.age}</td>
                        <td>
                            <button onClick={() => this.handleDlete(p.id)}>Delete</button>

                        </td>
                    </tr>
                ))}


                </tbody>
            </>
        );
    }
}

export default TableBody;