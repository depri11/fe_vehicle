import styled from 'styled-components'

export const Link = styled.a`
    padding: 8px;
    display: inline-block;
    color: gray;
    text-decoration: none !important;
    font-weight: ${({ bold }) => (bold ? '600' : '300')};
    &:hover {
        color: black;
    }
    &:focus {
        color: black;
    }
`
