import React from "react";
import PropTypes from "prop-types";
import uniqId from "uniqId";
import { Button, Flex, Box } from "theme-ui";
import Plus from "./icons/plus";

const Condition = ({ updateHandler, conditionType, children }) => {
  return (
    <Flex
      sx={{
        flexDirection: "row",
        position: "relative",
        marginBottom: 4
      }}
    >
      <Box
        sx={{
          flex: "90% 1 0"
        }}
      >
        {children}
      </Box>
      <Box
        sx={{
          flex: "10% 0 1"
        }}
      >
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
    </Flex>
  );
};

Condition.propTypes = {
  updateHandler: PropTypes.func.isRequired,
  conditionType: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Condition;
