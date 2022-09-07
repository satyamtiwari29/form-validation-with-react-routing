let USER_DATA = {};

const later = (value, delay) =>
  new Promise((resolve) => setTimeout(resolve, delay, value));

export const registerUser = async (payload) => {
  USER_DATA = {
    email: payload.email,
    lastName: payload.lastName,
    firstName: payload.firstName,
    password: payload.password,
    confirmPassword: payload.confirmPassword,
    id: Math.random().toString().slice(2),
    token: "xx5x2x91331x3x3x341xx51176x7xxx182x65xxx"
  };

  const successPayload = {
    status: {
      type: "success",
      code: 200,
      message: "Registration Successful",
      error: false
    },
    data: {
      ...USER_DATA
    }
  };

  const errorPayload = {
    status: {
      type: "error",
      code: 401,
      message: "Registration Failed",
      error: true
    },
    data: null
  };

  try {
    return await later(successPayload, 300);
  } catch (error) {
    console.error(error);
    return errorPayload;
  }
};













export const loginUser = async (payload) => {
  let responsePayload;
  if (
    payload.email === USER_DATA.email &&
    payload.password === USER_DATA.password
  ) {
    responsePayload = {
      status: {
        type: "success",
        code: 200,
        message: "Login Successful",
        error: false
      },
      data: {
        ...USER_DATA
      }
    };
  } else {
    responsePayload = {
      status: {
        type: "error",
        code: 401,
        message: "Email or password are incorrect",
        error: true
      },
      data: null
    };
  }

  try {
    return await later(responsePayload, 300);
  } catch (error) {
    console.error(error);
    return responsePayload;
  }
};

export const logoutUser = async (payload) => {
  let responsePayload;

  if (payload.token === USER_DATA.token) {
    // Reset User data
    USER_DATA = {};

    responsePayload = {
      status: {
        type: "success",
        code: 200,
        message: "Logout Successful",
        error: false
      },
      data: null
    };
  } else {
    responsePayload = {
      status: {
        type: "error",
        code: 401,
        message: "Failed to logout",
        error: true
      },
      data: null
    };
  }
  try {
    return await later(responsePayload, 300);
  } catch (error) {
    console.error(error);
    return responsePayload;
  }
};
