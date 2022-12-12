import React from "react";
import { Container, ProfileStyled } from "../assets/Global";

const Profile = () => {
  return (
    <>
      <ProfileStyled>
        <Container>
          <div className="profile_card">
            <div className="profile_image">
              <figure>
                {/* <img src="" alt="" /> */}
              </figure>
            </div>
            <div className="user_data">
              <div>Email:</div>
              <div>Name: </div>
            </div>
          </div>
        </Container>
      </ProfileStyled>
    </>
  );
};

export default Profile;
