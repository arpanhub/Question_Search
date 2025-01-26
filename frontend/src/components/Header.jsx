import React from 'react';
import { Menubar, MenubarMenu } from './ui/menubar'; // Adjust the import based on your library
import { FaGithub } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { CiMail } from "react-icons/ci";

const Header = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '1.5rem' }}>
      <Menubar style={{ display: 'flex', justifyContent: 'center', width: 'auto', fontSize: '5rem'}}>
        <MenubarMenu>
          <a href="https://github.com/arpanhub" target="_blank" rel="noopener noreferrer" style={{ padding:'20px' }}>        
          <FaGithub size={25} />
          </a>
        </MenubarMenu>
        <MenubarMenu>
          <a href="mailto:arpangupta644@gmail.com" style={{ padding:'20px' }}>
            <CiMail size={25} />
          </a>
        </MenubarMenu>
        <MenubarMenu>
          <a href="https://your-portfolio.com" target="_blank" rel="noopener noreferrer" style={{ padding:'20px'}}>
            <IoIosContact size={25} />
          </a>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default Header;