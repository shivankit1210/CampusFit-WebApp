const Login = () =>{
    return (
  <div>
    
    <div class="box-form">
      <div class="left">
        <div class="overlay">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            et est sed felis aliquet sollicitudin
          </p>
          <span>
            <p>login with social media</p>
            <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="#"
              ><i class="fa fa-twitter" aria-hidden="true"></i> Login with
              Twitter</a
            >
          </span>
        </div>
      </div>

      <div class="right">
        <h5>Login</h5>
        <p>
          Don't have an account? <a href="#">Creat Your Account</a> it takes
          less than a minute
        </p>
        <div class="inputs">
          <input type="text" placeholder="user name" />
          <br />
          <input type="password" placeholder="password" />
        </div>

        <br /><br />

        <div class="remember-me--forget-password">
         
          <label>
            <input type="checkbox" name="item" checked />
            <span class="text-checkbox">Remember me</span>
          </label>
          <p>forget password?</p>
        </div>


        <br />
        <button>Login</button>
      </div>
    </div>
  </div>
    )
}

export default Login;