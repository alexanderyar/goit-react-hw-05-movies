import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
display:flex`

export const Header = styled.h1`
font-weight:800;
font-size:25;
`

export const HeaderBelow = styled.h2`
font-weight:500;
font-size:20;
`

export const ContainerForGenres = styled.ul`
display:flex;
list-style:none;
margin:0;
padding:0;
`

export const GenresListItem = styled.li`
padding-right:10px;
`

export const AdditionalInfo = styled.div`
border-bottom: 2px solid red;
border-top: 2px solid red;
`
export const ButtonBack = styled(Link)`
display: inline-block;
border:2px solid yellow;
background-color:gray;
color:black;
border-radius:5%;
text-decoration:none;
width:200px;
height:50px;

`