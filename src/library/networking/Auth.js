import auth from '@react-native-firebase/auth';

class Auth {
  onHandelSignUpWithEmailPassword = async (email, password) => {
    return await new Promise((resolve, reject) => {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          reject(e);
        });
    });
  };

  onHandelLoginUserWithEmail = async (email, password) => {
    return await new Promise((resolve, reject) => {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          reject(e);
        });
    });
  };

  onAuthStateChange = () => {
    return new Promise((resolve, reject) => {
      auth().onAuthStateChanged((user) => {
        if (user) {
          // Authenticate to any screen.
          resolve(user);
        } else {
          reject(null);
        }
      });
    });
  };

  onHandelGetUser = () => {
    return new Promise((resolve, reject) => {
      const user = auth().currentUser;
      if (user) {
        resolve(user);
      } else {
        reject(null);
      }
    });
  };

  onLogOut = async () => {
    return await new Promise((resolve, reject) => {
      auth()
        .signOut()
        .then((r) => {
          console.log('signed out.');
          resolve(r);
        })
        .catch((e) => {
          reject(e);
        });
    });
  };
}

export default Auth;
