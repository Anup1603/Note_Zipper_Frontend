import React from 'react'
import { Spinner } from "react-bootstrap";

const loading = ({size=100}) => {
  return (
    <div
        style={{
            dispaly:"flex",
            justifyContent: "center",
            alignItems:"center",
            width: "100%",
            height:"100%",
        }}
    >
        <Spinner
            style={{
                width:size,
                height:size,
            }}
            animation="border"
        />
    </div>
  )
}

export default loading
