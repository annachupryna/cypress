class BasePage {
    visit(path = "/") {
        cy.visit(path);
    }

    click(selector) {
        cy.get(selector).should("be.visible").click();
    }

    type(selector, text) {
        cy.get(selector).should("be.visible").clear().type(text);
    }
}

export default BasePage;