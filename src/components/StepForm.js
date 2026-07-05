import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { useState } from "react";

const StepForm = () => {
  const [activeForm, setActiveForm] = useState(0);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    salary: 0,
    bank: "",
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const forms = [
    {
      name: "Personal Information",
      component: StepOne,
      validate: () => {
        let errors = {};
        if (!data.name) {
          errors.name = "Please enter name";
        }
        if (!data.email) {
          errors.email = "Please enter email";
        }
        setErrors(errors);

        if (!data.name || !data.email) {
          return false;
        }
        return true;
      },
    },
    {
      name: "Contact Information",
      component: StepTwo,
      validate: () => {
        let errors = {};
        if (!data.phone) {
          errors.phone = "Please enter phone";
        }
        if (!data.city) {
          errors.city = "Please enter city";
        }
        setErrors(errors);

        if (!data.phone || !data.city) {
          return false;
        }
        return true;
      },
    },
    {
      name: "Financial Information",
      component: StepThree,
      validate: () => {
        let errors = {};
        if (!data.salary) {
          errors.salary = "Please enter salary";
        }

        setErrors(errors);

        if (!data.salary) {
          return false;
        }
        return true;
      },
    },
  ];

  const currentActiveHeading = forms[activeForm].name;
  const CurrentActiveForm = forms[activeForm].component;

  const handlePrevious = () => {
    setActiveForm((prevData) => {
      return prevData - 1;
    });
  };

  const handleNext = () => {
    if (forms[activeForm].validate())
      setActiveForm((prevData) => {
        return prevData + 1;
      });
  };

  const handleSubmit = () => {
    if (forms[activeForm].validate()) setShowSuccess(true);
    console.log(data);
  };

  return (
    <div>
      {!showSuccess && (
        <div className="form-container">
          <h3>{currentActiveHeading}</h3>
          <CurrentActiveForm data={data} setData={setData} errors={errors} />
          {activeForm > 0 && <button onClick={handlePrevious}>Previous</button>}
          {activeForm !== forms.length - 1 && (
            <button onClick={handleNext}>Next</button>
          )}
          {activeForm === forms.length - 1 && (
            <button onClick={handleSubmit}>Submit</button>
          )}
        </div>
      )}
      {showSuccess && <div>Successfully Submitted the Form!</div>}
    </div>
  );
};

export default StepForm;
