import { IonButton, IonContent, IonItem, IonHeader, IonPage, IonTitle, IonInput, IonGrid, IonRow, IonCol} from '@ionic/react';
import React, {useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom';

const Login: React.FC = () =>{

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    // Function for validating login. In a real application function would connect to a database
    function validateUser(username: string, password: string){
        const correctUsername: string = 'user'
        const correctPassword: string = 'user'

        if(username === correctUsername && password === correctPassword){
            //Reset states, also empties input field values
            setUsername('');
            setPassword('');

            // Allow redirect
            setRedirect(true);
        }
    }

    // useEffect hook for resetting redirect state every time login screen is loaded
    useEffect(()=>{
        setRedirect(false);
    })

    return(
        <IonPage>
            <IonContent>
                <div className='container'>
                    <IonGrid>
                        <IonRow>
                            <IonTitle>CV App</IonTitle>
                        </IonRow>
                        <IonRow>
                            <IonCol/>
                            <IonCol size='8'>
                                <IonItem>
                                    <IonInput clearInput value={username} placeholder='Username' type='text' onIonChange={
                                        (event:any)=>{setUsername(event.target.value)}
                                    }/>
                                </IonItem>
                                <IonItem>
                                    <IonInput clearInput value={password} placeholder='Password' type='password' onIonChange={
                                        (event:any)=>{setPassword(event.target.value)}
                                    }/>
                                </IonItem>
                                <IonButton expand='block' onClick={()=>validateUser(username,password)}>Login</IonButton>
                            </IonCol>
                            <IonCol/>
                        </IonRow>
                    </IonGrid>
                </div>
            </IonContent>
            {redirect ? <Redirect push to={'/page/Profile'} />:null}
        </IonPage>
    )
}

export default Login;