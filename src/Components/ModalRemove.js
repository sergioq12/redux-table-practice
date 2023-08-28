import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { closeRemoveModal } from "../Features/modalRemoveSlice";
import { removeItem } from "../Features/tableSlice";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
  width: 500px;
  height: 500px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const ModalTitle = styled.h2`
  font-size: 25px;
  font-weight: 600;
  width: 80%;
  text-align: center;
  margin-bottom: 50px;
`;

const ModalButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalButton = styled.button`
  border: none;
  outline: none;
  padding: 20px;
  font-size: 18px;
  background-color: black;
  color: white;
  margin: 0px 50px;
  border-radius: 10px;
  cursor: pointer;
`;

function ModalRemove() {
  const dispatch = useDispatch();
  const { itemID } = useSelector((store) => store.modalRemove);
  return (
    <MainContainer>
      <ModalContainer>
        <ModalTitle>Are you sure you want to remove the item?</ModalTitle>
        <ModalButtonsContainer>
          <ModalButton
            onClick={() => {
              dispatch(removeItem(itemID));
              dispatch(closeRemoveModal());
            }}
          >
            Remove Item
          </ModalButton>
          <ModalButton
            onClick={() => {
              dispatch(closeRemoveModal());
            }}
          >
            Cancel
          </ModalButton>
        </ModalButtonsContainer>
      </ModalContainer>
    </MainContainer>
  );
}

export default ModalRemove;
