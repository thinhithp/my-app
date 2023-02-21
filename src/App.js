import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonList from "./PersonList";
import AddPersonForm from "./AddPersonForm";
import "./App.css"
function App() {
    const [persons, setPersons] = useState([]);
    const [showAddPersonForm, setShowAddPersonForm] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:8080/people")
            .then((response) => {
                setPersons(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
   const handleEditPerson = (id) => {
       console.log(id)
        const person = persons.find((p) => p.id === id);
        setSelectedPerson(person);
       setShowAddPersonForm(true);

    };

    const handleAddPerson = (person) => {
        axios
            .post("http://localhost:8080/people", person)
            .then((response) => {
                setPersons([...persons, response.data]);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    /*const handleEditPerson = (id, updatedPerson) => {
        axios
            .put(`http://localhost:8080/people/${id}`, updatedPerson)
            .then((response) => {
                setPersons(persons.map((person) =>
                    person.id === id ? response.data : person
                ));
            })
            .catch((error) => {
                console.log(error);
            });
    };*/
    const handleDeletePerson = (id) => {
        axios
            .delete(`http://localhost:8080/people/${id}`)
            .then(() => {
                setPersons(persons.filter((person) => person.id !== id));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleClose = () => {
        setShowAddPersonForm(false);
    };

    return (
        <div className="container">
            <h1>Persons</h1>
            <PersonList persons={persons}
                        handleEditPerson={handleEditPerson} handleDeletePerson={handleDeletePerson}
            />
            <div className="popup-container">
            <button onClick={() =>  setShowAddPersonForm(true)} >
                Thêm người
            </button>
            </div>

            {showAddPersonForm && (
                <div className="popup">
                <AddPersonForm
                    handleCloseAddPersonForm={handleClose}
                    handleAddPerson={handleAddPerson}
                />
                </div>
            )}

        </div>

    );
}

export default App;
