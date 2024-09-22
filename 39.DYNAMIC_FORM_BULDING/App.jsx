import React, { useState } from "react";

const DynamicFormBuilder = () => {
  const [formFields, setFormFields] = useState([{ name: "", value: "" }]);

  // Add a new field
  const addField = () => {
    setFormFields([...formFields, { name: "", value: "" }]);
  };

  // Remove a field
  const removeField = (index) => {
    const updatedFields = formFields.filter((_, i) => i !== index);
    setFormFields(updatedFields);
  };

  // Handle input changes
  const handleInputChange = (index, event) => {
    const updatedFields = [...formFields];
    updatedFields[index][event.target.name] = event.target.value;
    setFormFields(updatedFields);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Dynamic form data
    console.log("Form Data:", formFields);
    // You can send this data to a backend or process it further here.
  };

  return (
    <div>
      <h2>Dynamic Form Builder</h2>
      <form onSubmit={handleSubmit}>
        {formFields.map((field, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <input
              type="text"
              name="name"
              placeholder="Field Name"
              value={field.name}
              onChange={(e) => handleInputChange(index, e)}
              style={{ marginRight: "10px" }}
            />
            <input
              type="text"
              name="value"
              placeholder="Field Value"
              value={field.value}
              onChange={(e) => handleInputChange(index, e)}
              style={{ marginRight: "10px" }}
            />
            <button type="button" onClick={() => removeField(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addField}>
          Add Field
        </button>
        <button type="submit" style={{ marginLeft: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default DynamicFormBuilder;
