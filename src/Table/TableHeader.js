import React, {Component} from 'react';

class TableHeader extends Component {
    render() {
        return (
            <>
                <thead>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Action</th>

                </thead>
            </>
        );
    }
}

export default TableHeader;