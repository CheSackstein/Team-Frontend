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


const auth = (setUser, data) => {
    fetch(`${BaseURL}/api/users/auth`, {
            method: "POST",
            credentials: "include"
    }).then((res) => res.json())
        .then(data => console.log(data)) // retrieveAndSetUser(data, setUser)
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
            body: JSON.stringify(data),
        })
        .then((res) => handleResponse(res))
        .catch(catchError());
};

const POSTtoUsers = async(endpoint, data) => {
    const resp = await fetch(`${BaseURL}/api/users/${endpoint}`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify(data),
    });
    return await resp.json();
};

const GETFromProviders = (endpoint) => {
    fetch(`${BaseURL}/api/serviceproviders/${endpoint}`)
        .then((res) => handleResponse(res))
        .catch(catchError());
};

const PUTtoProviders = (endpoint, data) => {
    fetch(`${BaseURL}/api/serviceproviders/${endpoint}`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: data
    })
      .then((res) => handleResponse(res))
      .catch(catchError());
};

function POSTtoProviders(endpoint, data) {
<<<<<<< HEAD
    fetch(`${BaseURL}/api/serviceproviders/${endpoint}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => handleResponse(res))
      .catch(catchError());
};

function POSTtoProvidersUnhandled(endpoint, data) {
    fetch(`${BaseURL}/api/serviceproviders/${endpoint}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
=======
    fetch(`${BaseURL}/api/providers/${endpoint}`, {
            method: "POST",
            credentials: "include",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then((res) => handleResponse(res))
        .catch(catchError());
>>>>>>> 2f6c9e45ea9d6061c8aab8a3925caff852a8689b
};

export {
  POSTtoUsers,
  PUTtoUsers,
  GETFromUsers,
  GETFromProviders,
  PUTtoProviders,
  POSTtoProviders,
    auth,
  POSTtoProvidersUnhandled,
  BaseURL
};