import "../styles/sass/register.sass/register.scss";

const Register = () => {
  return (
    <div className="container">
      <div className="register_form_wrapper">
        <form className="register_form">
          <h1 className="register_form_heading">Registration</h1>
          <div className="register_form_inputs">
            <label htmlFor="login" className="register_form_label">
              <span>Login</span>
            </label>
            <input
              type="text"
              name="login"
              id="login"
              placeholder="Login"
              className="register_form_input"
            />
            <label htmlFor="First_name" className="register_form_label">
              <span>First name</span>
            </label>
            <input
              type="text"
              name="First_name"
              id="First_name"
              placeholder="First name"
              className="register_form_input"
            />
            <label htmlFor="Last_name" className="register_form_label">
              <span>Last name</span>
            </label>
            <input
              type="text"
              name="Last_name"
              id="Last_name"
              placeholder="Last name"
              className="register_form_input"
            />
            <label htmlFor="Email" className="register_form_label">
              <span>Email</span>
            </label>
            <input
              type="text"
              name="Email"
              id="Email"
              placeholder="Email"
              className="register_form_input"
            />
            <label htmlFor="Password" className="register_form_label">
              <span>Password</span>
            </label>
            <input
              type="text"
              name="Password"
              id="Password"
              placeholder="Password"
              className="register_form_input"
            />
            <label htmlFor="Re_enter_password" className="register_form_label">
              <span>Re-enter password</span>
            </label>
            <input
              type="text"
              name="Re_enter_password"
              id="Re_enter_password"
              placeholder="Re-enter password"
              className="register_form_input"
            />
          </div>
          <button className="register_form_btn">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
