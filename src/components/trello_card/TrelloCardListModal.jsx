import React from "react";
import { TrelloCardListModalStyled } from "../../assets/Global";
import { BiCreditCardFront } from "react-icons/bi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { toggleDescriptionModal } from "../../store/reducers/modalReducer";

const TrelloCardListModal = ({ title, listName }) => {
  const dispatch = useDispatch();

  return (
    <TrelloCardListModalStyled>
      <div className="backdrop"></div>
      <div className="dispaly_modal">
        <div className="modal">
          <div className="close_modal">
            <button onClick={() => dispatch(toggleDescriptionModal())}>
              <GrClose />
            </button>
          </div>
          <div className="about_card">
            <div className="icon">
              <BiCreditCardFront />
            </div>
            <div>
              <div className="title">{title}</div>
              <div className="in_list">
                in list <span className="item_list">{listName}</span>
              </div>
            </div>
          </div>
          <div className="description">
            <div className="icon">
              <HiOutlineMenuAlt2 />
            </div>
            <div className="description_add">
              <div className="title">Description</div>
              <textarea
                name=""
                id="textarea"
                placeholder="Add a more detailed description…"
              ></textarea>
              <div className="events_button">
                <div className="buttons">
                  <button>Save</button>
                  <button className="close_button">
                    <GrClose />
                  </button>
                </div>
                <div className="formatting">
                  <button>Formatting help</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TrelloCardListModalStyled>
  );
};

export default TrelloCardListModal;
