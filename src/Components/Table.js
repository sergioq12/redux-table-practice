import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin5Line } from "react-icons/ri";
import { removeItem } from "../Features/tableSlice";

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

function Table() {
  const { headers, items } = useSelector((store) => store.table);
  const dispatch = useDispatch();
  return (
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
                    dispatch(removeItem(item.id));
                  }}
                />
              </TableItem>
            </TableRow>
          ))}
      </TableContainer>
    </MainContainer>
  );
}

export default Table;
