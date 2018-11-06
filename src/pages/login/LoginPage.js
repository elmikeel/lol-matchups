import React, { Component } from "react";

import NavBar from "../../components/reuse/navbar/NavBar";
import LoginSection from "../../components/login_section/LoginSection";
import Footer from "../../components/reuse/footer/Footer";
import "./LoginPage.css";

class LoginPage extends Component {
  render() {
    return (
      <div className="loginPage__container">
        <NavBar />
        <LoginSection />
        <Footer />
      </div>
    );
  }
}

export default LoginPage;