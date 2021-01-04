import React from "react";

const defaultConfig = {
  validationErrorClass: "validation-error",
  parentErrorClass: "has-validation-error",
  errorElementTagName: "div",
  inputElementSelector: "input, select, textarea"
};

export default function useForm(config) {
  const [isDirty, setisDirty] = React.useState(false);
  const formElem = React.useRef(null);

  React.useEffect(() => {
    const finalConfig = Object.assign({}, defaultConfig, config);
    const {
      validationErrorClass,
      parentErrorClass,
      errorElementTagName,
      inputElementSelector
    } = finalConfig;
    const inputs = document.querySelectorAll(inputElementSelector);
    console.log({ inputs, inputElementSelector });

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
          document.createElement(errorElementTagName);

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

      function handleInput() {
        // We can only update the error or hide it on input.
        // Otherwise it will show when typing.
        checkValidity({ insertError: false });

        // also handle dirty tracking
        setFormToDirty();
      }

      function handleInvalid(e) {
        // prevent showing the default display
        e.preventDefault();

        // We can also create the error in invalid.
        checkValidity({ insertError: true });
      }

      input.addEventListener("input", handleInput);
      input.addEventListener("invalid", handleInvalid);
    });

    return () => {
      inputs.forEach(input => {
        input.removeEventListener('input', handleInput)
        input.removeEventListener('invalid', handleInvalid)
      })
    }
  }, []);

  function Form({ onSubmit, children, ...rest }) {
    return (
      <form
        {...rest}
        onSubmit={event => {
          event.preventDefault();
          console.log("Submitting...");
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

  return { Form, isDirty };
}
