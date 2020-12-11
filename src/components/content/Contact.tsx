import React from 'react';
import { CreateAnimation, IonGrid, IonRow, IonCol, IonTitle, IonIcon, IonText, IonItem } from '@ionic/react';
import {logoGithub, mailOutline, phonePortraitOutline} from 'ionicons/icons';

// Import styles
import './Content.css'

const Contact: React.FC = () =>{
    return(
        <CreateAnimation
            duration={300}
            iterations={1}
            play={true}
            fromTo={[
                { property: 'transform', fromValue: 'translateX(-40%)', toValue: 'translateX(0%)' },
                { property: 'opacity', fromValue: '0', toValue: '1' }
            ]}
            >
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <IonTitle className='contact-text'>Email:</IonTitle>
                        <IonItem>
                            <IonIcon ios={mailOutline} md={mailOutline} className='contact-icon' />
                            <IonText>ville.jaatinen@student.laurea.fi</IonText>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonTitle className='contact-text'>Phone:</IonTitle>
                        <IonItem>
                            <IonIcon ios={phonePortraitOutline} md={phonePortraitOutline} className='contact-icon'/>
                            <IonText>044 XXX XXXX</IonText>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonTitle className='contact-text'>Github:</IonTitle>
                        <IonItem>
                            <IonIcon ios={logoGithub} md={logoGithub} className='contact-icon'/>
                            <IonText>github.com/viljaa</IonText>
                        </IonItem>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </CreateAnimation>
    )
}

export default Contact;