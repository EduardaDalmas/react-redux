import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import AuthLayout from "../Views/_layout/auth";
import DefaultLayout from "../Views/_layout/default";
import { connect } from "react-redux";

function RouteWrapper({ user, component: Component, isPrivate, ...rest }) {
  let signed = false;

  console.log(user);

  if (user.length > 0) {
    signed = true;
  }

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/Main" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

// RouteWrapper.protoTypes = {
//   isPrivate: PropTypes.bool,
//   component: PropTypes.any.isRequired,
// };

// RouteWrapper.DefaultProps = {
//   isPrivate: false,
// };

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(RouteWrapper);
