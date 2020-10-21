import React from "react"
import { NavWrapper } from "../elements"
import { useStaticQuery, Link, graphql } from "gatsby"

export const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo_size_invert.jpg" }) {
        publicURL
      }
    }
  `)
  return (
    <NavWrapper>
      <Link to="/">
        <img src={data.logo.publicURL} alt="my logo" />
      </Link>
    </NavWrapper>
  )
}
