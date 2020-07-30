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
      given: "",
      when: "",
      then: ""
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
    case "addScenario":
      return {
        ...state,
        scenarios: {
          ...scenarios,
          [uniqId()]: {
            title: "",
            given: "",
            when: "",
            then: ""
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
