import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";



test("EmojiResults Listelendi mi", async () =>{
    render(<App />);
     
   

    const items =await screen.getAllByText(/Click to copy emoji/i);
    await expect(items.length).toBeGreaterThanOrEqual(10);
  });

  test("Emoji filter çalıştı mı", async () =>{
    render(<App />);
     
   
    const input = screen.getByRole('textbox');
    const name="joy";
    await userEvent.type(input,name);
 
    const items=screen.getAllByText((content, element) => {
        return element.tagName.toLowerCase() === 'span' && element.className.toLocaleLowerCase()==="title"     
    });
 
    await expect(items.length).toEqual(3);
    
  });


  test("Emoji tıklanınca kopyalandı mı", async () =>{
    render(<App />);
     
   
    const input = screen.getByRole('textbox');
    const name="joy";
    await userEvent.type(input,name);
 
    const items=screen.getAllByText((content, element) => {
        return element.tagName.toLowerCase() === 'span' && element.className.toLocaleLowerCase()==="title"     
    });
 
     
    await fireEvent.click(items[0]);
     
    //console.log(items[0].innerHTML.toLowerCase());
    //console.log(navigator.clipboard);
    //copy paste için çözüm bulunamadı
  });