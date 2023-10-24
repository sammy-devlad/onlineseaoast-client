import { useAppSelector } from "@/hooks/useStore";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { clossSideBar } from "../utils";

const SideBar = () => {
  const user = useAppSelector((state) => state.user.user)!;
  useEffect(() => {
    var links = document.querySelectorAll("#sideBar ul li a");

    if (window.innerWidth < 767) {
      links.forEach((link) => {
        link.addEventListener("click", function (e) {
          clossSideBar();
        });
      });
    }

    return () => {
      links.forEach((e) => e.removeEventListener("click", function () {}));
    };
  }, []);

  return (
    <>
      <div id="sideBar">
        <ul>
          <li className="avatar">
            <div className="media">
              <img
                src={user.image_url}
                alt="Avatar"
                className="avatar-lg rounded-circle mr-3"
              />
              <div className="media-body text-truncate">
                <h4>{user.first_name + " " + user.last_name}</h4>
                <p className="text-muted">{user.username}</p>
              </div>
            </div>
          </li>
          <li className="sub-header" data-aos="fade-in">
            <span>My account</span>
          </li>
          <li>
            <NavLink to="/dashboard">
              <i className="fa-solid fa-wallet"></i>
              <span>balance enquiry</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/account-details">
              <i className="fa-solid fa-user"></i>
              <span>account details</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/transactions-log">
              <i className="fa-solid fa-file"></i>
              <span>transactions</span>
            </NavLink>
          </li>
          <li className="sub-header">
            <span>ACCOUNT TRANSFERS</span>
          </li>
          {/* <li>
            <NavLink to="/card">
              <i className="fa-solid fa-credit-card"></i>
              <span>card</span>
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/onlineseacoat-transfer">
              <i className="fa-solid fa-exchange"></i>
              <span>Transfer to same bank</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/other-transfer">
              <i className="fa-solid fa-random"></i>
              <span>Transfer to other bank</span>
            </NavLink>
          </li>{" "}
          <li>
            <NavLink to="/international-transfer">
              <i className="fa-solid fa-globe"></i>
              <span>international transfer</span>
            </NavLink>
          </li>{" "}
          <li className="sub-header">
            <span>SELF SERVICE</span>
          </li>
          <li>
            <NavLink to="/forgot-password">
              <i className="fa-solid fa-lock"></i>
              <span>change password</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/reset-pin">
              <i className="fa-solid fa-key"></i>
              <span>Reset pin</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
