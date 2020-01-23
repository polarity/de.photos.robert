import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Img from 'gatsby-image'

export default ({ data }) => (
  <Layout>
    <div class='imgwrapper'>
      {data.allS3Object.nodes.map(({ localFile }) => {
        if (localFile) {
          return (<Img class='thumbnail' key={localFile.id} fluid={localFile.childImageSharp.fluid} />)
        } else {
          return null
        }
      })}
    </div>
  </Layout>
)

export const query = graphql`
  query IndexQuery {
    allS3Object(sort: {fields: localFile___modifiedTime, order: DESC}) {
      nodes {
        localFile {
          id
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
