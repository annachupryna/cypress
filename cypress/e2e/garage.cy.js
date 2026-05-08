import LoginPage from "../pages/LoginPage.js";
import GaragePage from "../pages/GaragePage.js";

const CAR_BRAND = "Audi";
const CAR_MODEL = "TT";
const INITIAL_MILEAGE = 1;

describe("Garage tests", () => {

    beforeEach(() => {
        const email = Cypress.env("email");
        const password = Cypress.env("password");

        LoginPage.open("/");
        LoginPage.login(email, password);
    });

    it("Add new car", () => {
        GaragePage.addNewCar(CAR_BRAND, CAR_MODEL, INITIAL_MILEAGE);
    });

    it("Add fuel expense", () => {
        GaragePage.addFuelExpense(2, 2, 10);
    });

    after(() => {
        GaragePage.removeCar();
    });

});
