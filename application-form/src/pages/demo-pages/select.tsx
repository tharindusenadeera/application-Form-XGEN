import { SelectComponent } from "../../components/inputComponents/SelectComponents";

export const Select = () => {
  return (
    <>
      <td className="elementName">
        <h3>Selects</h3>
      </td>
      <td>
        <SelectComponent
          values={[
            { value: 1, name: "Toyota" },
            { value: 2, name: "Nissan" },
          ]}
          sx={{ width: "100px" }}
          label="car"
        />
        <SelectComponent
          values={[
            { value: 1, name: "Toyota" },
            { value: 2, name: "Nissan" },
          ]}
          sx={{ width: "200px" }}
          label="city"
          variant="outlined"
        />
        <SelectComponent
          values={[
            { value: 1, name: "Toyota" },
            { value: 2, name: "Nissan" },
          ]}
          sx={{ width: "200px" }}
          label="city"
          variant="outlined"
          error={true}
        />
      </td>
    </>
  );
};
