import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import {
  FooterWrapper,
  FootSocialIcons,
  FooterSocialWrapper,
} from "../elements"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      homepage: file(relativePath: { eq: "small-house.svg" }) {
        publicURL
      }
      github: file(relativePath: { eq: "github.svg" }) {
        publicURL
      }
      linkedin: file(relativePath: { eq: "linkedin.svg" }) {
        publicURL
      }
      # twitter: file(relativePath: { eq: "twitter.svg" }) {
      #   publicURL
      # }
      resume: file(relativePath: { eq: "resume.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FootSocialIcons>
          <Link to="/">
            <img src={data.homepage.publicURL} alt="home page" />
          </Link>
          <a
            href="https://zhenghao-jia.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.resume.publicURL} alt="homepage Logo" />
          </a>
          {/* <a
            href="https://twitter.com/Zhenghao_Jia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.twitter.publicURL} alt="Twitter Logo" />
          </a> */}
          <a
            href="https://linkedin.com/in/zhenghao-j-b00538186"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.linkedin.publicURL} alt="LinkedIn Logo" />
          </a>
          <a
            href="https://github.com/jiazhenghao"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.github.publicURL} alt="Github Logo" />
          </a>
        </FootSocialIcons>
        {/* <P size="xSmall" color="dark3">
          © 2020, All rights reserved.
        </P> */}
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
