import React from "react";

export default function useForm({ onSubmit }) {
  const [isDirty, setisDirty] = React.useState(false);

  React.useLayoutEffect(() => {
    const validationErrorClass = "validation-error";
    const parentErrorClass = "has-validation-error";
    const inputs = document.querySelectorAll("input, select, textarea");

    const setFormToDirty = () => {
      if (isDirty === false) {
        setisDirty(true);
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

  return { Form, isDirty };
}

function Form({ onSubmit, children }) {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const fieldData = {};
        for (const [key, value] of formData.entries()) {
          fieldData[key] = value;
        }
        onSubmit && onSubmit({ event, formData, fieldData });
      }}
    >
      {children}
    </form>
  );
}
