/** @jsx jsx */
import { jsx, Input, Flex, Box } from "theme-ui";
import PropTypes from "prop-types";
import VisuallyHidden from "./styled/visually-hidden";
import TitleInput from "./styled/title-input";

const SpecificationTitle = ({ updateForm, titleValue }) => {
  const updateTitle = (key) => (
    (val) => {
      updateForm({
        type: "updateTitle",
        payload: {
          value: {
            [key]: val
          }
        }
      });
    }
  );

  return (
    <TitleInput
      id="title"
      keyName="title"
      label="User Story Title"
      placeholder="Enter a Story Title..."
      value={titleValue}
      updateHandler={updateTitle("title")}
    />
  );
};

SpecificationTitle.propTypes = {
  updateForm: PropTypes.func.isRequired,
  titleValue: PropTypes.string.isRequired
};

export default SpecificationTitle;
