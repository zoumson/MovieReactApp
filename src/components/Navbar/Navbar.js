import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../Button/Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';
import { ImLeaf } from 'react-icons/im';
import {
  AiOutlineHome,
  AiFillHome,
  AiOutlineCar,
  AiFillCar,
} from 'react-icons/ai';
import { TiInfoOutline, TiInfo } from 'react-icons/ti';
import { BiPurchaseTagAlt } from 'react-icons/bi';
import {
  RiLoginBoxLine,
  RiLoginBoxFill,
  RiMovieFill,
  RiMovieLine,
  RiEye2Line,
} from 'react-icons/ri';

import Fire from '../Firebase/Fire';

function Navbar(props) {
  /* Component attributes */
  const { log, setLog } = props;
  /* Current components states initialization */
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [homeActive, setHomeActive] = useState(false);
  const [aboutActive, setAboutActive] = useState(false);
  const [shopActive, setShopActive] = useState(false);
  const [homeIconColor, setHomeIconColor] = useState(false);
  const [aboutIconColor, setAboutIconColor] = useState(false);
  const [shopIconColor, setShopIconColor] = useState(false);
  const [loginIconColor, setLoginIconColor] = useState(false);
  const [signUpActive, setSignUpActive] = useState(false);
  const [logoName, setLogoName] = useState('SeeZ');

  /* Common nav item class names */
  const commonNavItemClass = ['nav-links', 'noSelect'];

  /* Display nav items handler */
  const handleClick = () => setClick(!click);
  /* Close nv item menu */
  const closeMobileMenu = () => setClick(false);
  /* Log out user */
  const handleLogout = () => Fire.auth().signOut();
  /* Processes showing user  logged out */
  const logout = () => {
    if (log) {
      setLog(false);
      handleLogout();
    }
  };
  /* Handle nav menu display from mobile screen to large ones */
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  /* Adapt content to the device screen */
  window.addEventListener('resize', showButton);

  /* Content Summary */
  /* Logo item rendering */
  const NavLogo = () => {
    return (
      <Link
        draggable={false}
        to="/"
        className="navbar-logo"
        onClick={closeMobileMenu}
      >
        <RiEye2Line className="navbar-icon" />
        {logoName}
      </Link>
    );
  };

  /* Home page navbar rendering */
  const NavHome = () => {
    return (
      <NavLink
        to="/"
        draggable={false}
        onClick={closeMobileMenu}
        exact={true}
        isActive={(match) => {
          if (match) {
            setHomeActive(true);
            setHomeIconColor(true);
          } else {
            setHomeActive(false);
            setHomeIconColor(false);
          }
        }}
        className={
          homeActive
            ? `${commonNavItemClass.join(' ')} active`
            : `${commonNavItemClass.join(' ')} notActive`
        }
      >
        {homeIconColor ? (
          <AiFillHome className="navbar-icon" />
        ) : (
          <AiOutlineHome className="navbar-icon" />
        )}
        <div>Home</div>
      </NavLink>
    );
  };

  /* About page navbar rendering */
  const NavAbout = () => {
    return (
      <NavLink
        to="/about"
        onClick={closeMobileMenu}
        isActive={(match) => {
          if (match) {
            setAboutActive(true);
            setAboutIconColor(true);
          } else {
            setAboutActive(false);
            setAboutIconColor(false);
          }
        }}
        className={
          aboutActive
            ? `${commonNavItemClass.join(' ')} active`
            : `${commonNavItemClass.join(' ')} notActive`
        }
      >
        {aboutIconColor ? (
          <TiInfo className="navbar-icon" />
        ) : (
          <TiInfoOutline className="navbar-icon" />
        )}
        <div>About</div>
      </NavLink>
    );
  };

  /* Shop page navbar rendering */
  const NavShop = () => {
    return (
      <NavLink
        to="/shop"
        onClick={closeMobileMenu}
        isActive={(match) => {
          if (match) {
            setShopActive(true);
            setShopIconColor(true);
          } else {
            setShopActive(false);
            setShopIconColor(false);
          }
        }}
        className={
          shopActive
            ? `${commonNavItemClass.join(' ')} active`
            : `${commonNavItemClass.join(' ')} notActive`
        }
      >
        {shopIconColor ? (
          <RiMovieFill className="navbar-icon" />
        ) : (
          <RiMovieLine className="navbar-icon" />
        )}
        <div>Watch</div>
      </NavLink>
    );
  };

  /* Logging page navbar rendering */
  const NavLog = () => {
    let navLogHtml;
    if (button) {
      navLogHtml = (
        <div>
          <div>
            <IconContext.Provider value={{ style: { color: 'white' } }}>
              <RiLoginBoxLine className="navbar-icon" />
            </IconContext.Provider>
          </div>
          <div>
            <NavLink
              to="/login"
              className="btn-item"
              isActive={(match) =>
                match ? setSignUpActive(true) : setSignUpActive(false)
              }
            >
              <Button
                onClick={logout}
                buttonStyle={signUpActive ? '' : 'btn--outline'}
              >
                {log ? 'Logout' : 'Login'}
              </Button>
            </NavLink>
          </div>
        </div>
      );
    } else {
      navLogHtml = (
        <div>
          <div>
            <IconContext.Provider value={{ style: { color: 'white' } }}>
              <RiLoginBoxLine className="navbar-icon" />
            </IconContext.Provider>
          </div>
          <div>
            <NavLink
              to="/login"
              className="btn-item"
              onClick={closeMobileMenu}
              isActive={(match) =>
                match ? setSignUpActive(true) : setSignUpActive(false)
              }
            >
              <Button
                onClick={logout}
                buttonStyle={
                  signUpActive ? 'btn--mobile--active' : 'btn--outline'
                }
              >
                {log ? 'Logout' : 'Login'}
              </Button>
            </NavLink>
          </div>
        </div>
      );
    }
    return navLogHtml;
  };

  const Menubar = () => {
    return (
      <IconContext.Provider value={{ style: { color: 'white' } }}>
        {click ? <FaTimes /> : <FaBars />}
      </IconContext.Provider>
    );
  };
  /* Actual page rendering */
  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <NavLogo />

          <div className="menu-icon" onClick={handleClick}>
            <Menubar />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className={click ? ' ' : 'nav-item'}>
              <NavHome />
            </li>
            <li className={click ? '' : 'nav-item'}>
              <NavAbout />{' '}
            </li>
            <li className={click ? ' ' : 'nav-item'}>
              <NavShop />
            </li>
            <li>
              <NavLog />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
