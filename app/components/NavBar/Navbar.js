'use client'
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { useRouter } from "next/navigation";
function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();
   useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  console.log(user);
  return (
    <>
      <div className="navbar text-black d-flex justify-content-between align-items-center ">
        <div className="logoContainer">
          {/* <img src="./Assets/logo.jpg" alt="Logo" width="50" /> */}
          <h2>SAMANTHA</h2>
        </div>

        {/* <div className="welcomContainer">
            <h2>Welcome, Omar</h2>
        </div> */}

        <div
          className="barcontainer"
          onClick={() => setOpen(!open)}
          style={{ cursor: "pointer" }}
        >
          <div className={`bar ${open ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* القائمة اللي بتظهر لما تضغط على البار */}
      {open && (
        <div className="menu bg-white text-black p-3">
          <ul className="list-unstyled mb-0">
            <li className="py-1">Weclcom Back ,{user?user.name:null}</li>
            <li onClick={()=>{router.push("/");}} className="py-1">Home</li>
            <li onClick={()=>{router.push("/HealthyTipsTricks");}} className="py-1">Healthy Tips & Tricks</li>
            <li onClick={()=>{router.push("/PricingTable");}} className="py-1">Pricing Table</li>
            <li onClick={()=>{router.push("/Exercieses");}} className="py-1">Exercises Videos</li>
            <li onClick={()=>{router.push("/Contacts");}} className="py-1">Contacts</li>
            {user != null && user.role === "admin" ? (
                <li onClick={()=>{router.push("/admin");}} className="py-1">User Management</li>
            ) : null}

            {user != null && user.role === "admin" ? (
                <li onClick={()=>{router.push("/MangeTraining");}} className="py-1">Training Management</li>
            ) : null}
  
            {user?<li onClick={()=>{router.push("/login");}} className="py-1">Logout</li>:<li onClick={()=>{router.push("/login");}} className="py-1">Login</li>}
            
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
