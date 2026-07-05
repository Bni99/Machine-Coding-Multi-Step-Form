const StepOne = ({ data, setData, errors }) => {
  const { name, email } = data;

  const handleDataChange = (e, item) => {
    setData((prevData) => {
      return { ...prevData, [item]: e.target.value };
    });
  };

  return (
    <div>
      <div className="stepone-form-container">
        <label>
          Name :{" "}
          <input
            type="text"
            name="firstName"
            value={name}
            onChange={(e) => handleDataChange(e, "name")}
          />
        </label>
        {errors.name && <span className="error-text">{errors.name}</span>}
        <label>
          Email :{" "}
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => handleDataChange(e, "email")}
          />
        </label>
        {errors.email && <span className="error-text">{errors.email}</span>}
      </div>
    </div>
  );
};

export default StepOne;
