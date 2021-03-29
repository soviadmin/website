import { graphql } from "gatsby"
import React from "react"

export default function MyFile({ data }) {
  return (
    <div style={{ color: "white" }}>
      <h1>list everything here</h1>
      <tbody>
        {data.allFile.edges.map( ({ node }, index) => (
          <tr>
            <td>{node.relativePath}</td>
            <td>{node.prettySize}</td>
            <td>{node.extension}</td>
            <td>{node.birthTime}</td>
          </tr>
        ))}
      </tbody>
    </div>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime
        }
      }
    }
  }
`
