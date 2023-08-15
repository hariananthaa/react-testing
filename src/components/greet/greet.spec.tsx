/**
 * Great should render the test hello and if a name is passed into the component, it should render hello followed by name.
 */

import { render, screen } from "@testing-library/react";
import Greet from "./greet";

describe("Greet", () => {
   // "it" is also same as "test". f means only
  fit("Great renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  describe("Nested", () => {
    it("Greet renders with a name", () => {
      render(<Greet name="Hari" />);
      const textElement = screen.getByText("Hello Hari");
      expect(textElement).toBeInTheDocument();
    });
  });
});
