import { render, screen } from "@testing-library/react"
import Great from "./great"

test("Great renders correctly",()=>{
  render(<Great/>)
  const textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument();
})