describe('Validate Header & Footer', () => {

    beforeEach(() => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
    });

    it('Header buttons', () => {
        cy.get('header').within(() => {

            cy.contains('Home').should('be.visible');
            cy.contains('About').should('be.visible');
            cy.contains('Contacts').should('be.visible');

            cy.contains('button', 'Sign In').should('be.visible');
            cy.contains('button', 'Guest log in').should('be.visible');

        });
    });

    it('Sign up button (hero section)', () => {
        cy.get('.hero').within(() => {
            cy.contains('button', 'Sign up').should('be.visible');
        });
    });

    it('Social links (contacts section)', () => {
        cy.get('#contactsSection').within(() => {

            cy.get('a[href*="facebook"]').should('exist');
            cy.get('a[href*="t.me"]').should('exist');
            cy.get('a[href*="youtube"]').should('exist');
            cy.get('a[href*="instagram"]').should('exist');
            cy.get('a[href*="linkedin"]').should('exist');

        });
    });

    it('Support контакти', () => {
        cy.get('#contactsSection').within(() => {

            cy.contains('ithillel.ua')
                .should('have.attr', 'href');

            cy.contains('support@ithillel.ua')
                .should('have.attr', 'href')
                .and('include', 'mailto');

        });
    });

});
