import React from "react";
import PropTypes from "prop-types";
import uniqId from "uniqId";
import { Card, Button, Flex, Box } from "theme-ui";
import Input from "./input";
import TitleInput from "./styled/title-input";
import Condition from "./condition";
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
      <Condition updateHandler={nestedUpdateHandler} conditionType="given">
        {Object.keys(fields.given).map((key, i) => (
          <Input
            label={i === 0 ? "Given" : "and"}
            id={`given${key}`}
            keyName="given"
            nestedKey={key}
            value={fields.given[key]}
            updateHandler={nestedUpdateHandler}
          />
        ))}
      </Condition>
      <Condition updateHandler={nestedUpdateHandler} conditionType="when">
        {Object.keys(fields.when).map((key, i) => (
          <Input
            label={i === 0 ? "When" : "and"}
            id={`when${key}`}
            keyName="when"
            nestedKey={key}
            value={fields.when[key]}
            updateHandler={nestedUpdateHandler}
          />
        ))}
      </Condition>
      <Condition updateHandler={nestedUpdateHandler} conditionType="then">
        {Object.keys(fields.then).map((key, i) => (
          <Input
            label={i === 0 ? "Then" : "and"}
            id={`then${key}`}
            keyName="then"
            nestedKey={key}
            value={fields.then[key]}
            updateHandler={nestedUpdateHandler}
          />
        ))}
      </Condition>
    </Card>
  ) : null;
};

Scenario.propTypes = {
  fields: PropTypes.any.isRequired,
  updateForm: PropTypes.func.isRequired
};

export default Scenario;
