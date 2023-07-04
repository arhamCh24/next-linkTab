import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCdn3ALSdIXjoOQXqqHi28SiBZZi5CMMVo",
    authDomain: "fileupload-1dc62.firebaseapp.com",
    projectId: "fileupload-1dc62",
    storageBucket: "fileupload-1dc62.appspot.com",
    messagingSenderId: "750269031439",
    appId: "1:750269031439:web:eba2acd359f2ab5b512f7a"
  };


const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };

