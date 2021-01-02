import React from "react";
import Form from ".";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

function ContactForm(props) {
  const [submitInfo, setSubmitInfo] = React.useState({});
  function handleSubmit(submitInfo) {
    setSubmitInfo(submitInfo);
  }
  const { event, formData, fieldData } = submitInfo;
  return (
    <>
      <Form onSubmit={handleSubmit}>
        {() => (
          <>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              defaultValue="Brent"
              name="firstName"
              id="firstName"
            />
            <button type="submit">Submit</button>
          </>
        )}
      </Form>
      <div>
        {fieldData && (
          <div data-testid="fieldData">{JSON.stringify(fieldData)}</div>
        )}
        {formData && (
          <div data-testid="formData--firstName">
            {formData.get("firstName")}
          </div>
        )}
      </div>
    </>
  );
}

test("can access fieldData", () => {
  render(<ContactForm />);
  const firstNameField = screen.getByLabelText("First Name");
  const submitButton = screen.getByText("Submit");
  expect(firstNameField).toBeTruthy();
  userEvent.click(submitButton);
  expect(screen.getByTestId("fieldData")).toHaveTextContent(
    JSON.stringify({ firstName: "Brent" })
  );
});

test("can access formData", () => {
  render(<ContactForm />);
  const submitButton = screen.getByText("Submit");
  userEvent.click(submitButton);
  expect(screen.getByTestId("formData--firstName")).toHaveTextContent("Brent");
});
