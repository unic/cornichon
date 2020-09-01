import React from "react";
import PropTypes from "prop-types";
import { Button, Flex, Box } from "theme-ui";
import Input from "./input";
import Trash from "./icons/trash";

const Condition = ({
  index,
  keyName,
  condition,
  conditionType,
  updateHandler,
  removeHandler
}) => {
  return (
    <Flex
      sx={{
        flexDirection: "row",
        position: "relative"
      }}
    >
      <Box
        sx={{
          flex: "90% 1 0"
        }}
      >
        <Input
          label={index === 0 ? conditionType : "and"}
          id={`${conditionType}${keyName}`}
          keyName={conditionType}
          nestedKey={keyName}
          value={condition}
          updateHandler={updateHandler}
        />
      </Box>
      <Box
        sx={{
          flex: "10% 0 1"
        }}
      >
        {index === 0 ? null : (
          <Button
            type="button"
            onClick={() => removeHandler(conditionType, keyName)}
            sx={{
              variant: "buttons.addAnd",
              marginTop: "25px"
            }}
          >
            <Trash />
          </Button>
        )}
      </Box>
    </Flex>
  );
};

Condition.propTypes = {
  index: PropTypes.number.isRequired,
  keyName: PropTypes.string.isRequired,
  condition: PropTypes.any.isRequired,
  conditionType: PropTypes.string.isRequired,
  updateHandler: PropTypes.func.isRequired,
  removeHandler: PropTypes.func.isRequired
};

export default Condition;
