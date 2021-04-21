import React from "react";

const defaultConfig = {
  validationErrorClass: "validation-error",
  parentErrorClass: "has-validation-error",
  errorElementTagName: "div",
  inputElementSelector: "input, select, textarea"
};

export default function useForm(config) {
  const [isDirty, setIsDirty] = React.useState(false)
  const formRef = React.useRef()

  const finalConfig = {...defaultConfig, ...config};
    const {
      validationErrorClass,
      parentErrorClass,
      errorElementTagName,
      inputElementSelector
    } = finalConfig;

  function checkValidity(input, options) {
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

  function handleInput(e) {
    checkValidity(e.target, { insertError: false });
    if (isDirty === false) {
      setIsDirty(true)
    }
  }

  function handleInvalid(e) {
    e.preventDefault();
    checkValidity(e.target, { insertError: true });
  }

  React.useEffect(() => {
    const inputs = inputElementSelector ? formRef.current.querySelectorAll(inputElementSelector) : [];

    for (const input of inputs) {
      input.addEventListener("input", handleInput);
      input.addEventListener("invalid", handleInvalid);
    };

    return () => {
      for (const input of inputs) {
        input.removeEventListener("input", handleInput);
        input.removeEventListener("invalid", handleInvalid);
      }
    };
  }, []);

  function Form({ onSubmit, children, ...rest }) {
    return React.useMemo(() => (
      <form
        {...rest}
        ref={formRef}
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
    ), []);
  }

  return { Form, isDirty };
}
