import React from "react"
import {
  Container,
  FeatureImage,
  Content,
  ContentCard,
} from "../components/index"
// import "@fortawesome/fontawesome-free/css/all.min.css"

const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard
          date="August 23, 2020"
          title="Yimeng is born"
          excerpt="My baby YIMENG is born on August 23rd, what an important day in our family!"
          slug="my-first-post"
        ></ContentCard>
      </Content>
    </Container>
  )
}

export default IndexPage
