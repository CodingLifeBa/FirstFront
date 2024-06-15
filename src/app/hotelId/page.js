"use client";

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { FiSearch, FiBell } from 'react-icons/fi';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
`;

const Card = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const HotelImage = styled.img`
  width: 100%;
  height: auto;
`;

const Info = styled.div`
  padding: 20px;
`;

const HotelName = styled.h2`
  margin: 0;
  font-size: 1.5em;
`;

const Address = styled.p`
  margin: 10px 0;
  color: #666;
`;

const Price = styled.p`
  margin: 0;
  font-weight: bold;
  color: #000;
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const H1 = styled.h1`
  margin-top: -7px;
`;

const StyledImage = styled(Image)`
  margin-top: -32px;
  margin-right: -270px;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: #2e3b4e;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

const SidebarMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
`;

const SidebarMenuItem = styled.li`
  padding: 10px 0;
  font-size: 1.2em;
  cursor: pointer;
  background-color: ${(props) => (props.active ? 'white' : 'transparent')};
  color: ${(props) => (props.active ? 'black' : 'inherit')};
  border-radius: ${(props) => (props.active ? '5px' : '0')};
  padding-left: ${(props) => (props.active ? '10px' : '0')};

  &:hover {
    background-color: white;
    color: black;
    border-radius: 5px;
    padding-left: 10px;
  }
`;

const SidebarFooter = styled.div`
  text-align: center;
  padding: 10px;
  border-top: 1px solid #394a5a;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const UserProfileText = styled.div`
  display: flex;
  flex-direction: column;
`;

const OnlineIndicator = styled.div`
  color: #46d369;
  font-size: 0.9em;
`;

const Content = styled.div`
  flex: 1;
  background-color: #f5f5f5;
  padding: 20px;
  overflow-y: auto;
`;

const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 10px;
  height: 9%;
  margin-bottom: 30px;
  border-bottom: 1px solid gray;
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: -20px;
  margin-left: 600px;
`;

const SearchBox = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  outline: none;
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: #888;
`;

const CreateHotelButton = styled.button`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
`;

const HotelsList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HotelsTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const HotelCount = styled.span`
  font-size: 16px;
  color: #aaa;
`;

export default function Home() {
  const router = useRouter();
  const { pathname } = router;

  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/hotels'); // Replace with your API endpoint
        setHotels(response.data);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <Container>
      <Sidebar>
        <div>
          <StyledImage
            src="/2.svg"
            alt="Description de l'image"
            width={170}
            height={90}
          />
          <Title>Principal</Title>
          <SidebarMenu>
            <SidebarMenuItem
              active={pathname === "/dashboard"}
              onClick={() => router.push("/dashboard")}
            >
              Dashboard
            </SidebarMenuItem>
            <SidebarMenuItem
              active={pathname === "/Listehotel"}
              onClick={() => router.push("/Listehotel")}
            >
              Liste des hôtels
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
        <SidebarFooter>
          <UserProfile>
            <FaUserCircle size={30} />
            <UserProfileText>
              <div>Mouhamet Badiane</div>
              <OnlineIndicator>en ligne</OnlineIndicator>
            </UserProfileText>
          </UserProfile>
        </SidebarFooter>
      </Sidebar>
      <Content>
        <DashboardHeader>
          <H1>Details</H1>
          <HeaderActions>
            <SearchBox>
              <SearchInput placeholder="Recherche..." />
              <SearchIcon />
            </SearchBox>
            <FiBell size={24} />
            <FaUserCircle size={24} />
          </HeaderActions>
        </DashboardHeader>
       
        <ContentWrapper>
          <Grid>
         
          </Grid>
        </ContentWrapper>
      </Content>
    </Container>
  );
}
