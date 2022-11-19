import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import logo from "../../public/logo.png";
import { useUserContext } from "../../context/user/user-context";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useState } from "react";
import { MenuItem, Button, Menu, Badge, ButtonBase } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { getData } from "../../pages/api/user";

export default function Navbar() {
  const { userState, userDispatch } = useUserContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const router = useRouter();

  async function getUser() {
    const data = await getData();
    userDispatch(data);
  }

  useEffect(() => {
    if (window.localStorage.getItem("token") && userState.username === "") {
      getUser();
    }
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getCartAmount = () => {
    if (!window.localStorage.getItem("cart")) {
      return 0;
    } else {
      const cart = JSON.parse(window.localStorage.getItem("cart"));
      const total = 0;
      cart.forEach((element) => {
        total = total + element.amount;
      });
      return total;
    }
  };

  const handleLogout = () => {
    setAnchorEl(null);
    window.localStorage.removeItem("token");
    userDispatch({
      address: {
        city: "",
        street: "",
        number: "",
        zipcode: "",
      },
      email: "",
      username: "",
      name: {
        firstname: "",
        lastname: "",
      },
      phone: "",
    });
    router.push("/");
  };

  return (
    <div>
      <div className={styles["nav-bar"]}>
        <div className={styles["nav-logo"]}>
          <Link href="/">
            <a>
              <Image src={logo} width={120} height={30} />
            </a>
          </Link>
        </div>
        <ul className={styles["nav-links"]}>
          <li>
            <Link href="/shop">
              <Button color="warning">Shop</Button>
            </Link>
          </li>
          <li>
            {userState.username != "" ? (
              <div>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  color="warning"
                >
                  <AccountBoxIcon></AccountBoxIcon>
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <Link href="profile">
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                  </Link>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            ) : (
              <Link href="/sign-in">
                <Button color="warning">Sign In</Button>
              </Link>
            )}
          </li>
        </ul>
      </div>
      <div className={styles["sub-nav"]}>
        <div className={styles["welcome"]}>
          {userState.username === ""
            ? "Welcome, Guest."
            : "Welcome, " + userState.name.firstname + "."}
        </div>
        {userState.username && (
          <ButtonBase
            className={styles["cart"]}
            onClick={() => router.push("/cart")}
          >
            <Badge badgeContent={getCartAmount()} color="error">
              <ShoppingCartIcon></ShoppingCartIcon>
            </Badge>
          </ButtonBase>
        )}
      </div>
    </div>
  );
}
