import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";
import { Button } from "reactstrap";

const propTypes = {
    title: PropTypes.string,
    button: PropTypes.shape({
        text: PropTypes.string,
        action: PropTypes.func,
    }),
};

const Card = ({ title, button, children }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h4>{title}</h4>
                {button && <Button color="primary" onClick={button.action}>{button.text}</Button>}
            </div>
            <div className={styles.content}>{children}</div>
        </div>
    );
};

Card.propTypes = propTypes;

export default Card;