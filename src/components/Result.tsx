import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import CompressIcon from "@mui/icons-material/Compress";
import WaterIcon from '@mui/icons-material/Water';
import React, { FC } from "react";
import CardComponent from "./CardComponent";
import { Grid } from "@mui/material";

interface iResult {
  data: any;
}

const Result: FC<iResult> = ({ data }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <CardComponent
          data={data?.main?.temp}
          icon={<DeviceThermostatIcon />}
        />
      </Grid>
      <Grid item xs={6}>
        <CardComponent data={data?.main?.pressure} icon={<CompressIcon />} />
      </Grid>
      <Grid item xs={6}>
        <CardComponent data={data?.main?.humidity} icon={<WaterIcon />} />
      </Grid>
    </Grid>
  );
};

export default Result;
