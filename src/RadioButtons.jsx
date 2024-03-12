// Import PropTypes to validate the types of props passed to our component.
import PropTypes from "prop-types";

// Define the RadioButtons component. This component takes several props to customize its behavior.
export const RadioButtons = ({
  value, // The currently selected value.
  updateSurveyData, // Function to update the survey data based on selection.
  valueKey, // Key for the question, used to update the right part of the survey data.
  question, // The question text to be displayed above the options.
  options, // Array of options for the radio buttons.
}) => {
  // Function to handle the change event when a radio button is selected.
  const handleChange = (event) => {
    // Calls updateSurveyData with the valueKey and the selected option's value.
    updateSurveyData(valueKey, event.target.value);
  };

  // Render the component
  return (
    <div>
      <p>{question}</p> {/* Display the question */}
      {/* Loop through the options and render a radio button for each one */}
      {options.map((option) => (
        <label key={option.valueKey}>
          {" "}
          {/* Use option.valueKey as a unique key for each option */}
          <input
            type="radio" // Set the input type to radio to create radio buttons.
            name={valueKey} // All radio buttons in a group share the same name.
            value={option.valueKey} // The value of the radio button.
            checked={value === option.valueKey} // Check the radio button if its value matches the current value.
            onChange={handleChange} // Set the handleChange function to run when an option is selected.
          />
          {option.name} {/* Display the name of the option */}
        </label>
      ))}
    </div>
  );
};

// Define propTypes for the RadioButtons component to ensure correct prop types are passed.
RadioButtons.propTypes = {
  value: PropTypes.string.isRequired, // 'value' should be a string and is required.
  updateSurveyData: PropTypes.func.isRequired, // 'updateSurveyData' should be a function and is required.
  valueKey: PropTypes.string.isRequired, // 'valueKey' should be a string and is required.
  question: PropTypes.string.isRequired, // 'question' should be a string and is required.
  options: PropTypes.arrayOf(
    // 'options' should be an array of objects, each with 'name' and 'valueKey' strings.
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      valueKey: PropTypes.string.isRequired,
    })
  ).isRequired,
};
