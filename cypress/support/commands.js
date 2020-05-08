// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import {environment} from "../../src/environments/environment";

Cypress.Commands.add('getSessionStorage', (key) => {
    cy.window().then((window) => window.sessionStorage.getItem(key))
})

Cypress.Commands.add('setSessionStorage', (key, value) => {
    cy.window().then((window) => {
        window.sessionStorage.setItem(key, value)
    })
})
Cypress.Commands.add('setLocalStorage', (key, value) => {
    cy.window().then((window) => {
        window.localStorage.setItem(key, value)
    })
})
Cypress.Commands.add('getLocalStorage', (key) => {
    cy.window().then((window) => window.localStorage.getItem(key))

})

Cypress.Commands.add('login', (userType, options = {}) => {
    cy.request({
        url: Cypress.env('AUTH_ENDPOINT'),
        method: 'POST',
        headers: {
            'content-type': 'multipart/form-data',
        },
        form: true,
        body: {
            username:  Cypress.env('AUTH_USERNAME'),
            password:  Cypress.env('AUTH_PASSWORD'),
            grant_type: 'password',
            client_id: Cypress.env('AUTH_CLIENT_ID')
        }
    })
        .its('body')
        .then((body) => {
            console.log('Setting body into session key', body);
            cy.setLocalStorage(environment.accessTokenKey, JSON.stringify(body));
        });

});

// grab the user
// const user = types[userType];

//     cy.request({
//       url: 'http://localhost:8080/login',
//       method: 'POST',
//       body: user,
//     })
//     .its('body')
//     .then((body) => {
//       // assuming the server sends back the user details
//       // including a randomly generated password
//       //
//       // we can now login as this newly created user

//     })
//   })

//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
