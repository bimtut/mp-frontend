import React from "react";
import logo from "../../logo.svg";

export class Login extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
      username: "",
      password: ""
    }
  }

  submitLogin() {
    
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        {/* header atau judul form */}
        <div className="header">Login</div>

        {/* berisi konten untuk login */}
        <div className="content">
          {/* image agar login form tampak lebih menarik */}
          <div className="image">
            <img src={logo} alt="login" />
          </div>

          {/* pada kelas form berisi input form untuk memasukan data yang digunakan untuk Log in */}
          <div className="form">
            {/* input form */}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username"></input>
            </div>

            {/* input form yang lain dengan struktur yang sama */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password"></input>
            </div>
          </div>

          {/* ini akan berisi text untuk handle forgot password */}
          <div className="forgot"></div>
        </div>

        {/* bagian akhir. berisi tombol untuk eksekusi semua yang diinput pada form */}
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
      </div>
    );
  }
}
