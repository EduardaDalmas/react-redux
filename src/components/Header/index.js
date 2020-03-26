import React from "react";
import { connect } from "react-redux";

import { Nav } from "./styles";

function Header({ }) {
  return (
    <>
      <Nav />
    </>
  );
}

const mapStateToProps = state => ({
  personCount: state.person.length,
});

export default connect(mapStateToProps)(Header);
