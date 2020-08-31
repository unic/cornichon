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
        ...payload
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
      const newScenarios = { ...scenarios };
      delete newScenarios[payload.uid];
      return {
        ...state,
        scenarios: newScenarios
      };
    default:
      console.log("invalid action");
      return state;
  }
};
