"use client";
import { FaUserCircle } from 'react-icons/fa';
import { FiSearch, FiBell } from 'react-icons/fi';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Importer useRouter
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    /* Adjust other styles as needed */
  }
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: #2e3b4e;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Content = styled.div`
  flex: 1;
  background-color: #f5f5f5;
  padding: 20px;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const H1 = styled.h1`
  margin-top: -7px;
`;

const StyledImage = styled(Image)`
  margin-top: -32px;
  margin-right: -270px;
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
  background-color: ${props => props.active ? 'white' : 'transparent'};
  color: ${props => props.active ? 'black' : 'inherit'};
  border-radius: ${props => props.active ? '5px' : '0'};
  padding-left: ${props => props.active ? '10px' : '0'};

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


const DashboardHeader = styled.div`
  display: flex;
  width: 100%;
  font-size: 10px;
  height: 9%;
  justify-content: space-between;
  align-items: center;
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

const DashboardNav = styled.div`
  display: flex;
  width: 100%;
  font-size: px;
  height: 8%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid gray;
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: -23px;
  margin-left: 5px;
`;

const P = styled.h1`
  margin-top: 5px;
  font-size: 25px;
`;

const H4 = styled.div`
  margin-top: -5px;
  font-size: 15px;
  font-style: Arial, Helvetica, sans-serif;
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

const StatCardContainer = styled.div`
   display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

const StatCard = styled.div`
  flex: 1;
  min-width: 180px;
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StatIcon = styled.div`
  background: ${(props) => props.bgColor || '#ccc'};
  color: #fff;
  border-radius: 50%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
`;

const StatInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StatNumber = styled.div`
  font-size: 1.8em;
  font-weight: bold;
`;

const StatLabel = styled.div`
  font-size: 1em;
  color: #666;
`;

export default function Home() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <Container>
      <Sidebar>
        <div>
          <StyledImage src="/2.svg" alt="Description de l'image" width={170} height={90} />
          <Title>Principal</Title>
          <SidebarMenu>
            <SidebarMenuItem
              active={pathname === "/dashboard"}
              onClick={() => router.push("/dashboard")}>
            
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
          <H1>Dashboard</H1>
          <HeaderActions>
            <SearchBox>
              <SearchInput placeholder="Recherche..." />
              <SearchIcon />
            </SearchBox>
            <FiBell size={24} />
            <FaUserCircle size={24} />
          </HeaderActions>
        </DashboardHeader>
        <DashboardNav>
          <NavActions>
            <P>
              Bienvenue sur RED Product
              <H4>Lorem ipsum dolor sit amet consectetur</H4>
            </P>
          </NavActions>
        </DashboardNav>
        <StatCardContainer>
          <StatCard>
            <StatIcon bgColor="#6f42c1">P</StatIcon>
            <StatInfo>
              <StatNumber>125</StatNumber>
              <StatLabel>Formulaires</StatLabel>
            </StatInfo>
          </StatCard>
          <StatCard>
            <StatIcon bgColor="#20c997">P</StatIcon>
            <StatInfo>
              <StatNumber>40</StatNumber>
              <StatLabel>Messages</StatLabel>
            </StatInfo>
          </StatCard>
          <StatCard>
            <StatIcon bgColor="#ffc107">P</StatIcon>
            <StatInfo>
              <StatNumber>600</StatNumber>
              <StatLabel>Utilisateurs</StatLabel>
            </StatInfo>
          </StatCard>
          <StatCard>
            <StatIcon bgColor="#dc3545">P</StatIcon>
            <StatInfo>
              <StatNumber>25</StatNumber>
              <StatLabel>Emails</StatLabel>
            </StatInfo>
          </StatCard>
          <StatCard>
            <StatIcon bgColor="#007bff">P</StatIcon>
            <StatInfo>
              <StatNumber>40</StatNumber>
              <StatLabel>Hôtels</StatLabel>
            </StatInfo>
          </StatCard>
          <StatCard>
            <StatIcon bgColor="#17a2b8">P</StatIcon>
            <StatInfo>
              <StatNumber>02</StatNumber>
              <StatLabel>Entités</StatLabel>
            </StatInfo>
          </StatCard>
        </StatCardContainer>
      </Content>
    </Container>
  );
}
