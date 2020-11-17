// import { useStaticQuery, graphql } from "gatsby"

// export const useImage = () => {
//   // Only a workaround to query multiple images without looping through an array
//   const imgContainer = useStaticQuery (
//     graphql`
//       query {
//         home01: file(relativePath: { eq: "svg/illustration1.svg" }) {
//             childImageSharp {
//               fluid(quality: 100) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//         }
//       }
//     `
//   );
//   return imgContainer;
// }