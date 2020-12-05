import React from 'react';
import propTypes from 'prop-types';
import styles from './notification.module.css';


const Notification = ({message}) => {
    return (
        <>
        <p className={styles.note}>{message}</p>
        </>
    );
};

Notification.propTypes = {
    message: propTypes.string.isRequired
};

export default Notification;