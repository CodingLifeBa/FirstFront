"use client"
import styled from 'styled-components';
import Image from 'next/image';

const sidebar = styled(Image)`

`;
const Div = styled.div`
    margin:0;
    padding:0;
    width:200px;
    background-color:gray;
    position:fixed;
    height:100%;
    overflow:auto;
`;
const A =styled.a`
display:block;
`
const StyledImage = styled(Image)`
margin-top:-20px;
margin-left:10px;

`;


export default function page() {
  return (
    <>
   

  
<Div>
<StyledImage
        src="/2.svg"
        alt="Description de l'image"
        width={170}
        height={90}/>

        <p>
          <h4>
            Principal
          </h4>
          <h2>
          <Image src="/dashboard.png"alt="Description de l'image"
        width={17}
        height={15} 
        />
            Dashboard
          </h2>
          <h2>
            <Image src="/menu-burger.svg"alt="Description de l'image"
        width={17}
        height={15}/>
            Liste des hotels
          </h2>
        </p>
      <ul>
      
      </ul>
     
      
  
</Div>

<div class="content">
  ..
</div>



    </>
  )
}


