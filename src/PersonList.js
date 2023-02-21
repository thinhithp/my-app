import React from "react";

function PersonList({ persons, handleEditPerson, handleDeletePerson }) {
    return (
        <table className="table">
            <thead>
            <tr >
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Phone</th>
            </tr>
            </thead>
            <tbody>
            {persons.map((person) => (
                <tr key={person.id}>
                    <td>{person.id}</td>
                    <td>{person.name}</td>
                    <td>{person.age}</td>
                    <td>{person.email}</td>
                    <td>{person.gender}</td>
                    <td>{person.address}</td>
                    <td>{person.phone}</td>
                    <button onClick={() => handleEditPerson(person.id)}>Sửa</button>
                    <button onClick={() => handleDeletePerson(person.id)}>Xoá</button>
                </tr>
            ))}
            </tbody>

        </table>
    );
}

export default PersonList;