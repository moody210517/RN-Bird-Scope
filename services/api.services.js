import axios from 'axios';
import constants from '../constants/constants';

var services = {

  isLoggin: false,

  login: (email, password) => {

		axios.post(`${constants.apiPath}/users/authenticate`, {email: email, password: password})
		.then(function(response) {

      res: {};

      res = response.data;

      if (res['message'] == 'Email or password is incorrect') {
        alert('Email or password is incorrect');
      } else {
        alert('Login Success');
      }
		})
    .catch(function(error) {
      alert(error);
    })
	},

  register: (email, password, name, handicap, start_position, image) => {

    axios.post(`${constants.apiPath}/users/register`, {email: email, password: password, name: name, handicap: handicap, start_position: start_position, image: image})
    .then(function(response) {

      res: {};

      res = response.data;

      if (res['message'] == 'Success') {
        alert('Register Success');
      } else {
        alert('Register Fail');
      }
    })
    .catch(function(error) {
      alert(error);
    })
  },
}

export default services;
