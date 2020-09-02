/** @jsx jsx */
import { jsx, Flex, Box, Input, Label } from "theme-ui";
import PropTypes from "prop-types";
import VisuallyHidden from "./visually-hidden";

const TitleInput = ({
  id,
  keyName,
  label,
  placeholder,
  value,
  updateHandler,
  ...props
}) => {
  const handleChange = (e) => {
    updateHandler(e.target.value);
  };

  return (
    <Flex
      sx={{
        alignItems: "center"
      }}
      mb={4}
      {...props}
    >
      <VisuallyHidden>
        <Label htmlFor={id}>{label}</Label>
      </VisuallyHidden>
      <Box
        sx={{
          flex: "1 0 auto"
        }}
      >
        <Input
          type="text"
          placeholder={placeholder}
          id={id}
          keyName={keyName}
          value={value}
          onChange={handleChange}
          sx={{
            variant: "forms.titleInput"
          }}
        />
      </Box>
    </Flex>
  );
};

TitleInput.propTypes = {
  id: PropTypes.string.isRequired,
  keyName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  updateHandler: PropTypes.func.isRequired
};

export default TitleInput;
