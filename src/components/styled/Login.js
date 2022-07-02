import styled from 'styled-components'

export const Logins = styled.div`
    height: 845px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
        url('https://s3-alpha-sig.figma.com/img/b95d/df1c/67aaf0ce4379973527426beadb61953c?Expires=1657497600&Signature=MZyc8mn3hWRbFd7vCABXfI-jthoon7v2g0kzIXJdtWvVFWMhczaremLhvxnXJxAFFm~Fpfbh3723FGF1Ol6OF43k8djEBJobcjYiRISA8VPsE~~Vvg-oGV~Z-FZdExpb9ijoUzGLzICP7bIMTgaKwpt-vCQQc-mz046UcG1wuZJGiau3cF-CJW2Y3LnWOsUN0suxFVQXcSAlRfjpp1KHANpH8YBVoNwQM0vFy-neGesBzXI30vKb0Jg3IEJcKhZ0sLPVVXUJH416K1kQKPg1BH2g2K7GOTZ-qpx20nIKzAOIjV3vsb9y4YVXYPsxQZdbeTjnNh-q~aN1AHZYN7Gm2w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    h1 {
        color: white;
        font-family: Playfair Display;
        font-weight: 700;
        font-size: 64px;
        padding-left: 10px;
        margin-bottom: 30px;
        width: 400px;
        word-wrap: break-word;
        position: relative;
    }

    p {
        color: white;
        font-weight: 600;
        font-size: 22px;
        padding: 7px 10px;
        width: 400px;
        position: relative;
    }

    a {
        color: white;
        font-size: 16px;
        font-weight: 700;
        text-decoration: underline !important;
    }

    button > img {
        margin-right: 10px;
        width: 30px;
    }

    input {
        width: 447px;
        height: 79px;
        padding-left: 30px;
        border-radius: 6px;
        font-weight: 700;
        text-transform: capitalize;
        background: rgba(255, 255, 255, 0.26);
        border: none;
        color: white;
        font-size: 20px;
        outline: none;
    }

    input::placeholder {
        color: white;
    }
`

export const Flex = styled.div`
    display: flex;
    margin-top: 35px;

    select:first-child {
        margin-left: 10px;
    }
`

export const Button = styled.button`
    background-color: ${({ clrbg }) => clrbg};
    color: ${({ clrfnt }) => clrfnt};
    width: ${({ wdth }) => wdth};
    font-size: ${({ size }) => (size ? size : '20px')};
    text-transform: capitalize;
    height: 75px;
    border-radius: 10px;
    font-weight: 900;
    border: 0px;
`
