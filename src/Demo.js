import React, {Component} from 'react';

class Demo extends Component {
    render() {
        const {nameButton} = this.props
        return (
            <div className="container">
                <form>
                    <div className="row">
                        <input
                            type="hidden"
                            className="form-control"
                            id="id"
                            aria-describedby="emailHelp"
                        />
                        <div className="mb-3 col-6">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3 col-6">
                            <label htmlFor="inputAge" className="form-label">Age</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputAge"
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div className="mb-3 col-6">
                            <label htmlFor="inputClass" className="form-label">Class</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputClass"
                            />
                        </div>
                        <div className="mb-3 col-6">
                            <label htmlFor="searchItemInput" className="form-label"></label>
                            <input
                                type="text"
                                className="form-control"
                                id="searchItemInput"

                            />
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary" id="add">Add</button>
                    <button type="button" className="btn btn-secondary" id='edit'>Edit</button>
                    <button onClick="search()" type="button" className="btn btn-secondary" id='searchItem'>Search</button>
                    <button onClick="search()" type="button" className="btn btn-secondary" id='searchItem'>{nameButton}</button>
                </form>
            </div>
        );
    }
}

export default Demo;