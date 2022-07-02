import styled from 'styled-components'

export const Btn = styled.button`
    background-color: ${({ clrbg }) => clrbg};
    color: ${({ clrfnt }) => clrfnt};
    width: ${({ wdth }) => wdth};
    font-size: ${({ size }) => (size ? size : '20px')};
    border: none;
    border-radius: 10px;
    font-family: Nunito;
    font-weight: 900;
    height: 89px;
    padding: 0px;
    cursor: pointer;
    margin-right: 20px;
`
