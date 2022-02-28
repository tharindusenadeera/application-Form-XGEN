import { FC, useState } from "react";
import { Paper, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { Box } from "@mui/system";
import { devCollapsed, devUnCollapsed } from "../../styles";
import { ButtonComponent } from "../inputComponents/ButtonComponent";
import "./styles.css";

export const ExampleMainSection: FC = () => {
  const [collapse, setCollapse] = useState(true);

  const styles = makeStyles({
    div: {
      width: "200px",
      height: "100px",
      background: "red",
      color: "white",
      margin: "10px",
    },
    btn: {
      background: "aqua",
    },
  });

  const classes = styles();

  return (
    <Paper>
      <div style={collapse ? devCollapsed : devUnCollapsed}>
        <Typography variant="h5" p={1} onClick={() => setCollapse(!collapse)}>
          Example Main Section
        </Typography>
        <Box m={2}>
          <Box className={classes.div}>Test class - M-UI Box Component</Box>

          <div className="test">Box class - div</div>

          <Typography className="header">
            Affected by normal css class - M-UI Typograpy component
          </Typography>

          <h1 className="header"> Affected by normal css class - H1 Tag</h1>

          <button className={classes.btn}>click me</button>

          <ButtonComponent title="clickme" className={classes.btn} />
        </Box>
      </div>
    </Paper>
  );
};
