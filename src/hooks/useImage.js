import { useStaticQuery, graphql } from "gatsby"

export const useImage = () => {
  // Only a workaround to query multiple images without looping through an array
  const imgContainer = useStaticQuery (
    graphql`
      query {
        equipment40_01: file(relativePath: { eq: "40opentop.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
        }
        equipment40_02: file(relativePath: { eq: "40highcube_flatrack.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
        }
        equipment40_03: file(relativePath: { eq: "40highcube_superrack.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
        }
        equipment40_04: file(relativePath: { eq: "40superrack.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
        }
        equipment40_05: file(relativePath: { eq: "40flatrack_47mt.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
        }
        equipment40_06: file(relativePath: { eq: "40flatrack_collapsible_end.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
        }
        equipment40_07: file(relativePath: { eq: "40highcube_hardtop_opentop.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
        }
        equipment20_01: file(relativePath: { eq: "20opentop.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
        }
        equipment20_02: file(relativePath: { eq: "20highcube_opentop.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
        }
        equipment20_03: file(relativePath: { eq: "20flatrack_31mt.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
        }
        equipment20_04: file(relativePath: { eq: "20highcube_hardtop.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
        }
      }
    `
  );
  return imgContainer;
}