import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Sidebar from '../components/Sidebar';

import {Grid, Row, Col} from 'react-flexbox-grid';
import {StyleSheet, css} from 'aphrodite';
import * as colours from '../styles/colours';
import * as viewports from '../styles/viewport';
import '../styles/index.scss'

const styles = StyleSheet.create({
    dcBody: {
        padding: '0px',
        width: '100%',
        height: '100%'
    },
    dcBodyRow: {
        width: '100%',
        height: '100%'
    },
    dcBodyContent: {
        padding: '20px',
        width: '100%',
        height: '100%',
        margin: '0px',
        marginTop: '-10px',
        backgroundColor: colours.bgDefault,
        [viewports.atLeastTablet]: {
            //overflowY: 'scroll'
            padding: '20px',
            margin: '-20px'
        }
    },
    dcBodyContentParagraph: {
        color: 'white',
        margin: '10px',
        textAlign: 'justify',
        fontSize: '20px'
    }
});

const TemplateWrapper = ({children}) => (
    <Grid className={css(styles.dcBody)}>
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
        <Row className={css(styles.dcBodyRow)}>
            <Col xs={12} sm={4} md={4} lg={3} xl={3}>
                <Sidebar/>
            </Col>
            <Col xs={12} sm={8} md={8} lg={9} xl={9}>
                <div className={css(styles.dcBodyContent)}>
                    {children()}
                </div>
            </Col>
        </Row>
    </Grid>
)

TemplateWrapper.propTypes = {
    children: PropTypes.func
}

export default TemplateWrapper