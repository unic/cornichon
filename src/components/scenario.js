import React from "react";
import PropTypes from "prop-types";
import Input from "./input";
import TitleInput from "./styled/title-input";
import { Card, Button } from "theme-ui";
import Trash from "./icons/trash";

const Scenario = ({ uid, index, fields, updateForm }) => {
  const updateHandler = (key, val) => {
    updateForm({
      type: "updateScenario",
      payload: {
        uid,
        value: {
          [key]: val
        }
      }
    });
  };

  const handleRemoveScenario = () => {
    updateForm({
      type: "removeScenario",
      payload: { uid }
    });
  };

  return fields ? (
    <Card>
      <Button
        type="button"
        onClick={handleRemoveScenario}
        sx={{
          variant: "buttons.close"
        }}
      >
        <Trash />
      </Button>
      <TitleInput
        id={`scenario${index + 1}`}
        keyName="title"
        label={`Scenario ${index + 1}`}
        placeholder={`Scenario Title...`}
        value={fields.title}
        updateHandler={updateHandler}
        mr={4}
      />
      <Input
        label="Given"
        id={`given${index + 1}`}
        keyName="given"
        value={fields.given}
        updateHandler={updateHandler}
      />
      <Input
        label="When"
        id={`when${index + 1}`}
        keyName="when"
        value={fields.when}
        updateHandler={updateHandler}
      />
      <Input
        label="Then"
        id={`then${index + 1}`}
        keyName="then"
        value={fields.then}
        updateHandler={updateHandler}
      />
    </Card>
  ) : null;
};

Scenario.propTypes = {
  fields: PropTypes.any.isRequired,
  updateForm: PropTypes.func.isRequired
};

export default Scenario;
