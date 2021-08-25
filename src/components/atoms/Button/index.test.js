import React from "react";
import { render } from "@testing-library/react";

import Button from "./index";

test("should not allowed clicked button if isDisable is present", () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span")).toBeInTheDocument();
});
