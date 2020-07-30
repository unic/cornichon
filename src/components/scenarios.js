/** @jsx jsx */
import { jsx, Box, Flex, Button } from "theme-ui";
import PropTypes from "prop-types";
import Scenario from "./scenario";

const Scenarios = ({ scenarios, updateForm }) => {
  const handleAddScenario = () => {
    updateForm({ type: "addScenario" });
  };

  return (
    <Box>
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <h2
          sx={{
            variant: "text.heading",
            fontSize: 3
          }}
        >
          Acceptance Criteria
        </h2>
        <Button
          type="button"
          onClick={handleAddScenario}
          sx={{
            variant: "primary"
          }}
        >
          Add Scenario
        </Button>
      </Flex>
      {Object.keys(scenarios).map((key, index) => (
        <Scenario
          key={key}
          uid={key}
          index={index}
          fields={scenarios[key]}
          updateForm={updateForm}
        />
      ))}
    </Box>
  );
};

Scenarios.propTypes = {
  scenarios: PropTypes.any.isRequired
};

export default Scenarios;
