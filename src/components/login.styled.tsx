

import styled from 'styled-components';

export const Container = styled.form `
   display: flex; 
   flex-direction: column;
   position: relative;
   max-width: 500px;
   max-height: 700px;
   margin: 0px auto ;
   background: white;
    
    box-shadow:
        0pt 0px 0px white,
        0px 0px 0px 0px white ;
    border-radius: 5px;
    padding-bottom: 5px;
   `;

export const Button = styled.button `
   
   font-size: 14px;
   font-weight: bold;
   margin-bottom: 10px;
   height: 40px;
   background-color: Cyan;
   border-radius: 4px;
   color: black;
   border-color: white  ;

`;

/* border-color: ${({ theme, inputError }) => {
return inputError ? theme.colors.red : theme.colors.SkyBlue; */
