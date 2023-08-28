import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { closeAddModal, handleInputChange } from "../Features/modalAddSlice";
import { addItem } from "../Features/tableSlice";

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

const ModalForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const ModalInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
`;

const ModalLabel = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
`;

const ModalInput = styled.input`
  font-size: 18px;
  outline: none;
  border: none;
  background-color: #f1f1f1;
  padding: 5px;
  align-self: right;
`;

function ModalAdd() {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.modalAdd);

  return (
    <MainContainer>
      <ModalContainer>
        <ModalTitle>Add an Item</ModalTitle>
        <ModalForm>
          <ModalInputContainer>
            <ModalLabel>Type of Expense</ModalLabel>
            <ModalInput
              type="text"
              name="typeOfExpense"
              onChange={(e) => {
                dispatch(handleInputChange(e));
              }}
            />
          </ModalInputContainer>
          <ModalInputContainer>
            <ModalLabel>Description</ModalLabel>
            <ModalInput
              type="text"
              name="description"
              onChange={(e) => {
                dispatch(handleInputChange(e));
              }}
            />
          </ModalInputContainer>
          <ModalInputContainer>
            <ModalLabel>Category</ModalLabel>
            <ModalInput
              type="text"
              name="category"
              onChange={(e) => {
                dispatch(handleInputChange(e));
              }}
            />
          </ModalInputContainer>
          <ModalInputContainer>
            <ModalLabel>Amount</ModalLabel>
            <ModalInput
              type="text"
              name="amount"
              onChange={(e) => {
                dispatch(handleInputChange(e));
              }}
            />
          </ModalInputContainer>
        </ModalForm>
        <ModalButtonsContainer>
          <ModalButton
            onClick={() => {
              dispatch(addItem(data));
              dispatch(closeAddModal());
            }}
          >
            Add Item
          </ModalButton>
          <ModalButton
            onClick={() => {
              dispatch(closeAddModal());
            }}
          >
            Cancel
          </ModalButton>
        </ModalButtonsContainer>
      </ModalContainer>
    </MainContainer>
  );
}

export default ModalAdd;
