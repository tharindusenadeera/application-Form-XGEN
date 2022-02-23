import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import {
  CircularProgressComponent,
  LinearProgressComponent,
} from "../components/input-components/ProgressComponent";
import { SkeletonComponent } from "../components/input-components/SkeletonComponent";

export const Progress = () => {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <>
      <td className="elementName">
        <h3>Progress</h3>
      </td>
      <td>
        <CircularProgressComponent />
        <Box
          sx={{
            position: "relative",
            display: "inline-flex",
            paddingLeft: "50px",
          }}
        >
          <CircularProgressComponent variant="determinate" value={progress} />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: "50px",
            }}
          >
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
            >{`${Math.round(progress)}%`}</Typography>
          </Box>
        </Box>

        <LinearProgressComponent sx={{ marginTop: "50px" }} />

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgressComponent
              variant="determinate"
              value={progress}
              sx={{ marginTop: "35px" }}
              color="secondary"
            />
          </Box>
          <Box sx={{ marginTop: "35px" }}>
            <Typography variant="body2" color="text.secondary">{`${Math.round(
              progress
            )}%`}</Typography>
          </Box>
        </Box>
      </td>
    </>
  );
};
