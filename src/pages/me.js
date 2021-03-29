import React from "react"
import { graphql } from "gatsby"

export default function Me({ data }) {
  return (
    <div style={{ color: "#fff" }}>
      {data.allMarkdownRemark.edges.map(({ node }, index) => (
        <div>
          <h1 style={{ color: "#fff" }}>
            This is title: {node.frontmatter.title}
          </h1>
          <h2 style={{ color: "yellow" }}>
            This is date: {node.frontmatter.date}
          </h2>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(format: PLAIN)
          id
          frontmatter {
            date
            title
          }
        }
      }
    }
  }
`
