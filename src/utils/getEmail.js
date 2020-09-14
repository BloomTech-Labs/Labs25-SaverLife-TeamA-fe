// This function gets the email returned from
// the okta token via local storage

const getEmail = () => {
  return JSON.parse(localStorage.getItem('okta-token-storage')).idToken.claims
    .email;
};

export default getEmail;
