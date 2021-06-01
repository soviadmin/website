import { useStaticQuery, graphql } from "gatsby"

export const useImage = () => {
  // Only a workaround to query multiple images without looping through an array
  const imgContainer = useStaticQuery (
    graphql`
      query {
        equipment40_01: file(relativePath: { eq: "equipment/40opentop.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
        }
        equipment40_02: file(relativePath: { eq: "equipment/40highcube_flatrack.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
        }
        equipment40_03: file(relativePath: { eq: "equipment/40highcube_superrack.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
        }
        equipment40_04: file(relativePath: { eq: "equipment/40superrack.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
        }
        equipment40_05: file(relativePath: { eq: "equipment/40flatrack_47mt.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
        }
        equipment40_06: file(relativePath: { eq: "equipment/40flatrack_collapsible_end.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
        }
        equipment40_07: file(relativePath: { eq: "equipment/40highcube_hardtop_opentop.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
        }
        equipment20_01: file(relativePath: { eq: "equipment/20opentop.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
        }
        equipment20_02: file(relativePath: { eq: "equipment/20highcube_opentop.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
        }
        equipment20_03: file(relativePath: { eq: "equipment/20flatrack_31mt.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
        }
        equipment20_04: file(relativePath: { eq: "equipment/20highcube_hardtop.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
        }
        equipment20_reefer: file(relativePath: { eq: "equipment/20rf.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        equipment40_reefer: file(relativePath: { eq: "equipment/40rf_hq.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        oog04: file(relativePath: { eq: "oog/sovi4.JPG" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        oog05: file(relativePath: { eq: "oog/sovi5.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        oog06: file(relativePath: { eq: "oog/sovi6.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        oog07: file(relativePath: { eq: "oog/sovi7.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        oog08: file(relativePath: { eq: "oog/sovi8.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        oog09: file(relativePath: { eq: "oog/sovi9.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        oog17: file(relativePath: { eq: "oog/sovi17.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        oog18: file(relativePath: { eq: "oog/sovi18.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        oog20: file(relativePath: { eq: "oog/sovi20.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        oog23: file(relativePath: { eq: "oog/sovi23.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        oog25: file(relativePath: { eq: "oog/sovi25.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        oog29: file(relativePath: { eq: "oog/sovi29.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        oog31: file(relativePath: { eq: "oog/sovi31.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        oog36: file(relativePath: { eq: "oog/sovi36.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        } 
        oog39: file(relativePath: { eq: "oog/sovi39.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        } 
        oog45: file(relativePath: { eq: "oog/sovi45.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        } 
        oog46: file(relativePath: { eq: "oog/sovi46.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        } 
        oog49: file(relativePath: { eq: "oog/sovi49.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sovi_map: file(relativePath: { eq: "map/SOVI_MAP.png" }) {
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