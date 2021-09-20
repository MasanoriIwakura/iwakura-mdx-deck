import React from "react";

const Layout = (props) => {
  const styles = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: props.color,
  };

  return (
    <div style={styles}>
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
