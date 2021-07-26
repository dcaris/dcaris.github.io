import * as React from "react"
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, About } from '@components';

// styles
const ContainerStyle = styled.main`
  counter-reset: section;
`;

// markup
const IndexPage = ({location}) => {
  return (
    <Layout location={location}>
      <ContainerStyle className="fillHeight">
        <About />
      </ContainerStyle>
    </Layout>
  )
}

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default IndexPage
