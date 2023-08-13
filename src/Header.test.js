import Header from "./Header";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";




test("Varsayılan olarak verilen 3 nesne render edilmeli", () =>{
    render(<Header />);
     
    const items =screen.getAllByText(/Emoji Search/i);
    expect(items.length).toEqual(3);
  });