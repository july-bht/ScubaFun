import { useState, createContext } from 'react';
export const LoginContext = createContext()

const LoginContextProvider = ( props ) => {


    // USER - bruger der er logget ind *******
    // -----------------------------------------------
    let [ user, setUser ] = useState(); // staten er tom/null men udfyldes med en user efter succesfuldt login

    // Herinde kan man evt. ogsåtjekke om der er en levende session fra API'et = stadig logget ind
    // ... og hvis der er så sæt automatisk user, så man straks er logget ind

    // LOGIN *******
    // -----------------------------------------------
    let signIn = ( loginUser, password ) => {

        // Herfra håndteres kald til API'ets login-metoder, hvis det skal virke rigtigt
        // LOGIN OK:
        if ( password === "123456" && loginUser === "admin" ) {
            // kontakt API for at spørge om login matcher en bruger
            setUser( loginUser )
        }
        // LOGIN AFVIST:
        else setUser( null )
    };

    // LOGUD *******
    // -----------------------------------------------
    let signOut = () => {
        setUser( null ); // tøm user-state
    };


    return (

        // Det der spyttes ud fra provideren/udbyderen (user, login og logud):
        <LoginContext.Provider value={ { user, signIn, signOut } }>
            { props.children }
        </LoginContext.Provider>
    )
};

export default LoginContextProvider;