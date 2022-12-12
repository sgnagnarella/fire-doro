import { getAuth } from "firebase/auth";
import Head from "next/head";
import router from "next/router";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

const HomePage = () => {

    const auth = getAuth();
    
    const handleLogout = () => {
        auth.signOut().then(() => {
            console.log("User signed out");
            router.push("/");
        }).catch((error) => {
            console.log(error);
        });
    };

    const authStateChangeHandler = (authState:any) => {
        if(!authState) {
            console.log("User is not logged in");
            router.push("/");
        } 

    };


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(authStateChangeHandler);
        return () => unsubscribe();
    }, []  );

    return (
        <div className={styles.container}>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className={styles.main}>
            <h1 className="text-3xl font-bold underline">Hello2 world!</h1>
            <button type="button" onClick={handleLogout}> Logout </button>
          </main>
        </div>
      );
}

export default HomePage;