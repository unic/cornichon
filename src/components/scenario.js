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

  const nestedUpdateHandler = (key, nestedKey, val) => {
    // key = "given", "when"
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
    })
  }

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
      {Object.keys(fields.given).map(key => (
        <Input
          label="Given"
          id={`given${key}`}
          keyName="given"
          nestedKey={key}
          value={fields.given[key]}
          updateHandler={nestedUpdateHandler}
        />
      ))}
      {Object.keys(fields.when).map(key => (
        <Input
          label="When"
          id={`when${key}`}
          keyName="when"
          nestedKey={key}
          value={fields.when[key]}
          updateHandler={nestedUpdateHandler}
        />
      ))}
      {Object.keys(fields.then).map(key => (
        <Input
          label="Then"
          id={`then${key}`}
          keyName="then"
          nestedKey={key}
          value={fields.then[key]}
          updateHandler={nestedUpdateHandler}
        />
      ))}
    </Card>
  ) : null;
};

Scenario.propTypes = {
  fields: PropTypes.any.isRequired,
  updateForm: PropTypes.func.isRequired
};

export default Scenario;
