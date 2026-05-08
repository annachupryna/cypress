import BasePage from "./BasePage.js";

class GaragePage extends BasePage {
    selectors = {
        addCarButton: "app-garage .btn.btn-primary",
        carBrandSelector: "#addCarBrand",
        carModelSelector: "#addCarModel",
        carMileage: "#addCarMileage",
        addCarOnPopupButton: "div.modal-footer.d-flex.justify-content-end button.btn.btn-primary",

        addFuelExpenseButton: ".car_add-expense.btn.btn-success",
        numberOfLitersInput: "#addExpenseLiters",
        totalCostInput: "#addExpenseTotalCost",
        updatedMileageInput: "#addExpenseMileage",

        fuelExpensesTabText: "Fuel expenses",
        garageTab: 'a.btn.btn-white.btn-sidebar.sidebar_btn[routerlink="garage"]',

        editCarButton: ".icon.icon-edit",
        removeCarButtonOnPopup: ".btn.btn-outline-danger",
        confirmRemoveOnPopupButton: ".btn.btn-danger",

        carGroup: "div.car-group"
    };

    addNewCar(brand, model, initialMileage) {
        cy.get(this.selectors.addCarButton).should("be.visible").click();

        cy.get(this.selectors.carBrandSelector).should("be.visible").select(brand);
        cy.get(this.selectors.carModelSelector).should("be.visible").select(model);

        cy.get(this.selectors.carMileage)
            .should("be.visible")
            .clear()
            .type(initialMileage);

        cy.get(this.selectors.addCarOnPopupButton)
            .should("be.visible")
            .click();

        cy.get(this.selectors.carGroup)
            .should("contain", brand)
            .and("contain", model);
    }

    addFuelExpense(updatedMileage, numberOfLiters, totalCost) {
        cy.get(this.selectors.addFuelExpenseButton)
            .should("be.visible")
            .click();

        cy.get(this.selectors.updatedMileageInput)
            .should("be.visible")
            .clear()
            .type(updatedMileage);

        cy.get(this.selectors.numberOfLitersInput)
            .should("be.visible")
            .clear()
            .type(numberOfLiters);

        cy.get(this.selectors.totalCostInput)
            .should("be.visible")
            .clear()
            .type(totalCost);

        cy.get(this.selectors.addCarOnPopupButton)
            .should("be.visible")
            .click();

        cy.contains(this.selectors.fuelExpensesTabText)
            .should("be.visible");
    }

    openGarageTab() {
        cy.get(this.selectors.garageTab)
            .should("be.visible")
            .click();

        cy.get(this.selectors.addCarButton)
            .should("be.visible");
    }

    removeCar() {
        cy.get(this.selectors.garageTab)
            .should("be.visible")
            .click();

        cy.get(this.selectors.editCarButton)
            .should("be.visible")
            .click();

        cy.get(this.selectors.removeCarButtonOnPopup)
            .should("be.visible")
            .click();

        cy.get(this.selectors.confirmRemoveOnPopupButton)
            .should("be.visible")
            .click();

        cy.get(this.selectors.carGroup)
            .should("not.exist");
    }
}

export default new GaragePage();
