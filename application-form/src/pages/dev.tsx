import { FC } from "react";

import { DependancyTesting } from "../components/developerTesting/dependancyTesting";
import { MultipleValuesInput } from "../components/developerTesting/multipleValuesInput";
import { OnlyOneInput } from "../components/developerTesting/onlyOneInput";

export const Dev: FC = () => {
  return (
    <>
      <DependancyTesting />
      <br />
      <br />
      <MultipleValuesInput />
      <br />
      <br />
      <OnlyOneInput />
    </>
  );
};
