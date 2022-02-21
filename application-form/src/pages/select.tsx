import { SelectComponents } from "../components/input-components/SelectComponents";

export const Select = () => {
  return (
    <>
      <h1>Selects</h1>
      <SelectComponents
        values={[
          { value: 1, name: "Toyota" },
          { value: 2, name: "Nissan" },
        ]}
        sx={{ width: "100px" }}
        label="car"
      />
      <SelectComponents
        values={[
          { value: 1, name: "Toyota" },
          { value: 2, name: "Nissan" },
        ]}
        sx={{ width: "200px" }}
        label="city"
        variant="outlined"
      />
      <SelectComponents
        values={[
          { value: 1, name: "Toyota" },
          { value: 2, name: "Nissan" },
        ]}
        sx={{ width: "200px" }}
        label="city"
        variant="outlined"
        error={true}
      />
    </>
  );
};
