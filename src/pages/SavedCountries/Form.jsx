import { useState } from "react";

export default function Form() {
  const emptyFormState = { fullName: "", email: "", country: "", bio: "" };
  const [formData, setFormData] = useState(emptyFormState);
  const [userInfo, setUserInfo] = useState(emptyFormState);

  // Update the state when input values change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "my-profile", ...formData }),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));

    setUserInfo(formData);
    setFormData(emptyFormState); // reset formData
  };

  return (
    <section className="form-wrapper">
      <h2>My Profile</h2>
      <form
        onSubmit={handleSubmit}
        data-netlify="true"
        name="my-profile"
        method="POST"
      >
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          placeholder="Full name"
        ></input>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
        ></input>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          placeholder="Country"
        ></input>
        <input
          type="text"
          name="bio"
          value={formData.bio}
          onChange={handleInputChange}
          placeholder="Bio"
        ></input>
        <input type="hidden" name="form-name" value="my-profile" />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
