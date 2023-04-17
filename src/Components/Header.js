import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

let Header = () => {
    
  return (
    <>
    <GoogleOAuthProvider clientId="834880256757-93kgi8f7c1af5tgn0ikckvoaghm6tinv.apps.googleusercontent.com">;
      <div className="modal"  tabIndex="-1" id="loginModel">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div>
              <h5 className="modal-title">Login</h5>
              </div>
              <div>
                
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              </div>
               <GoogleLogin
  onSuccess={(credentialResponse)=>{
    console.log(credentialResponse)
  }
}
  onError={(credentialResponse)=>{
         console.log("Error. Failed to login")
  }}
/>;

            </div>
   
          </div>
        </div>
      </div>

      <section className="headerSection">
        <header className="header">
          <div style={{ flex: "1" }}>
            <p className="logo">e!</p>
          </div>
          <div>
            <button className="loginBtn customBtn" data-bs-Target="#loginModel" data-bs-toggle = "modal">Login</button>
            <button className=" btn btn-outline-light ms-1 me-5">
                  Create an account
                </button>
          </div>
        </header>
      </section>
    </GoogleOAuthProvider>
    </>
  );
};

export default Header;
