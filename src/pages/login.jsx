import '../styles/sass/login.sass/login.scss'

const Login = () => {
  return (
    <div className="container">
      <div className="login_form_wrapper">
        <form className="login_form">
          <h1 className="login_form_heading">Registration</h1>
          <div className="login_form_inputs">
            <label htmlFor="login" className="login_form_label">
              <span>Login</span>
            </label>
            <input
              type="text"
              name="login"
              id="login"
              placeholder="Login"
              className="login_form_input"
            />
            <label htmlFor="Password" className="login_form_label">
              <span>Password</span>
            </label>
            <input
              type="text"
              name="Password"
              id="Password"
              placeholder="Password"
              className="login_form_input"
            />
                      </div>
          <button className="login_form_btn">login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
