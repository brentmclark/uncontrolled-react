import React from "react";
import serialize from "form-serialize";

export default function Form(props) {
  const [formIsDirty, setFormIsDirty] = React.useState(false);

  React.useLayoutEffect(() => {
    const validationErrorClass = "validation-error";
    const parentErrorClass = "has-validation-error";
    const inputs = document.querySelectorAll("input, select, textarea");

    const setFormToDirty = () => {
      if (formIsDirty === false) {
        setFormIsDirty(true);
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
  }, []);

  const { children, onSubmit } = props;
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        const fieldData = serialize(event.target, { hash: true });
        onSubmit && onSubmit({ event, fieldData });
      }}
    >
      {children({ formIsDirty })}
    </form>
  );
}
