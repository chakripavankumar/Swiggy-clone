import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body"
import MOCK_DATA from "../mocks/mockRestoListData.json"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
         }
     })
 })


it(" it should render the body component", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );
    const SearchBtn = screen.getAllByRole("button", { name: "Search" });
    const SearchInput = screen.getByTestId("SearchInput");
   
    fireEvent.change(SearchInput,{ target: { value: "burger" } });
  
  

   SearchBtn.forEach((button) => {
       expect(button).toBeInTheDocument();
      
});;
    
});