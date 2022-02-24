import { FC } from "react";

import { DependancyTesting } from "../components/developerTesting/dependancyTesting";
import { MultipleValuesInput } from "../components/developerTesting/multipleValuesInput";

export const Dev: FC = () => {
  return (
    <>
      <DependancyTesting />
      <br />
      <br />
      <MultipleValuesInput />
    </>
  );
};
