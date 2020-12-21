import firestore from '@react-native-firebase/firestore';
import {GenerateRandom} from '../utils/';

const db = firestore();
class UserService {
  constructor() {
    //this.db = firestore().collection(col);
  }

  onCreateUserDB(userID, email) {
    return new Promise(async (resolve, reject) => {
      const userData = {
        uid: userID,
        userCode: new GenerateRandom().onGenerateFourDigits(),
        firstname: '',
        secondname: '',
        email: email,
        avatarURL: '',
        gender: '',
        phone: '',
        region: '',
        nationalID: '',
        isManager: true,
      };

      await db
        .collection('users')
        .doc(userID)
        .set(userData)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          reject(e);
        });
    });
  }

  onUpdateDatabase(col, doc, data) {
    return new Promise(async (resolve, reject) => {
      await db
        .collection(col)
        .doc(doc)
        .update(data)
        .then(() => {
          resolve('Success');
        })
        .catch((e) => {
          reject(e);
        });
    });
  }

  onGetDocumentData = (col, doc) => {
    return new Promise((resolve, reject) => {
      db.collection(col)
        .doc(doc)
        .get()
        .then((data) => {
          resolve(data);
        })
        .catch((e) => {
          reject(e);
        });
    });
  };

  onCreateDocumentWithAutoGeneratedID = (col, data) => {
    return new Promise((resolve, reject) => {
      const db = firestore();
      db.collection(col)
        .add(data)
        .then((ref) => {
          resolve(ref);
        })
        .catch((e) => {
          reject(e);
        });
    });
  };

  onGetCollectionData = (col) => {
    return new Promise((resolve, reject) => {
      const db = firestore();
      db.collection(col)
        .get()
        .then((querySnapshot) => {
          resolve(querySnapshot);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}
export default UserService;
