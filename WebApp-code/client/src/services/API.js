/*
  user API calls
 */

const BASEURL = "/api"; //the base URL is /api

async function logIn(credentials) {
  let response = await fetch("/api/sessions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  if (response.ok) {
    const user = await response.json();
    return user;
  } else {
    try {
      const errDetail = await response.json();
      throw errDetail.message;
    } catch (err) {
      throw err;
    }
  }
}

async function logOut() {
  await fetch("/api/sessions/current", { method: "DELETE" });
}

async function getUserInfo() {
  const response = await fetch(BASEURL + "/sessions/current");
  const userInfo = await response.json();
  if (response.ok) {
    return userInfo;
  } else {
    throw userInfo;
  }
}

const API = {
  logIn,
  logOut,
  getUserInfo,
};
export default API;
