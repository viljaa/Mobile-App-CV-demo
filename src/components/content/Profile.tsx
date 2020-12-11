import React from 'react';
import { CreateAnimation, IonCol, IonGrid, IonImg, IonItemDivider, IonRow, IonText, IonTitle, IonIcon, IonItem} from '@ionic/react';
import {receiptOutline, personOutline} from 'ionicons/icons';

// Import styles
import './Content.css';

const Profile: React.FC = () =>{
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
                <IonRow className='title'>
                    <IonCol>
                        <IonTitle>
                            <strong>Ville Jaatinen</strong>
                        </IonTitle>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonImg className='bio-picture' src={'assets/images/vjkuva.jpg'} alt='CV image'/>
                    </IonCol>
                </IonRow>
                <IonItemDivider></IonItemDivider>
                <IonRow>
                    <IonCol>
                        <IonItem lines='none'>
                            <IonIcon ios={personOutline} md={personOutline} />
                            <IonTitle>Bio</IonTitle>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonRow>
                        <IonCol className='bio-text'>
                            <IonText>
                                <p>
                                    I'm a 22-year-old IT-student from Vantaa. I'm currently studying for Bachelor's Degree in Business Information Technology in
                                    Laurea AMK Tikkurila. In my studies I've focused on web-development with modern technologies and my goal is to become a web-developer.
                                </p>
                            </IonText>
                        </IonCol>
                    </IonRow>
                </IonRow>
            </IonGrid>
        </CreateAnimation>
    )
}

export default Profile;