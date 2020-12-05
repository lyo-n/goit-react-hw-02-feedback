import React from 'react';
import propTypes from 'prop-types';
import styles from './section.module.css';

const Section = ({title, children}) => {
    return (
        <>
            <h1 className={styles.title}>{title}</h1>
            {children}
        </>
    );
};
Section.propTypes = {
    title: propTypes.string.isRequired
};
export default Section;