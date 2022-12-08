import React from "react";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { ProfileModalStyled } from "../../assets/Global";

const ProfileModal = () => {
  return (
    <ProfileModalStyled>
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
    </ProfileModalStyled>
  );
};

export default ProfileModal;
