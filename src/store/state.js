import uniqId from "uniqId";

export const initialState = {
  title: "",
  userStory: {
    as: "",
    want: "",
    so: ""
  },
  scenarios: {
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
  }
};

export const specificationReducer = (state, action) => {
  const { userStory, scenarios } = state;
  const { type, payload } = action;

  switch (type) {
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
    case "nestedUpdateScenario":
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
    case "addScenario":
      return {
        ...state,
        scenarios: {
          ...scenarios,
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
        }
      };
    case "removeScenario":
      const updatedScenarios = { ...scenarios };
      delete updatedScenarios[payload.uid];
      return {
        ...state,
        scenarios: updatedScenarios
      };
    case "removeCondition":
      const updatedScenario = { ...scenarios[payload.uid] };
      delete updatedScenario[payload.conditionType][payload.nestedKey];
      return {
        ...state,
        scenarios: {
          ...scenarios,
          [payload.uid]: updatedScenario
        }
      };
    case "addCondition":
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
    default:
      console.log("invalid action");
      return state;
  }
};
