import React from "react";
import { useState } from "react";
import login from "../assets/Login.png";

function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Username: ${formData.username}\nPassword: ${formData.password}`);
  }

  return (
    <div>
      <div style={{margin:"2rem 4rem"}}>

       <div style={{textAlign:"center"}}>
         <h2 style={{fontWeight:"600",
            marginBottom:"1rem",fontSize:"2rem"}}>Login</h2>
      <p>Get access to your Orders, Wishlist and Recommendations.</p>
       </div>
    <div 
        style={{display:"flex",justifyContent:"center",
        gap:"2rem",margin:"2rem 4rem",justifySelf:"center",width:"280px"
      }}>
        <div style={styles.container}>
      <form onSubmit={handleSubmit}>
        <span><b>Email Address *</b></span>
        <input
          type="text"
          name="username"
          placeholder="Enter your email add..."
          value={formData.username}
          onChange={handleChange}
          style={styles.input}
        />
        <span><b>Password *</b></span>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}/>

            <a href="www.grabitStore.com"
              style={{textDecoration:"none",
                color:"#333",float:"right"
              }}>
                Forgot Password?
            </a>
            <span style={{display:"flex",
              justifyContent:"space-between",
              marginTop:"3rem"}}>
                <span><a href="www.grabitStore.com"
                style={{textDecoration:"none",
                color:"#333"
                }}>Create Account</a></span>
                <button className="add-btn">Login</button>
            </span>
      </form>

    </div>

     <div>
        <img src={login} 
          style={{width:"19rem",marginTop:"2.5rem",
          height:"16.5rem",borderRadius:"5px"}} />
    </div>
    </div>

      </div>
    </div>
  );
}

const styles = {
  container: { marginTop: "40px",
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius:"",
    alignContent: "center"  },
  input: {
    display: "block",
    margin: "10px auto",
    padding: "10px",
    border: "1px solid #ddd",
    width: "280px",
    borderRadius: "5px",
  },
};

export default LoginForm;