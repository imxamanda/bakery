import { useState } from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { Button, Container, Form, Image } from "react-bootstrap";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

initializeApp(firebaseConfig);
const storage = getStorage();

function App() {
  const [imgURL, setImgURL] = useState("");
  const [progressPercent, setProgressPercent] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const file = event.target[0]?.files[0];
    if (!file) return;

    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgressPercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgURL(downloadURL);
        });
      }
    );
  };

  return (
    <Container className="App">
        <Form onSubmit={handleSubmit}>
          <input type="file" />
          <Button>Enviar</Button>
        </Form>
        {!imgURL && <p>{progressPercent}%</p>}
        {imgURL && <Image src={imgURL} alt="Imagem" height={200} />}

    </Container>
  );
}

export default App;
