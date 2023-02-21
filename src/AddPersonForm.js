import React, { useState } from "react";

function AddPersonForm({ handleAddPerson, handleCloseAddPersonForm }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        handleAddPerson({
            name,
            age,
            gender,
            address,
            email,
            phone,
        });

        setName("");
        setAge("");
        setGender("");
        setAddress("");
        setEmail("");
        setPhone("");
    };

    const handleClose = () => {
        handleCloseAddPersonForm();
    };

    return (
        <div className="add-person-popup">
            <h2>Thêm mới người</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Họ và tên:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Tuổi:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Giới tính:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Địa chỉ:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Số điện thoại:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Thêm mới
                </button>
                <button type="button" onClick={handleClose}>
                    Đóng
                </button>
            </form>
        </div>
    );
}

export default AddPersonForm;