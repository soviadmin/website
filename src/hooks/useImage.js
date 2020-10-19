import { useStaticQuery, graphql } from "gatsby"

export const useImage = () => {
  // Only a workaround to query multiple images without looping through an array
  const imgContainer = useStaticQuery (
    graphql`
      query {
          
      }
    `
  );
  return imgContainer;
}
// pic01: file(relativePath: { eq: "baking/b_lcake1.jpg" }) {
//   childImageSharp {
//     fluid(quality: 100) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }