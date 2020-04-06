import React from "react";
import ReactDOM from "react-dom";
import serialize from "form-serialize";

import "./styles.css";

class App extends React.Component {
  state = {
    formIsDirty: false
  };

  setFormToDirty = () => {};

  componentDidMount() {
    // shamelessly lifted from https://pageclip.co/blog/2018-02-20-you-should-use-html5-form-validation.html
    const validationErrorClass = "validation-error";
    const parentErrorClass = "has-validation-error";
    const inputs = document.querySelectorAll("input, select, textarea");

    const setFormToDirty = () => {
      if (this.state.formIsDirty === false) {
        this.setState({ formIsDirty: true });
      }
    };

    inputs.forEach(function(input) {
      function checkValidity(options) {
        const insertError = options.insertError;
        const parent = input.parentNode;
        const error =
          parent.querySelector(`.${validationErrorClass}`) ||
          document.createElement("div");

        if (!input.validity.valid && input.validationMessage) {
          error.className = validationErrorClass;
          error.textContent = input.validationMessage;

          if (insertError) {
            parent.appendChild(error, input);
            parent.classList.add(parentErrorClass);
          }
        } else {
          parent.classList.remove(parentErrorClass);
          error.remove();
        }
      }

      input.addEventListener("input", function() {
        // We can only update the error or hide it on input.
        // Otherwise it will show when typing.
        checkValidity({ insertError: false });

        // also handle dirty tracking
        setFormToDirty();
      });
      input.addEventListener("invalid", function(e) {
        // prevent showing the default display
        e.preventDefault();

        // We can also create the error in invalid.
        checkValidity({ insertError: true });
      });
    });
  }
  render() {
    console.log();
    return (
      <div className="App">
        <form
          onSubmit={event => {
            event.preventDefault();
            const fieldData = serialize(event.target, { hash: true });
            const { firstName, lastName, email, phoneNumber } = fieldData;
            alert(
              `
                Hello ${firstName} ${lastName}!\r\n
                Since you signed up, we will email you at ${email} or call you at ${phoneNumber}.\r\n
                Thanks!
              `
            );
          }}
        >
          <div className="field">
            <label>First Name</label>
            <input type="text" name="firstName" required />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input type="text" name="lastName" required />
          </div>
          <div className="field">
            <label>Email Address</label>
            <input type="email" name="email" required />
          </div>
          <div className="field">
            <label>Phone Number</label>
            <input type="tel" name="phoneNumber" required pattern="\d{10}" />
          </div>
          <div>
            <button type="submit">Sign Me Up!</button>
            {this.state.formIsDirty && (
              <span
                style={{ marginLeft: "15px", color: "red", fontWeight: 900 }}
              >
                The form is dirty
              </span>
            )}
          </div>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
