import alt from '../alt';
import Firebase from 'firebase';

class Actions {
  login (args){
    return (dispatch) => {
      var firebaseRef = new Firebase('https://crypch.firebaseio.com');
      firebaseRef.authWithOAuthPopup("google", (error, user)=> {
        if (error){
          return;
        }

        dispatch(user);
      });
    }
  }
}

export default alt.createActions(Actions);