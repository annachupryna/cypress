// describe('Validate name field', () => {
//     beforeEach(() => {
//         cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
//         cy.contains('button', 'Sign up').click();
//     });

//     it('Happy registration', () => {
//         cy.get('input[id="signupName"]').as('nameField');
//         cy.get('@nameField').clear();
//         cy.get('@nameField').should('have.value', '');
//         cy.get('@nameField').type('Test');

//         cy.get('input[id="signupLastName"]').as('lastNameField');
//         cy.get('@lastNameField').clear();
//         cy.get('@lastNameField').should('have.value', '');
//         cy.get('@lastNameField').type('Test');

//         cy.get('input[id="signupEmail"]').as('emailField');
//         cy.get('@emailField').clear();
//         cy.get('@emailField').should('have.value', '');
//         cy.get('@emailField').type('Testemail@test.com');

//         cy.get('input[id="signupPassword"]').as('passwordField');
//         cy.get('@passwordField').clear();
//         cy.get('@passwordField').should('have.value', '');
//         cy.get('@passwordField').type('Qwerty123');

//         cy.get('input[id="signupRepeatPassword"]').as('repeatPasswordField');
//         cy.get('@repeatPasswordField').clear();
//         cy.get('@repeatPasswordField').should('have.value', '');
//         cy.get('@repeatPasswordField').type('Qwerty123');

//         cy.get('button[class="btn btn-primary"]').should('be.enabled').click();

//         // assertions
//         cy.get('.btn btn-primary').should('be.visible');

//     });

//     it('Field name is empty', () => {
//         cy.get('input[id="signupLastName"]').as('lastNameField');
//         cy.get('@lastNameField').clear();
//         cy.get('@lastNameField').should('have.value', '');
//         cy.get('@lastNameField').type('Test');

//         cy.get('input[id="signupEmail"]').as('emailField');
//         cy.get('@emailField').clear();
//         cy.get('@emailField').should('have.value', '');
//         cy.get('@emailField').type('Testemail@test.com');

//         cy.get('input[id="signupPassword"]').as('passwordField');
//         cy.get('@passwordField').clear();
//         cy.get('@passwordField').should('have.value', '');
//         cy.get('@passwordField').type('Qwerty123');

//         cy.get('input[id="signupRepeatPassword"]').as('repeatPasswordField');
//         cy.get('@repeatPasswordField').clear();
//         cy.get('@repeatPasswordField').should('have.value', '');
//         cy.get('@repeatPasswordField').type('Qwerty123');

//         // assertions
//         cy.get('button[class="btn btn-primary"]').should('be.disabled');
//         cy.contains('Name required').should('be.visible');

//     });

//     it('Wrong data for name field', () => {
//         cy.get('input[id="signupName"]').as('nameField');
//         cy.get('@nameField').clear();
//         cy.get('@nameField').should('have.value', '');
//         cy.get('@nameField').type('Тест');

//         cy.get('input[id="signupLastName"]').as('lastNameField');
//         cy.get('@lastNameField').clear();
//         cy.get('@lastNameField').should('have.value', '');
//         cy.get('@lastNameField').type('Test');

//         cy.get('input[id="signupEmail"]').as('emailField');
//         cy.get('@emailField').clear();
//         cy.get('@emailField').should('have.value', '');
//         cy.get('@emailField').type('Testemail@test.com');

//         cy.get('input[id="signupPassword"]').as('passwordField');
//         cy.get('@passwordField').clear();
//         cy.get('@passwordField').should('have.value', '');
//         cy.get('@passwordField').type('Qwerty123');

//         cy.get('input[id="signupRepeatPassword"]').as('repeatPasswordField');
//         cy.get('@repeatPasswordField').clear();
//         cy.get('@repeatPasswordField').should('have.value', '');
//         cy.get('@repeatPasswordField').type('Qwerty123');

//         // assertions
//         cy.get('button[class="btn btn-primary"]').should('be.disabled');
//         cy.contains('Name is invalid').should('be.visible');

//     });

//     it('Name is too long', () => {
//         cy.get('input[id="signupName"]').as('nameField');
//         cy.get('@nameField').clear();
//         cy.get('@nameField').should('have.value', '');
//         cy.get('@nameField').type('T');

//         cy.get('input[id="signupLastName"]').as('lastNameField');
//         cy.get('@lastNameField').clear();
//         cy.get('@lastNameField').should('have.value', '');
//         cy.get('@lastNameField').type('Test');

//         cy.get('input[id="signupEmail"]').as('emailField');
//         cy.get('@emailField').clear();
//         cy.get('@emailField').should('have.value', '');
//         cy.get('@emailField').type('Testemail@test.com');

//         cy.get('input[id="signupPassword"]').as('passwordField');
//         cy.get('@passwordField').clear();
//         cy.get('@passwordField').should('have.value', '');
//         cy.get('@passwordField').type('Qwerty123');

//         cy.get('input[id="signupRepeatPassword"]').as('repeatPasswordField');
//         cy.get('@repeatPasswordField').clear();
//         cy.get('@repeatPasswordField').should('have.value', '');
//         cy.get('@repeatPasswordField').type('Qwerty123');

//         // assertions
//         cy.get('button[class="btn btn-primary"]').should('be.disabled');
//         cy.contains('Name has to be from 2 to 20 characters long').should('be.visible');

//     });

//     it('Validate border color', () => {
//         cy.get('input[id="signupName"]').as('nameField');
//         cy.get('@nameField').clear();
//         cy.get('@nameField').should('have.value', '');
//         cy.get('@nameField').type('T');

//         cy.get('input[id="signupLastName"]').as('lastNameField');
//         cy.get('@lastNameField').clear();
//         cy.get('@lastNameField').should('have.value', '');
//         cy.get('@lastNameField').type('Test');

//         cy.get('input[id="signupEmail"]').as('emailField');
//         cy.get('@emailField').clear();
//         cy.get('@emailField').should('have.value', '');
//         cy.get('@emailField').type('Testemail@test.com');

//         cy.get('input[id="signupPassword"]').as('passwordField');
//         cy.get('@passwordField').clear();
//         cy.get('@passwordField').should('have.value', '');
//         cy.get('@passwordField').type('Qwerty123');

//         cy.get('input[id="signupRepeatPassword"]').as('repeatPasswordField');
//         cy.get('@repeatPasswordField').clear();
//         cy.get('@repeatPasswordField').should('have.value', '');
//         cy.get('@repeatPasswordField').type('Qwerty123');

//         // assertions
//         cy.get('.alert.alert-danger').should('have.css', 'border-color', 'rgb(245, 198, 203)')
//     });


// });
