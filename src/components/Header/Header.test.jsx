import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Provider } from "react-redux";
import { store } from "../../assets/redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./index";

describe("Header", () => {
  it("renders without errors", () => {
    render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );
  });

  it("renders the sign in link", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );

    expect(getByText("Sign in")).toBeInTheDocument();
  });
});
