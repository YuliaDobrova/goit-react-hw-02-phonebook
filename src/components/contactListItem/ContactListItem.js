import React from "react";
import styles from "./ContactListItem.module.css";

const ContactListItem = ({ name, number, id, removeContact }) => {
  const remove = () => {
    removeContact(id);
  };
  return (
    <li className={styles.contactListItem}>
      <span>{name}</span>:<span>{number}</span>
      <button type="button" className={styles.listItemButton} onClick={remove}>
        Detete
      </button>
    </li>
  );
};

export default ContactListItem;
