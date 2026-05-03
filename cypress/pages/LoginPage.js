import BasePage from "./BasePage.js";

class LoginPage extends BasePage {
    selectors = {
        signInButton: "button.header_signin",
        email: "#signinEmail",
        password: "#signinPassword",
        loginBtn: "app-signin-modal button.btn.btn-primary"
    };

    open() {
        cy.visit("/", {
            auth: {
                username: "guest",
                password: "welcome2qauto"
            }
        });
    }

    login(email, password) {
        this.click(this.selectors.signInButton);
        this.type(this.selectors.email, email);
        this.type(this.selectors.password, password);
        this.click(this.selectors.loginBtn);
    }
}

export default new LoginPage();