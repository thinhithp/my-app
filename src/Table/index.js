import React, {Component} from 'react';
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
class Index extends Component {
    render() {
        return (
            <table className="table">
                <TableHeader/>
                <TableBody data={this.props.data} onDelete={this.props.onDelete}/>
            </table>
        );
    }
}

export default Index;