import { useState } from "react";

export default function SavedCountries() {
  const emptyFormState = { fullName: "", email: "", country: "", bio: "" };
  const [formData, setFormData] = useState(emptyFormState);
  const [userInfo, setUserInfo] = useState(emptyFormState);

  // Update the state when input values change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!formData.e.target.value) {
    //   alert("Please enter your full name.");
    //   return;
    // }
    setUserInfo(formData);
    setFormData(emptyFormState); // reset formData
  };

  return (
    <main>
      <h2>My Saved Countries</h2>

      <section className="form-wrapper">
        <h2>My Profile</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
}
