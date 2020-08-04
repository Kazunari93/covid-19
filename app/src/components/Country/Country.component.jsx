import React from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./Country.module.css";

const Country = () => {
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect>
        <option value="global">Global</option>
      </NativeSelect>
    </FormControl>
  );
};

export default Country;
