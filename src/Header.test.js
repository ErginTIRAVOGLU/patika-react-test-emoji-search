import Header from "./Header";
import {  render, screen } from "@testing-library/react";
 




test("Header da Emoji Search render edilmeli", () =>{
    render(<Header />);
     
    const title =screen.getByText(/Emoji Search/i);
    expect(title).toBeDefined();
  });