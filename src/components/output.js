import React from "react";

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
      {Object.keys(fields.userStory).map((key) => (
        <>
          {`<p><strong>${sentenceStarters[key]}</strong> ${fields.userStory[key]}</p>`}
          <br />
        </>
      ))}
      {`<h2>Acceptance Criteria</h2>`}
      <br />
      {Object.keys(fields.scenarios).map((key) => {
        const scenario = fields.scenarios[key];
        return (
          <>
            {Object.keys(scenario).map((key) => {
              if (key === "title") {
                return (
                  <>
                    {`<h3>${scenario.title}</h3>`}
                    <br />
                  </>
                );
              } else {
                return (
                  <>
                    {Object.keys(scenario[key]).map(
                      (nestedKey, i) =>
                        `<p><strong>${
                          i === 0 ? sentenceStarters[key] : sentenceStarters.and
                        }</strong> ${scenario[key][nestedKey]}</p>`
                    )}
                    <br />
                  </>
                );
              }
            })}
          </>
        );
      })}
    </>
  );
};

export default Output;
