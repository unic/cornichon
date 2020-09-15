/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import PropTypes from "prop-types";
import Input from "./input";

const UserStory = ({ fields, updateForm }) => {
  const updateHandler = (key) => (val) => {
    updateForm({
      type: "updateUserStory",
      payload: {
        value: {
          [key]: val
        }
      }
    });
  };

  return fields ? (
    <Box mb={5}>
      <Input
        label="As"
        id="as"
        keyName="as"
        value={fields.as}
        updateHandler={updateHandler("as")}
      />
      <Input
        label="I want"
        id="want"
        keyName="want"
        value={fields.want}
        updateHandler={updateHandler("want")}
      />
      <Input
        label="So that"
        id="so"
        keyName="so"
        value={fields.so}
        updateHandler={updateHandler("so")}
      />
    </Box>
  ) : null;
};

UserStory.propTypes = {
  fields: PropTypes.any.isRequired,
  updateForm: PropTypes.func.isRequired
};

export default UserStory;
