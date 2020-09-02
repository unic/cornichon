import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "theme-ui";
import TitleInput from "./styled/title-input";
import Conditions from "./conditions";
import Trash from "./icons/trash";

const Scenario = ({ uid, index, fields, updateForm }) => {
  const handleUpdateScenario = (key) => (
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

  const handleRemoveScenario = () => {
    updateForm({
      type: "removeScenario",
      payload: { uid }
    });
  };

  const handleUpdateAcceptanceCriteria = (conditionType) => (
    (nestedKey) => (
      (val = "") => {
        console.log(val);
        updateForm({
          type: "updateAcceptanceCriteria",
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

  const handleRemoveAcceptanceCriteria = (conditionType) => (
    (nestedKey) => {
      updateForm({
        type: "removeAcceptanceCriteria",
        payload: {
          uid,
          conditionType,
          nestedKey
        }
      });
    }
  );

  const handleAddAcceptanceCriteria = (conditionType) => (
    (nestedKey) => {
      updateForm({
        type: "addAcceptanceCriteria",
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
        updateHandler={handleUpdateScenario("title")}
        mr={4}
      />
      <Conditions
        conditions={fields.given}
        conditionType="given"
        updateHandler={handleUpdateAcceptanceCriteria("given")}
        addHandler={handleAddAcceptanceCriteria("given")}
        removeHandler={handleRemoveAcceptanceCriteria("given")}
      />
      <Conditions
        conditions={fields.when}
        conditionType="when"
        updateHandler={handleUpdateAcceptanceCriteria("when")}
        addHandler={handleAddAcceptanceCriteria("when")}
        removeHandler={handleRemoveAcceptanceCriteria("when")}
      />
      <Conditions
        conditions={fields.then}
        conditionType="then"
        updateHandler={handleUpdateAcceptanceCriteria("then")}
        addHandler={handleAddAcceptanceCriteria("then")}
        removeHandler={handleRemoveAcceptanceCriteria("then")}
      />
    </Card>
  ) : null;
};

Scenario.propTypes = {
  fields: PropTypes.any.isRequired,
  updateForm: PropTypes.func.isRequired
};

export default Scenario;
