import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

const propTypes = {
    props: PropTypes.object,
};

const PageTitle = ({ title }) => {
    return <h3 className={styles.title}>{title}</h3>;
};

PageTitle.propTypes = propTypes;

export default PageTitle;