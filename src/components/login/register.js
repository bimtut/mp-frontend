import React from "react";
import logo from "../../logo.svg";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      errors: [],
      passwordValidation: "password must contain huruf kecil, huruf besar dan angka",
      // tembak ketika sudah tidak ada error sama sekali
      passReady: false
    };
  }

  submitRegister(elm) {
    // eslint-disable-next-line
    if (this.state.username == "") {
      this.showValidationErr("username", "Username can't be empty!");
    }
    // eslint-disable-next-line
    if (this.state.email == "") {
      this.showValidationErr("email", "Email can't be empty!");
    }
    // eslint-disable-next-line
    if (this.state.password == "") {
      this.showValidationErr("password", "Password can't be empty!");
    }
  }

  showValidationErr(elm, msg) {
    this.setState((prevState) => ({
      errors: [...prevState.errors, { elm, msg }],
    }));
  }

  clearValidationErr(elm) {
    this.setState(prevState => {
      let newArr  = []

      for (let err of prevState.errors) {
        if (err.elm !== elm) {
          newArr.push(err)
        }
      }
      return {errors: newArr}
    })
  }

  onChangeEvent(elm, e) {
    // this.setState({elm: e.target.value})
  }

  onChangeUsername(e) {
    this.setState({ username: e.target.value });
    this.clearValidationErr("username")
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
    this.clearValidationErr("email")
  }

  onChangePassword(e) {
    let validation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{1,1000}$/; //aB9
    // aB
    let valid_aB = /^(?=.*[a-z])(?=.*[A-Z]).{1,1000}$/;
    // a9
    let valid_a9 = /^(?=.*\d)(?=.*[a-z]).{1,1000}$/;
    // B9
    let valid_B9 = /^(?=.*\d)(?=.*[A-Z]).{1,1000}$/;
    // a
    let valid_a = /^(?=.*[a-z]).{1,1000}$/;
    // B
    let valid_B = /^(?=.*[A-Z]).{1,1000}$/;
    // 9
    let valid_9 = /^(?=.*\d).{1,1000}$/;
    let isi = e.target.value ? e.target.value : ""
    let password=isi, passwordValidation, passReady
    console.log(JSON.stringify(password))

    this.setState(() => {
      
      if (isi.length < 8 || isi.length > 20) {
        if (isi.match(validation)) {
          passwordValidation= "password must contains at least 8 characters"
          passReady= false
        } else if (isi.match(valid_a9)) {
          passReady= false
          passwordValidation= "password must contains uppercase letter and at least 8 characters long"
        } else if (isi.match(valid_B9)) {
          passReady= false
          passwordValidation= "password must contains lowercase letter and at least 8 characters long"
        } else if (isi.match(valid_aB)) {
          console.log("AB cocok")
          passReady= false
          passwordValidation= "password must contains number and at least 8 characters long"
        } else if (isi.match(valid_a)) {
          passReady= false
          passwordValidation= "password must contains uppercase letter, number and at least 8 characters long"
        } else if (isi.match(valid_B)) {
          passReady= false
          passwordValidation= "password must contains lowercase letter, number and at least 8 characters long"
        } else if (isi.match(valid_9)) {
          passReady= false
          passwordValidation= "password must contains lowercase, uppercase letter and at least 8 characters long"
        } else {
          passReady= false
          passwordValidation= "password must contains lowercase, uppercase letter, number and at least 8 characters long"
        }
      } else {
        if (isi.match(validation)) {
          console.log("tembus")
          passReady= true
          passwordValidation= ""
        } else if (isi.match(valid_a9)) {
          passReady= false
          passwordValidation= "password must contains uppercase letter"
        } else if (isi.match(valid_B9)) {
          passReady= false
          passwordValidation= "password must contains lowercase letter"
        } else if (isi.match(valid_aB)) {
          passReady= false
          passwordValidation= "password must contains number"
        } else if (isi.match(valid_a)) {
          passReady= false
          passwordValidation= "password must contains uppercase letter and number"
        } else if (isi.match(valid_B)) {
          passReady= false
          passwordValidation= "password must contains lowercase letter and number"
        } else if (isi.match(valid_9)) {
          passReady= false
          passwordValidation= "password must contains lowercase and uppercase letter"
        } else {
          passReady= false
          passwordValidation= "password must contains lowercase, uppercase letter and number"
        }
      }

      return {password, passwordValidation, passReady}
    })

    this.clearValidationErr("password")
  }

  render() {
    let usernameErr = null, passwordErr = null, emailErr = null, passwordValid = null

    for (let err of this.state.errors) {
      if (err.elm === "username") {
        usernameErr = err.msg
      }
      if (err.elm === "email") {
        emailErr = err.msg
      }
      if (err.elm === "password") {
        passwordErr = err.msg
      }
    }
    if (this.state.passwordValidation) {
      passwordValid = this.state.passwordValidation
    } else {
      passwordValid = null
    }
    
    return (
      <div className="base-container" ref={this.props.containerRef}>
        {/* header atau judul form */}
        <div className="header">Register</div>

        {/* berisi konten untuk Register */}
        <div className="content">
          {/* image agar Register form tampak lebih menarik */}
          <div className="image">
            <img src={logo} alt="Register" />
          </div>

          {/* pada kelas form berisi input form untuk memasukan data yang digunakan untuk Log in */}
          <div className="form">
            {/* input form */}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="username"
                onChange={this.onChangeUsername.bind(this)}
              ></input>
              <small className="danger-error">{usernameErr ? usernameErr: ""}</small>

            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="test"
                name="email"
                placeholder="email"
                onChange={this.onChangeEmail.bind(this)}
              ></input>
              <small className="danger-error">{emailErr ? emailErr: ""}</small>

            </div>

            {/* input form yang lain dengan struktur yang sama */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                onChange={this.onChangePassword.bind(this)}
                minLength="8"
                maxLength="20"
              ></input>
              <small className="danger-error">{passwordErr ? passwordErr: ""}</small>
              <small className="danger-error">{passwordValid ? passwordValid: ""}</small>

            </div>
          </div>

        </div>

        {/* bagian akhir. berisi tombol untuk eksekusi semua yang diinput pada form */}
        <div className="footer">
          <button
            type="button"
            className="btn"
            onClick={this.submitRegister.bind(this)}
          >
            {/* aku belum ngerti bagaimana variasi mengisi method yang ditembak saat eksekusi onClick */}
            Register
          </button>
        </div>
      </div>
    );
  }
}
