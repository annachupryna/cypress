
// import './commands';

const generateEmail = () => {
    return `test${Date.now()}@test.com`;
};

const fillField = (selector, value) => {
    cy.get(selector).clear();

    if (value) {
        cy.get(selector).type(value);
    }
};

const fillRegistrationForm = ({
    name = 'Test',
    lastName = 'Test',
    email = generateEmail(),
    password = 'Qwerty12345',
    repeatPassword = 'Qwerty12345'
} = {}) => {
    fillField('#signupName', name);
    fillField('#signupLastName', lastName);
    fillField('#signupEmail', email);
    fillField('#signupPassword', password);
    fillField('#signupRepeatPassword', repeatPassword);
};

describe('Validate name field', () => {
    beforeEach(() => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
        cy.contains('button', 'Sign up').click();
    });

    it('Happy registration', () => {
        fillRegistrationForm();
        cy.get('button[class="btn btn-primary"]').should('be.enabled').click();
        // assertions
        cy.contains('Garage').should('be.visible');

    });

    it('Field name is empty', () => {
        fillRegistrationForm({ name: '' });
        // assertions
        cy.get('button[class="btn btn-primary"]').should('be.disabled');
        cy.contains('Name required').should('be.visible');

    });

    it('Wrong data for name field', () => {
        fillRegistrationForm({ name: 'Тест' });
        // assertions
        cy.get('button[class="btn btn-primary"]').should('be.disabled');
        cy.contains('Name is invalid').should('be.visible');

    });

    it('Name is too short', () => {
        fillRegistrationForm({ name: 'T' });
        // assertions
        cy.get('button[class="btn btn-primary"]').should('be.disabled');
        cy.contains('Name has to be from 2 to 20 characters long').should('be.visible');

    });

    it('Validate border color', () => {
        fillRegistrationForm({ name: 'T' });
        // assertions
        cy.get('input[id="signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)')
    });
});


// VALIDATE LAST NAME

describe('Validate last name field', () => {
    beforeEach(() => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
        cy.contains('button', 'Sign up').click();
    });

    it('Field last name is empty', () => {
        fillRegistrationForm({ lastName: '' });
        // assertions
        cy.get('button[class="btn btn-primary"]').should('be.disabled');
        cy.contains('Last name required').should('be.visible');

    });

    it('Wrong data for last name field', () => {
        fillRegistrationForm({ lastName: 'Тест' });
        // assertions
        cy.get('button[class="btn btn-primary"]').should('be.disabled');
        cy.contains('Last name is invalid').should('be.visible');

    });

    it('Last name is too short', () => {
        fillRegistrationForm({ lastName: 'T' });
        // assertions
        cy.get('button[class="btn btn-primary"]').should('be.disabled');
        cy.contains('Last name has to be from 2 to 20 characters long').should('be.visible');

    });

    it('Validate border color', () => {
        fillRegistrationForm({ lastName: 'T' });
        // assertions
        cy.get('input[id="signupLastName"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });
});

// VALIDATE EMAIL FIELD

describe('Validate email field', () => {
    beforeEach(() => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
        cy.contains('button', 'Sign up').click();
    });

    it('Field email is empty', () => {
        fillRegistrationForm({ email: '' });
        // assertions
        cy.get('button[class="btn btn-primary"]').should('be.disabled');
        cy.contains('Email required').should('be.visible');

    });

    it('Wrong data for email field', () => {
        fillRegistrationForm({ email: '1' });
        // assertions
        cy.get('button[class="btn btn-primary"]').should('be.disabled');
        cy.contains('Email is incorrect').should('be.visible');

    });

    it('Validate border color', () => {
        fillRegistrationForm({ email: '1' });
        // assertions
        cy.get('input[id="signupEmail"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });
});


// VALIDATE PASSWORD FIELD

describe('Validate password field', () => {
    beforeEach(() => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
        cy.contains('button', 'Sign up').click();
    });

    it('Field password is empty', () => {
        fillRegistrationForm({ password: '' });
        // assertions
        cy.get('button[class="btn btn-primary"]').should('be.disabled');
        cy.contains('Password required').should('be.visible');

    });

    it('Wrong data for password field', () => {
        fillRegistrationForm({ password: '1' });
        // assertions
        cy.get('button[class="btn btn-primary"]').should('be.disabled');
        cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible');

    });

    it('Validate border color', () => {
        fillRegistrationForm({ password: '1' });
        // assertions
        cy.get('input[id="signupPassword"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });
});

//VALIDATE RE - ENTERPASSWORD FIELD

describe('Validate re-enter password field', () => {
    beforeEach(() => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
        cy.contains('button', 'Sign up').click();
    });

    it('Password and re-entered password do not match', () => {
        fillRegistrationForm({ password: 'Qwerty12345', repeatPassword: 'Qwerty123456' });
        cy.get('input[id="signupPassword"]').should('be.visible').click();
        // assertions
        cy.get('button[class="btn btn-primary"]').should('be.disabled');
        cy.contains('Passwords do not match').should('be.visible');
    });

    it('Empty field re-enter password', () => {
        fillRegistrationForm({ repeatPassword: '' });
        cy.get('input[id="signupPassword"]').should('be.visible').click();
        // assertions
        cy.get('button[class="btn btn-primary"]').should('be.disabled');
        cy.contains('Re-enter password required').should('be.visible');

    });

    it('Validate border color', () => {
        fillRegistrationForm({ repeatPassword: '' });
        cy.get('input[id="signupPassword"]').should('be.visible').click();
        // assertions
        cy.get('input[id="signupRepeatPassword"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });
});

describe('Validate custom command', () => {
    it('Log in with custom command', () => {
        cy.login('testTest21@gmail.com', 'Qwerty12345');
        // assertions
        cy.contains('Garage').should('be.visible');
    });
});

describe('Validate custom command for password', () => {
    it('Validate password is not visible in logs', () => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
        cy.contains('button', 'Sign In').click();
        cy.get('#signinEmail').type('testTest21@gmail.com');
        cy.get('#signinPassword').type('Qwerty12345', { sensitive: true });
    });
});
