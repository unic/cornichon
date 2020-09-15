import uniqId from "uniqId";

const generateEmptyScenario = () => ({
  [uniqId()]: {
    title: "",
    given: {
      [uniqId()]: ""
    },
    when: {
      [uniqId()]: ""
    },
    then: {
      [uniqId()]: ""
    }
  }
});

export const initialState = {
  title: "",
  userStory: {
    as: "",
    want: "",
    so: ""
  },
  scenarios: generateEmptyScenario()
};

export const specificationReducer = (state, action) => {
  const { userStory, scenarios } = state;
  const { type, payload } = action;

  switch (type) {
    // User Story Operations
    case "updateTitle":
      return {
        ...state,
        ...payload.value
      };
    case "updateUserStory":
      return {
        ...state,
        userStory: {
          ...userStory,
          ...payload.value
        }
      };

    // Scenario Operations
    case "updateScenario":
      return {
        ...state,
        scenarios: {
          ...scenarios,
          [payload.uid]: {
            ...scenarios[payload.uid],
            ...payload.value
          }
        }
      };
    case "addScenario":
      return {
        ...state,
        scenarios: {
          ...scenarios,
          ...generateEmptyScenario()
        }
      };
    case "removeScenario":
      const updatedScenarios = { ...scenarios };
      delete updatedScenarios[payload.uid];
      return {
        ...state,
        scenarios: updatedScenarios
      };

    // Acceptance Critera (given, when, then, and, or) operations
    case "updateAcceptanceCriteria":
      return {
        ...state,
        scenarios: {
          ...scenarios,
          [payload.uid]: {
            ...scenarios[payload.uid],
            [payload.conditionType]: {
              ...scenarios[payload.uid][payload.conditionType],
              ...payload.value
            }
          }
        }
      };
    case "addAcceptanceCriteria":
      return {
        ...state,
        scenarios: {
          ...scenarios,
          [payload.uid]: {
            ...scenarios[payload.uid],
            [payload.conditionType]: {
              ...scenarios[payload.uid][payload.conditionType],
              [payload.nestedKey]: ""
            }
          }
        }
      };
    case "removeAcceptanceCriteria":
      const updatedScenario = { ...scenarios[payload.uid] };
      delete updatedScenario[payload.conditionType][payload.nestedKey];
      return {
        ...state,
        scenarios: {
          ...scenarios,
          [payload.uid]: updatedScenario
        }
      };

    // Catch all for invalid actions
    default:
      console.log("invalid action");
      return state;
  }
};
