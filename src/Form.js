import React, {Component} from 'react';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameApp:'',
            age:0,
        }
    };
    handleChange = (event) => {
        let target = event.target;
        let value = target.value;
        let name = target.name;

        this.setState({
            [name] : value
        })
    };

    handleSumit = (e) => {
        e.preventDefault();
        this.props.setData(this.state)
        console.log(this.state)
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSumit}>
                    <div className="row">
                        <div className="col-6">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="nameApp"
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="col-6">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Age"
                                name="age"
                                onChange={this.handleChange}
                            />
                        </div>

                    </div>
                    <button type="submit" className="btn btn-primary mt-3"> Add</button>
                </form>
            </div>
        );

    }
}

export default Form;