import React from "react"
import { graphql } from "gatsby"

export default function BlogTemplate({ data }) {
  const { allMarkdownRemark } = data // data.markdownRemark holds your post data
  // const { frontmatter, html } = markdownRemark
  return (
    <div style={{ color: "#fff" }}>
      {allMarkdownRemark.edges.map(({ node }, index) => (
        <div>
          <h1 style={{ color: "#fff" }}>This is title: {node.id}</h1>
          <h2 style={{ color: "yellow" }}>This is date: {node.id}</h2>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          excerpt(format: PLAIN)
          id
        }
      }
    }
  }
`
// frontmatter {
//   date
//   title
// }

// markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//   html
//   frontmatter {
//     date(formatString: "MMMM DD, YYYY")
//     slug
//     title
//   }
// }
