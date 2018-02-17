import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../styles/site.module.scss'
import Sidebar from '../components/Sidebar';

const TemplateWrapper = ({children}) => (
    <div className="container dc-body">
        <Helmet
            title="Daniel Caris Site"
            meta={[{
                name: 'description',
                content: 'Sample'
            }
            
        ]}/>
        <div className="row">
            <Sidebar/>
            <div className="dc-body-content">
                {children()}
            </div>
        </div>
    </div>
)

TemplateWrapper.propTypes = {
    children: PropTypes.func
}

export default TemplateWrapper