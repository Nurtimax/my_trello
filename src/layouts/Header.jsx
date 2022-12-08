import React from "react";
import { HeaderStyled } from "../assets/Global";
import { FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { BiSearchAlt2 } from "react-icons/bi";
import { ImTrello } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileModal from "../components/profile_modal/ProfileModal";
import { useState } from "react";

const Header = () => {
  const { user } = useSelector((state) => state.login);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <HeaderStyled>
      <aside className="sidebar">
        <header className="sidebar-header">
          <ImTrello />
          <div className="icon"></div>
        </header>
        <nav>
          <NavLink to="/home">
            <button>
              <span>
                <FaHome>
                  <span>12</span>
                </FaHome>
                <span>Home</span>
              </span>
            </button>
          </NavLink>
          <NavLink to="/search">
            <button>
              <span>
                <BiSearchAlt2 />
                <span>Search</span>
              </span>
            </button>
          </NavLink>
          {user ? (
            <div className="profile">
              {showProfile && <ProfileModal />}
              <button onClick={() => setShowProfile((prevState) => !prevState)}>
                <span>
                  <CgProfile />
                  <span>Profile</span>
                </span>
              </button>
            </div>
          ) : (
            <>
              <NavLink to="/login">
                <button>
                  <span>
                    <CgProfile />
                    <span>Sign in</span>
                  </span>
                </button>
              </NavLink>
              <NavLink to="/">
                <button>
                  <span>
                    <CgProfile />
                    <span>Sign up</span>
                  </span>
                </button>
              </NavLink>
            </>
          )}
          <button>
            <span>
              <IoIosNotifications />
              <span>Notification</span>
            </span>
          </button>
        </nav>
      </aside>
    </HeaderStyled>
  );
};

export default Header;
