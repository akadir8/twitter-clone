import React from "react";
import Container from "./Layout/Container"
import SideBar from "./Sidebar"
import Feed from "./Feed";
import Timeline from "./Timeline";

function App() {
  return (
    <Container>
    <SideBar/>
    <Feed/>
    <Timeline/>
    </Container>
  );
}

export default App;
