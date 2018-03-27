import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Sidebar from '../components/Sidebar';

import {Grid, Row, Col} from 'react-flexbox-grid';
import '../styles/index.scss';
import styles from "../styles/site.module.scss";

const TemplateWrapper = ({children}) => (
    <div className={styles.dcBody}>
        <Helmet
            title="Daniel Caris Site"
            meta={[{
                name: 'description',
                content: 'Sample'
            }
        ]}
            link={[{
                rel: "stylesheet",
                href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            }
        ]}/>
        <Row className={styles.dcBodyRow}>
            <Sidebar/>

            <div className={styles.dcBodyContent}>
                {children()}
            </div>
        </Row>
    </div>
)

TemplateWrapper.propTypes = {
    children: PropTypes.func
}

export default TemplateWrapper