import styled from 'styled-components';

export const StyledHeader= styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-height: 100px;
    background-color: #282c34;
    color: white;
`
export const StyledNav= styled.nav`
    background-color: lightseagreen;
    min-height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 24px;
    padding-left: 3%;
    padding-right: 3%;
`

export const Article= styled.article`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const Section= styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const Pcards = styled.article`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 49%;
    font-size: 20px;
    box-shadow: -10px 10px 10px grey, 10px 10px 10px grey;
`

export const Images= styled.img`
    width: 100%;
`

export const TinyImage= styled(Images)`
    width: 80px;
`

export const CartImg= styled(Images)`
    width: 30px;
`

export const RemoveImg= styled(Images)`
    width: 20px;
`

export const Title = styled.h1`
    text-align: center;
`

export const TD = styled.td`
    padding: 10px;
`

export const P= styled(Title)`
    font-size: 24px;
    margin: 4px;
`

export const CartButton= styled.button`
    font-size: 18px;
    margin: 4px 20px;
    padding: 10px 20px;
    border-radius: 50%;
    background-color: #282c34;
    color: white;

    &:hover {
        box-shadow: -10px 10px 10px grey, 10px 10px 10px grey;
    }
`

export const Button= styled.button`
    font-size: 20px;
    padding: 10px 30px;
    margin: 10px;
    border-radius: 10%;

    &:hover {
        box-shadow: -10px 10px 10px grey, 10px 10px 10px grey;
    }
`
