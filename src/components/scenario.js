import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "theme-ui";
import TitleInput from "./styled/title-input";
import Conditions from "./conditions";
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

  const nestedUpdateHandler = (key, nestedKey, val = "") => {
    // key = "given", "when", "then"
    // nestedKey = uid of condition
    updateForm({
      type: "nestedUpdateScenario",
      payload: {
        uid,
        conditionType: key,
        value: {
          [nestedKey]: val
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

  const handleRemoveCondition = (conditionType, nestedKey) =>
    updateForm({
      type: "removeCondition",
      payload: {
        uid,
        conditionType,
        nestedKey
      }
    });

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
      <Conditions
        conditions={fields.given}
        conditionType="given"
        updateHandler={nestedUpdateHandler}
        removeHandler={handleRemoveCondition}
      />
      <Conditions
        conditions={fields.when}
        conditionType="when"
        updateHandler={nestedUpdateHandler}
        removeHandler={handleRemoveCondition}
      />
      <Conditions
        conditions={fields.then}
        conditionType="then"
        updateHandler={nestedUpdateHandler}
        removeHandler={handleRemoveCondition}
      />
    </Card>
  ) : null;
};

Scenario.propTypes = {
  fields: PropTypes.any.isRequired,
  updateForm: PropTypes.func.isRequired
};

export default Scenario;
