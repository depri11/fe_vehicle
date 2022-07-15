import styled from 'styled-components'

export const Intros = styled.div`
    height: 767px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
        url('https://s3-alpha-sig.figma.com/img/8e00/a44b/9a08bd95d830a13924f4a64ef20a65f1?Expires=1658707200&Signature=FvSn3mw9Hr9KcjZ2zMfEqqonTQnDenBbVToQ2rWIrv~vRngpYs0jvR0ZPzKcJoEdIYDQbOSq5-ozmWP77mlmY00ruBaoSNGl2rhErhHjrlAeDlwB6-nVJfJWu8pZEMp7T6zvcksip9Xg1BgWM97eFD1Ay~IOSDGCGFuh8g5dC-NgjktliCx12Eqpv6Fuz8u6HU6N-oAUHe36zEhhc0hMhNjIfmIRC1wbUTzEoDDHYOWKQSsQMBxilfHCMlLshYKd2RTc6Qhb99EZphq~GYqihhLxwKhYp1eGzVNpYTEjZxdJrnKKdBF8p3mnbXVt~R8zghntlmq~sWd0LGRy8fpc0g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA');
    //   background-color: pink;
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
        padding-top: 100px;
        width: 400px;
        word-wrap: break-word;
        position: relative;
    }

    p {
        color: white;
        font-weight: 900;
        font-size: 22px;
        padding: 10px 20px;
        margin-top: 50px;
        width: 400px;
        word-wrap: break-word;
        position: relative;
    }

    select {
        width: 220px;
        height: 52px;
        padding-left: 30px;
        margin-left: 30px;
        border-radius: 6px;
        font-weight: 700;
        text-transform: capitalize;
        opacity: 0.5;
        display: inline-block;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-image: linear-gradient(50deg, transparent 10%, gray 50%), linear-gradient(135deg, gray 50%, transparent 50%);
        background-position: calc(100% - 20px) calc(1em + 5px), calc(100% - 15px) calc(1em + 5px), calc(100% - 2.5em) 0.5em;
        background-size: 5px 4px, 5px 4px, 1px 2em;
        background-repeat: no-repeat;
        outline: none;
    }

    .border-ut {
        border: 1px solid #fff;
        width: 45px;
        margin: 10px 20px;
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
background-color: #FFCD61;
text-transform:capitalize;
width: 180px;
height: 52px;
margin-left: 10px;
margin-top: 52px;
border-radius: 6px;
font-weight: 900;
border: 0;
  }
`
