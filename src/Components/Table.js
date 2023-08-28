import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin5Line } from "react-icons/ri";
import { LoginRequest, logIn, logOut } from "../Features/tableSlice";
import ModalRemove from "./ModalRemove";
import { openRemoveModal, setItemID } from "../Features/modalRemoveSlice";
import { openAddModal } from "../Features/modalAddSlice";
import ModalAdd from "./ModalAdd";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AppTitle = styled.h1`
  font-size: 50px;
`;

const TableContainer = styled.table`
  width: 60%;
  border-collapse: collapse;
  border: 1px solid #ccc;
  margin: 20px 0;
`;

const TableRow = styled.tr`
  &:hover {
    background-color: #f5f5f5;
  }
`;

const TableHeader = styled.th`
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
  background-color: #f2f2f2;
`;

const TableItem = styled.td`
  font-size: 18px;
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
`;

const AddItemButton = styled.button`
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

const LoginContainer = styled.div`
  margin: auto;
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;

const LoginButton = styled.div`
  border: none;
  outline: none;
  padding: 15px 30px;
  font-size: 22px;
  background-color: black;
  color: white;
  margin: 0px 50px;
  border-radius: 10px;
  cursor: pointer;
`;

const LoginStatus = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const LoginName = styled.span`
  font-size: 25px;
`;

function Table() {
  const { headers, items, user_name, loggedInState } = useSelector(
    (store) => store.table
  );
  const modalRemoveOpened = useSelector((store) => store.modalRemove).opened;
  const modalAddOpened = useSelector((store) => store.modalAdd).opened;
  const dispatch = useDispatch();
  return (
    <>
      <LoginContainer>
        <LoginButton
          onClick={() => {
            dispatch(LoginRequest());
          }}
        >
          Login
        </LoginButton>
        <LoginStatus>{loggedInState}</LoginStatus>
        <LoginName>{user_name}</LoginName>
      </LoginContainer>
      {modalRemoveOpened && <ModalRemove />}
      {modalAddOpened && <ModalAdd />}
      <MainContainer>
        <AppTitle>Budget App</AppTitle>
        <TableContainer>
          <TableRow>
            {headers &&
              headers.map((header) => <TableHeader>{header}</TableHeader>)}
          </TableRow>

          {items &&
            items.map((item) => (
              <TableRow>
                <TableItem>{item.typeOfExpense}</TableItem>
                <TableItem>{item.description}</TableItem>
                <TableItem>{item.category}</TableItem>
                <TableItem>{item.amount}</TableItem>
                <TableItem>
                  <RiDeleteBin5Line
                    style={{ fontSize: "25px", color: "", cursor: "pointer" }}
                    onClick={() => {
                      dispatch(openRemoveModal());
                      dispatch(setItemID(item.id));
                    }}
                  />
                </TableItem>
              </TableRow>
            ))}
        </TableContainer>
        <AddItemButton
          onClick={() => {
            dispatch(openAddModal());
          }}
        >
          Add Item
        </AddItemButton>
      </MainContainer>
    </>
  );
}

export default Table;
