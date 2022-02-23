import { Stack } from "@mui/material";
import { SkeletonComponent } from "../components/input-components/SkeletonComponent";

export const Skelton = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <>
      <td className="elementName">
        <h3>Skelton</h3>
      </td>
      <td>
        <Stack spacing={1} sx={{ marginLeft: "300px" }}>
          <SkeletonComponent variant="text" width={210} />
          <SkeletonComponent variant="circular" width={40} height={40} />
          <SkeletonComponent variant="rectangular" width={210} height={118} />
        </Stack>
      </td>
    </>
  );
};
