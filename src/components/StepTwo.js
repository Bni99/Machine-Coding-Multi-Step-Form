const StepTwo = ({ data, setData, errors }) => {
  const { phone, city } = data;

  const handleDataChange = (e, item) => {
    setData((prevData) => {
      return { ...prevData, [item]: e.target.value };
    });
  };
  return (
    <div>
      <div className="stepone-form-container">
        <label>
          Phone :{" "}
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => handleDataChange(e, "phone")}
          />
        </label>
        {errors.phone && <span className="error-text">{errors.phone}</span>}
        <label>
          City :{" "}
          <input
            type="text"
            name="city"
            value={city}
            onChange={(e) => handleDataChange(e, "city")}
          />
        </label>
        {errors.city && <span className="error-text">{errors.city}</span>}
      </div>
    </div>
  );
};

export default StepTwo;
