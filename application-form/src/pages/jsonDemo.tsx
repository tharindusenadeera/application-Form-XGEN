import React from "react";

export const JsonDemo = () => {
  const obj = {
    Loan: [
      // array of section objects
      {
        id: 0,
        key: "PrimaryApplicantDetails",
        visible: true,
        content: [
          // array of sub section objects
          {
            id: 0,
            key: "primaryapplican",
            visible: true,
            // field map
            fields: {
              firstname: { visible: true, mandatory: true },
              lastname: { visible: true, mandatory: false },
              othername: { visible: false },
            },
          },
          {
            id: 1,
            key: "subsecion 1",
            visible: false,
          },
        ],
      },
      {
        id: 1,
        key: "CustomerContactDetails",
        visible: false,
      },
      {
        id: 2,
        key: "AdditionalDetails",
        visible: true,
      },
    ],
  };
  const { Loan } = obj;
  console.log(
    Loan.filter((section) => section.visible == true && section.key).map(
      (sec) => <sec.key />
    )
  );

  return (
    <>
      {Loan.filter((section) => section.visible == true && section.key).map(
        (sec) => (
          <sec.key />
        )
      )}
    </>
  );
};
