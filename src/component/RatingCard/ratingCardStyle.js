import styled from "styled-components";


export const RatingCardWrapper = styled.div `

border-radius: 20px;
width: 100%;
max-width: 450px;
min-width: 450px;
background: hsl(213, 19%, 18%);
padding: 2.2rem;

`

export const RatingIconBox = styled.div`

border-radius: 50%;
height: 50px;
width: 50px;
background-color: hsl(210, 16%, 22%);
display: flex;
justify-content: center;
align-items: center;

`

export const H1 = styled.h1`

color: #ffffff;
font-size: 1.2rem;
letter-spacing: 1.5px;
margin: 2rem 0 1rem 0;
text-align: left;

`

export const P = styled.p`
color: hsl(217, 12%, 63%);
font-size: 1.1rem;
margin: 1rem 0 2rem 0;
text-align: left;
`

export const RatingButton = styled(RatingIconBox)`

display: inline-block;
font-size: 1rem;
border: none;
outline: none;
cursor: pointer;
font-weight: 700;
color: #ffffff;

&:not(:last-child){
    margin-right: 1rem;
}

&:hover {
    background: hsl(25, 97%, 53%);
    transition: 0.3s;
}
`
