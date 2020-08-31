/** @jsx jsx */
import { jsx, Input as ThemeInput, Label, Box } from "theme-ui";
import PropTypes from "prop-types";
import VisuallyHidden from "./styled/visually-hidden";

const Input = ({
  id,
  keyName,
  nestedKey,
  label,
  value,
  updateHandler,
  visuallyHidden,
  ...props
}) => {
  const handleChange = (e) => {
    if (nestedKey !== null) {
      updateHandler(keyName, nestedKey, e.target.value);
    } else {
      updateHandler(keyName, e.target.value);
    }
  };

  return (
    <Box mb={3} {...props}>
      {visuallyHidden ? (
        <VisuallyHidden>
          <Label htmlFor={id} mb={1}>
            {label}
          </Label>
        </VisuallyHidden>
      ) : (
        <Label htmlFor={id} mb={1}>
          {label}
        </Label>
      )}
      <ThemeInput type="text" id={id} value={value} onChange={handleChange} />
    </Box>
  );
};

Input.defaultProps = {
  visuallyHidden: false,
  nestedKey: null
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  keyName: PropTypes.string.isRequired,
  nestedKey: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  updateHandler: PropTypes.func.isRequired,
  visuallyHidden: PropTypes.bool
};

export default Input;
