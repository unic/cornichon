/** @jsx jsx */
import { useReducer } from "react";
import { jsx, Flex, Box } from "theme-ui";
import { specificationReducer, initialState } from "../store/state";
import UserStory from "./user-story";
import Scenarios from "./scenarios";
import Output from "./output";
import SpecificationTitle from "./specification-title";

const Specification = () => {
  const [state, dispatch] = useReducer(specificationReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <Flex>
      <Box
        p={4}
        sx={{
          flex: "1 0 50%"
        }}
      >
        <form onSubmit={handleSubmit}>
          {state.title !== undefined ? (
            <SpecificationTitle titleValue={state.title} updateForm={dispatch} />
          ) : null}
          {state.userStory ? (
            <UserStory fields={state.userStory} updateForm={dispatch} />
          ) : null}
          {state.scenarios ? (
            <Scenarios scenarios={state.scenarios} updateForm={dispatch} />
          ) : null}
        </form>
      </Box>
      <Box
        p={4}
        sx={{
          flex: "1 0 50%"
        }}
      >
        <Output fields={state} />
      </Box>
    </Flex>
  );
};

export default Specification;
