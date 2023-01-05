import './App.css';
function table(){
    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">ClassName</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody id="tbody">

            </tbody>
            <tbody id="searchBody">

            </tbody>
        </table>
    )
};
export default table;