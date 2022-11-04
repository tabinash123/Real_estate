import { Menu,MenuButton,MenuList,IconButton,Flex,Box,Spacer, MenuIcon, MenuItem } from '@chakra-ui/react';
import  Link  from 'next/link';
import { FcAbout, FcMenu, FcHome, FcSearch, FcKey } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import {FiKey} from 'react-icons/fi'

const Navbar = () => {
  return (
    <Flex p={2} borderBottom="2px" borderColor="gray.100">
      <Box
        fontSize="4xl"
        fontWeight="black"
       >
        <Link href="/" paddingLeft="2px">
          HamroGriha
        </Link>
      </Box>
      <Spacer />
      <Box>
        <Menu>
          <MenuButton as={IconButton} icon={<FcMenu />}
            variant='outlined' color='indigo' fontSize='4xl' />
          <MenuList>
            <Link href='/' passHref>
              <MenuItem icon={<FcHome />} fontWeight='bold'  >Home</MenuItem>
            </Link> 
            <Link href='/search' passHref>
              <MenuItem icon={<FcSearch />} fontWeight='bold'>Search</MenuItem>
            </Link> 
            <Link href='/search?purpose=for-sale' passHref>
              <MenuItem icon={<FcAbout />} fontWeight='bold'>Buy Property</MenuItem>
            </Link> 
            <Link href='/search?purpose=for-rent' passHref>
              <MenuItem icon={<FcKey />} fontWeight='bold'>Rent Property</MenuItem>
            </Link> 
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
}

export default Navbar