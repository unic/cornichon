import React, { Fragment } from "react";

const sentenceStarters = {
  as: "As",
  want: "I want",
  so: "So that",
  given: "Given",
  when: "When",
  then: "Then",
  and: "and"
};

const Output = ({ fields }) => {
  return (
    <>
      <pre>{JSON.stringify(fields, null, 2)}</pre>
      {`<h1>User Story: ${fields.title}</h1>`}
      <br />
      {Object.keys(fields.userStory).map((storyKey) => (
        <Fragment key={storyKey}>
          {`<p><strong>${sentenceStarters[storyKey]}</strong> ${fields.userStory[storyKey]}</p>`}
          <br />
        </Fragment>
      ))}
      {`<h2>Acceptance Criteria</h2>`}
      <br />
      {Object.keys(fields.scenarios).map((scenarioKey) => {
        const scenario = fields.scenarios[scenarioKey];
        return (
          <Fragment key={scenarioKey}>
            {Object.keys(scenario).map((conditionKey) => {
              if (conditionKey === "title") {
                return (
                  <Fragment key={conditionKey}>
                    {`<h3>${scenario.title}</h3>`}
                    <br />
                  </Fragment>
                );
              } else {
                return (
                  <Fragment key={conditionKey}>
                    {Object.keys(scenario[conditionKey]).map(
                      (nestedKey, i) =>
                        `<p><strong>${
                          i === 0
                            ? sentenceStarters[conditionKey]
                            : sentenceStarters.and
                        }</strong> ${scenario[conditionKey][nestedKey]}</p>`
                    )}
                    <br />
                  </Fragment>
                );
              }
            })}
          </Fragment>
        );
      })}
    </>
  );
};

export default Output;
