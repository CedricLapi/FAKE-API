
const {faker} = require('@faker-js/faker');
const express = require('express');


const app = express();
const port = 8000;

//Pseudo Code
//Create a function that creates a new user.
// The user needs to have a password, email, first name, last name, phone number and id

const newUserObj = () => ({
    id: faker.database.mongodbObjectId(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(),
    password: faker.internet.password()
})

//Create a function that creates a new company.

const newCompanyObj = () => ({
    id: faker.database.mongodbObjectId(),
    name: faker.company.name(),
    address: {
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        country: faker.location.country()
    }


})

//Create a route that returns a new user.

app.get("/api/users/new", (req, res) => {
    const newUser = newUserObj();
    res.json(newUser);
})

//Create a route that returns a new company.

app.get("/api/companies/new", (req, res) => {
    const newCompany = newCompanyObj();
    res.json(newCompany);
})

//Create a route that returns a new user and a new company.

app.get("/api/user/company", (req, res) => {
    res.json({user: newUserObj(), company: newCompanyObj()});
})


app.listen(port, () => console.log(`Listening on port: ${port}`));