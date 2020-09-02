import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "theme-ui";
import TitleInput from "./styled/title-input";
import Conditions from "./conditions";
import Trash from "./icons/trash";

const Scenario = ({ uid, index, fields, updateForm }) => {
  const updateHandler = (key) => (
    (val) => {
      updateForm({
        type: "updateScenario",
        payload: {
          uid,
          value: {
            [key]: val
          }
        }
      });
    }
  );

  const nestedUpdateHandler = (conditionType) => (
    (nestedKey) => (
      (val = "") => {
        console.log(val);
        updateForm({
          type: "nestedUpdateScenario",
          payload: {
            uid,
            conditionType,
            value: {
              [nestedKey]: val
            }
          }
        });
      }
    )
  );

  const handleRemoveScenario = () => {
    updateForm({
      type: "removeScenario",
      payload: { uid }
    });
  };

  const handleRemoveCondition = (conditionType) => (
    (nestedKey) => {
      updateForm({
        type: "removeCondition",
        payload: {
          uid,
          conditionType,
          nestedKey
        }
      });
    }
  );

  const handleAddCondition = (conditionType) => (
    (nestedKey) => {
      updateForm({
        type: "addCondition",
        payload: {
          uid,
          conditionType,
          nestedKey
        }
      })
    }
  );

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
        updateHandler={updateHandler("title")}
        mr={4}
      />
      <Conditions
        conditions={fields.given}
        conditionType="given"
        updateHandler={nestedUpdateHandler("given")}
        removeHandler={handleRemoveCondition("given")}
        addHandler={handleAddCondition("given")}
      />
      <Conditions
        conditions={fields.when}
        conditionType="when"
        updateHandler={nestedUpdateHandler("when")}
        removeHandler={handleRemoveCondition("when")}
        addHandler={handleAddCondition("when")}
      />
      <Conditions
        conditions={fields.then}
        conditionType="then"
        updateHandler={nestedUpdateHandler("then")}
        removeHandler={handleRemoveCondition("then")}
        addHandler={handleAddCondition("then")}
      />
    </Card>
  ) : null;
};

Scenario.propTypes = {
  fields: PropTypes.any.isRequired,
  updateForm: PropTypes.func.isRequired
};

export default Scenario;
