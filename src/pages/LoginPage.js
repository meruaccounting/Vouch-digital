import React from "react";
import "../App.css";

import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import { Button, Typography } from "antd";

import { Container, Form } from "react-bootstrap";
import { Breakpoint } from "react-socks";
import NormalLoginForm from "../components/LoginForm";

import Logo from "../mainlogo.png";
import Mainlogo from "../main3.jpg";

export default function LoginPage() {
  return (
    <Container>
      <Container
        style={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          height: "2.6rem",
          boxShadow: "0 0 10px grey",
          // padding: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: ".8rem",
          }}
        >
          <Typography
            style={{
              fontFamily: "inter",
              fontWeight: "bolder",
              fontSize: "2rem",
              color: "rgb(2 48 71)",
            }}
          >
            ATools
          </Typography>
          <Typography
            style={{
              fontFamily: "inter",
              fontWeight: "bolder",
              fontSize: "2rem",
              color: "red",
            }}
          >
            .
          </Typography>
        </div>
        <Breakpoint medium up>
          <div style={{ marginTop: ".5rem" }}>
            <Button
              style={{
                width: "9rem",
                marginRight: "  1rem ",
                backgroundColor: "rgb(2 48 71)",
                color: "whitesmoke",
              }}
            >
              {" "}
              Free Trail
            </Button>
            <Button
              style={{
                width: "8rem",
                marginRight: "  1rem ",
                backgroundColor: "Orange",
              }}
            >
              {" "}
              Login
            </Button>
          </div>
        </Breakpoint>
      </Container>
      <Breakpoint medium up>
        <Container
          style={{
            paddingTop: ".2rem",
            width: "100%",
            height: "100vh",
            display: "grid",
            gridTemplateColumns: " 30% 70%",
          }}
        >
          <Container
            style={{
              backgroundColor: "whitesmoke",
              height: "100vh",
              display: "grid",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                // alignContent: "center",
                justifyContent: "center",
                margin: "auto",
                width: "100%",
              }}
            >
              <Typography
                style={{
                  display: "flex",
                  margin: "auto",
                  fontFamily: "Inter ,sans-serif",
                  fontWeight: "bolder",
                  fontSize: "1.5rem",
                }}
              >
                Welcome Back
              </Typography>
              <NormalLoginForm />
            </div>
          </Container>
          <Container
            style={{
              // backgroundColor: "green",
              height: "100vh",
              display: "grid",
            }}
          >
            <img
              src={Mainlogo}
              alt="img"
              style={{ width: "100%", height: "100vh" }}
            />
            {/* <Mainlogo /> */}
          </Container>
        </Container>
      </Breakpoint>
      <Breakpoint medium down>
        <Container
          style={{
            backgroundColor: "whitesmoke",
            height: "100vh",
            display: "grid",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              // alignContent: "center",
              justifyContent: "center",
              margin: "auto",
              width: "100%",
            }}
          >
            <Typography
              style={{
                display: "flex",
                margin: "auto",
                fontFamily: "Inter ,sans-serif",
                fontWeight: "bolder",
                fontSize: "1.5rem",
              }}
            >
              Welcome Back
            </Typography>
            <NormalLoginForm />
          </div>
        </Container>
      </Breakpoint>
    </Container>
  );
}
