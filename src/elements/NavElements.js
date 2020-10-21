import styled from "styled-components"

export const NavWrapper = styled.nav`
  grid-column: 2 / span 12;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;

  & img {
    height: 7.8rem;
    width: 10%;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    display: none;
    /* grid-colunm: 2 / span6;
    */
  }
`
