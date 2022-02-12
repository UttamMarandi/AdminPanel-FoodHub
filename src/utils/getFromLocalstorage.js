const getUserFromLocalStorage = () => {
  if (localStorage.getItem("persist:root") !== null) {
    const resUser = JSON.parse(
      JSON.parse(localStorage.getItem("persist:root")).user
    );
    let { currentUser } = resUser;
    return currentUser;
  }
};

export { getUserFromLocalStorage };
