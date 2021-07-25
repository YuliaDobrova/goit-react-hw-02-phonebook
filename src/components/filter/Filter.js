import React from "react";
import styles from "./FIlter.module.css";

const Filter = ({ value, onFilter }) => {
  const onContactFilter = (event) => {
    onFilter(event.target.value);
  };

  return (
    <>
      <label className={styles.filterName}>
        Find contacts by name
        <input type="text" value={value} onFilter={onContactFilter} />
      </label>
    </>
  );
};

export default Filter;
