import Swal from "sweetalert2";

const BaseURL = "http://localhost:3001";
// These are all set to send JSON not formData

const handleResponse = (res) => {
  if (res.ok) {
    Swal.fire("Request saved", "You will be contacted shortly", "success");
  } else {
    Swal.fire("A problem ocurred", "Please try again later", "error");
  }
};

const catchError = () => {
  Swal.fire("A problem ocurred", "Please try again later", "error");
};

const retrieveAndSetUser = (res, setUser) => {
  if (res.ok) {
    res.json().then((data) => setUser(data));
  } else {
    Swal.fire("A problem ocurred", "Please try again later", "error");
  }
};


const PostToGetUser = (setUser, data) => {
  fetch(`${BaseURL}/api/users/`, {
    method: "POST",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    body: data,
  }
    .then((res) => retrieveAndSetUser(res, setUser))
    .catch(catchError())

  )

}

const GETFromUsers = (endpoint, setUser) => {
  fetch(`${BaseURL}/api/users/${endpoint}`)
    .then((res) => retrieveAndSetUser(res, setUser))
    .catch(catchError());
};

const PUTtoUsers = (endpoint, data) => {
  fetch(`${BaseURL}/api/users/${endpoint}`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    body: data,
  })
    .then((res) => handleResponse(res))
    .catch(catchError());
};

const POSTtoUsers = (endpoint, data) => {
  fetch(`${BaseURL}/api/users/${endpoint}`, {
    method: "POST",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    body: data,
  })
    .then((res) => handleResponse(res))
    .catch(catchError());
};

const GETFromProviders = (endpoint) => {
  fetch(`${BaseURL}/api/providers/${endpoint}`)
    .then((res) => handleResponse(res))
    .catch(catchError());
};

const PUTtoProviders = (endpoint, data) => {
  fetch(`${BaseURL}/api/providers/${endpoint}`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    body: data,
  })
    .then((res) => handleResponse(res))
    .catch(catchError());
};

const POSTtoProviders = (endpoint, data) => {
  fetch(`${BaseURL}/api/providers/${endpoint}`, {
    method: "POST",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    body: data,
  })
    .then((res) => handleResponse(res))
    .catch(catchError());
};

export {
  POSTtoUsers,
  PUTtoUsers,
  GETFromUsers,
  GETFromProviders,
  PUTtoProviders,
  POSTtoProviders,
  PostToGetUser
};
