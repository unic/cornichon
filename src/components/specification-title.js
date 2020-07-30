/** @jsx jsx */
import { jsx, Input, Flex, Box } from "theme-ui";
import PropTypes from "prop-types";
import VisuallyHidden from "./styled/visually-hidden";
import TitleInput from "./styled/title-input";

const SpecificationTitle = ({ updateForm, value }) => {
  const updateTitle = (key, value) => {
    updateForm({
      type: "updateTitle",
      payload: {
        [key]: value
      }
    });
  };

  return (
    <TitleInput
      id="title"
      keyName="title"
      label="User Story Title"
      placeholder="Enter a Story Title..."
      value={value}
      updateHandler={updateTitle}
    />
  );
};

SpecificationTitle.propTypes = {
  updateForm: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default SpecificationTitle;
