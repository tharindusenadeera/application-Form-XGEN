import { FC } from "react";
import { useState } from "@hookstate/core";
import { DependancyTesting } from "../components/developerTesting/dependancyTesting";
import { MultipleValuesInput } from "../components/developerTesting/multipleValuesInput";
import { TestComponent } from "../components/developerTesting/testComponent";
import { globaleState } from "../constants/Store";
import { TestComponentTwo } from "../components/developerTesting/testComponentTwo";
import { TestComponentThree } from "../components/developerTesting/testComponentThree";
import { TestComponentFour } from "../components/developerTesting/testComponentFour";

export const Dev: FC = () => {
  let store = useState(globaleState);

  console.log("isLoggedIn", store.isLoggedIn.value);
  
  return (
    <>
      <DependancyTesting />
      <br />
      <br />
      <MultipleValuesInput />
      <br />
      <br />
      <TestComponent />
      <br />
      <br />
      <TestComponentTwo />
      <br />
      <br />
      <TestComponentThree />
      <br />
      <br />
      <TestComponentFour />
    </>
  );
};
