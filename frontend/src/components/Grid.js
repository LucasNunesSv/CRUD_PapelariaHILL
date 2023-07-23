import React from "react";
import styled from "styled-components";
import  {toast} from "react-toastify";
import {FaTrash, FaEdit} from "react-icons/fa";
import axios from "axios"

const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 5px #ccc;
    border-radius: 5px;
    max-width: 800px;
    margin: 20px auto;
    word-break: break-all;

`

const Grid = () => {

    return(
        <Table></Table> 
    );
};

export default Grid