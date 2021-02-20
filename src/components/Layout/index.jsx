import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

const propTypes = {
    props: PropTypes.object,
};

const Layout = ({ children }) => {
    return <div className={styles.container}>{children}</div>;
};

Layout.propTypes = propTypes;

export default Layout;