const StepThree = ({ data, setData, errors }) => {
  const { salary, bank } = data;
  const handleDataChange = (e, item) => {
    setData((prevData) => {
      return { ...prevData, [item]: e.target.value };
    });
  };
  return (
    <div>
      <div className="stepone-form-container">
        <label>
          Salary :{" "}
          <input
            type="number"
            name="salary"
            value={salary}
            onChange={(e) => handleDataChange(e, "salary")}
          />
        </label>
        {errors.salary && <span className="error-text">{errors.salary}</span>}
        <label>
          Bank :{" "}
          <select value={bank} onChange={(e) => handleDataChange(e, "bank")}>
            <option value="hdfc">HDFC</option>
            <option value="idfc">IDFC</option>
            <option value="sbi">SBI</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default StepThree;
