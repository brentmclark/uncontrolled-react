import React from "react";
import useForm from "@uncontrolled/react";

function WithFetchedData(props) {
  const { Form } = useForm();

  return (
    <div>
      {React.useMemo(
        () => (
          <Form
            onSubmit={({ fieldData }) => {
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
            <FormBody />
          </Form>
        ),
        []
      )}
    </div>
  );
}

function FormBody(props) {
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    async function getUserData() {
      const userData = await api.getUser(1);
      setUser(userData);
    }
    getUserData();
  }, [setUser]);
  return (
    <>
    <div className="field">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                required
                defaultValue={user.firstName}
              />
            </div>
            <div className="field">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                required
                defaultValue={user.lastName}
              />
            </div>
            <div className="field">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                required
                defaultValue={user.email}
              />
            </div>
            <div className="field">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                required
                pattern="\d{10}"
                defaultValue={user.phone}
              />
            </div>
            <div>
              <button type="submit">Sign Me Up!</button>
            </div>
            </>
  )
}

// A fake API to simulate fetched data
const api = {
  getUser: async (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          firstName: "Brent",
          lastName: "Clark",
          email: "brent@my-site.com",
          phone: "555-222-1234"
        });
      }, 300);
    });
  }
};

export {WithFetchedData as default}
