import React from "react";
import PropTypes from "prop-types";
import { Box, Button } from "theme-ui";
import uniqId from "uniqId";
import Condition from "./condition";
import Plus from "./icons/plus";

const Conditions = ({
  conditions,
  conditionType,
  updateHandler,
  removeHandler
}) => {
  return (
    <Box
      sx={{
        marginBottom: 4
      }}
    >
      {Object.keys(conditions).map((key, i) => (
        <Condition
          key={key}
          keyName={key}
          index={i}
          condition={conditions[key]}
          conditionType={conditionType}
          updateHandler={updateHandler}
          removeHandler={removeHandler}
        />
      ))}
      <Button
        type="button"
        onClick={() => updateHandler(conditionType, uniqId())}
        sx={{
          variant: "buttons.addAnd"
        }}
      >
        <Plus />
      </Button>
    </Box>
  );
};

Conditions.propTypes = {
  conditions: PropTypes.any.isRequired,
  conditionType: PropTypes.string.isRequired,
  updateHandler: PropTypes.func.isRequired,
  removeHandler: PropTypes.func.isRequired
};

export default Conditions;
