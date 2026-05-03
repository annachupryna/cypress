// import BasePage from "./BasePage.js";

// class GaragePage extends BasePage {
//     selectors = {
//         addCarButton: "app-garage .btn.btn-primary",
//         carBrandSelector: "#addCarBrand",
//         carModelSelector: "#addCarModel",
//         carMileage: '#addCarMileage',
//         addCarOnPopupButton: 'div.modal-footer.d-flex.justify-content-end button.btn.btn-primary',
//         addFuelExpenseButton: 'car_add-expense btn btn-success',
//         numberOfLitersInput: '#addExpenseLiters',
//         totalCostInput: '#addExpenseTotalCost',
//         //deleteCarButton: 'icon icon-delete',
//         confirmRemoveOnPopupButton: 'btn btn-danger',
//         carGroup: 'div.car-group',
//         updatedMileageInput: 'div input[id="addExpenseMileage"]',
//         fuelExpensesTabText: 'Fuel expenses',
//         garageTab: 'a.btn.btn-white.btn-sidebar.sidebar_btn[routerlink="garage"]',
//         editCarButton: 'icon icon-edit',
//         removeCarButonOnPopup: 'btn btn-outline-danger'
//     };

//     // open() {
//     //   cy.visit("/");
//     // }
//     /*
//       getUserNameInput() {
//         return cy.get(this.selectors.usernameInput);
//       }

//       getPasswordInput() {
//         return cy.get(this.selectors.passwordInput);
//       }

//       getLoginButton() {
//         return cy.get(this.selectors.loginButton);
//       }

//       getErrorMessage() {
//         return cy.get(this.selectors.errorMessage);
//       }

//       typeUserName(username) {
//         this.getUserNameInput().clear().type(username);
//       }

//       typePassword(password) {
//         this.getPasswordInput().clear().type(password);
//       }

//       clickLoginButton() {
//         this.getLoginButton().click();
//       } */

//     // login(userEmail, password) {
//     //     this.type(this.selectors.emailInput, userEmail)
//     //     this.type(this.selectors.passwordInput, password)
//     //     this.click(this.selectors.loginButton)
//     // }

//     addNewCar(brand, model, initialMileage) {
//         // this.click(this.selectors.addCarButton).this.selectors.carBrandSelector.select(brand);
//         // //this.selectors.addCarButton.should("be.visible").click().this.selectors.carBrandSelector.select(brand);
//         // this.selectors.carBrandSelector.should("be.visible").type(model);
//         // this.selectors.carMileage.should("be.visible").type(initialMileage);
//         // this.selectors.addCarOnPopupButton.should("be.visible").click();
//         // //validations
//         // this.selectors.carGroup.should("contain", brand).and("contain", model);

//         this.click(this.selectors.addCarButton);

//         cy.get(this.selectors.carBrandSelector).select(brand);
//         cy.get(this.selectors.carModelSelector).select(model);
//         cy.get(this.selectors.carMileage).type(initialMileage);

//         this.click(this.selectors.addCarOnPopupButton);

//         cy.get(this.selectors.carGroup)
//             .should("contain", brand)
//             .and("contain", model);

//     }

//     addFuelExpense(updatedMileage, numberOfLiters, totalCost) {
//         this.selectors.addFuelExpenseButton.should("be.visible").click();
//         this.selectors.updatedMileageInput.should("be.visible").type(updatedMileage);
//         this.selectors.numberOfLitersInput.should("be.visible").clear().type(numberOfLiters);
//         this.selectors.totalCostInput.should("be.visible").type(totalCost);
//         this.selectors.addCarOnPopupButton.should("be.visible").click();
//         //vailidations
//         this.selectors.fuelExpensesTabText.should("be.visible");
//     }

//     openGarageTab() {
//         this.selectors.garageTab.should("be.visible").click();
//         this.selectors.addCarButton.should("be.visible");
//     }

//     removeCar() {
//         this.selectors.editCarButton.should("be.visible").click();
//         // this.selectors.deleteCarButton.should("be.visible").click();
//         this.selectors.removeCarButonOnPopup.should("be.visible").click();
//         this.selectors.confirmRemoveOnPopupButton.should("be.visible").click();
//         this.selectors.carGroup.should("not.exist");

//     }

//     //   verifiOpenLoginPage() {
//     //     /* this.getUserNameInput().should("be.visible");
//     //     this.getPasswordInput().should("be.visible");
//     //     this.getLoginButton().should("be.visible"); */

//     //     this.shouldBeVisible(this.selectors.usernameInput)
//     //     this.shouldBeVisible(this.selectors.passwordInput)
//     //     this.shouldBeVisible(this.selectors.loginButton)
//     //   }
// }

// export default new GaragePage();

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
