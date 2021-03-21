import React, { useState } from 'react';

const RegisterPage = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [concentration, setConcentration] = useState("");
    const [areaCode, setAreaCode] = useState("");


    return (
        <div>
            Register Here
        </div>
    )
}

export default RegisterPage;