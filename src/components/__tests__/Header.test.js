import { render, screen } from "@testing-library/react"
import Header from "../Header"
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"


it("should load the  header component with a login button", () => {
    render(
        <BrowserRouter>
     <Provider store={appStore}>
             <Header />
            </Provider>
            </BrowserRouter>
    );
    const loginButton = screen.getByText("Login");

    expect(loginButton).toBeInTheDocument();
});
it("should load the  header component with a  cart items 0", () => {
    render(
        <BrowserRouter>
     <Provider store={appStore}>
             <Header />
            </Provider>
            </BrowserRouter>
    );
    const CartItems = screen.getByText("Cart(0)");

    expect(CartItems).toBeInTheDocument();
});