import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Sidebar from '../components/Sidebar';

const TemplateWrapper = ({children}) => (
    <div className="container dc-body">
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
        <div className="row">
            <Sidebar/>
            <div>
                {children()}
            </div>
        </div>
    </div>
)

TemplateWrapper.propTypes = {
    children: PropTypes.func
}

export default TemplateWrapper