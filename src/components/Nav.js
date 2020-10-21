import React from "react"
import { NavWrapper } from "../elements"
import { useStaticQuery, Link, graphql } from "gatsby"

export const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo_size_invert.jpg" }) {
        publicURL
      }
      logo1: file(relativePath: { eq: "logo_size.jpg" }) {
        publicURL
      }
      logo2: file(relativePath: { eq: "logo_size_invert_1.jpg" }) {
        publicURL
      }
      logo3: file(relativePath: { eq: "logo_size_1.jpg" }) {
        publicURL
      }
      logo4: file(relativePath: { eq: "logo_size_invert_2.jpg" }) {
        publicURL
      }
      logo5: file(relativePath: { eq: "logo_size_2.jpg" }) {
        publicURL
      }
      logo6: file(relativePath: { eq: "logo_size_invert_3.jpg" }) {
        publicURL
      }
      logo7: file(relativePath: { eq: "logo_size_3.jpg" }) {
        publicURL
      }
      logo8: file(relativePath: { eq: "logo_size_invert_4.jpg" }) {
        publicURL
      }
      logo9: file(relativePath: { eq: "logo_size_4.jpg" }) {
        publicURL
      }
      logo10: file(relativePath: { eq: "logo_size_invert_5.jpg" }) {
        publicURL
      }
      logo11: file(relativePath: { eq: "logo_size_5.jpg" }) {
        publicURL
      }
    }
  `)
  return (
    <NavWrapper>
      <Link to="/">
        <img src={data.logo8.publicURL} alt="my logo" />
        <img src={data.logo9.publicURL} alt="my logo" />
        <img src={data.logo.publicURL} alt="my logo" />
        <img src={data.logo1.publicURL} alt="my logo" />
        <img src={data.logo2.publicURL} alt="my logo" />
        <img src={data.logo5.publicURL} alt="my logo" />
        <img src={data.logo6.publicURL} alt="my logo" />
        <img src={data.logo7.publicURL} alt="my logo" />
        <img src={data.logo10.publicURL} alt="my logo" />
        <img src={data.logo11.publicURL} alt="my logo" />
      </Link>
    </NavWrapper>
  )
}
