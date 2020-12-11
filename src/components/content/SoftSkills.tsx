import React from 'react';
import { CreateAnimation, IonGrid, IonRow, IonCol, IonItem, IonIcon, IonTitle} from '@ionic/react';
import {accessibilityOutline, telescopeOutline, peopleOutline, chatbubbleEllipsesOutline, rocketOutline} from 'ionicons/icons';

const SoftSkills: React.FC = () =>{
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
            <div className='soft-skills-container'>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem lines='none'>
                            <IonIcon ios={accessibilityOutline} md={accessibilityOutline} />
                            <IonTitle>Good adaptability</IonTitle>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem lines='none'>
                            <IonIcon ios={telescopeOutline} md={telescopeOutline} />
                            <IonTitle>Creative thinker</IonTitle>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem lines='none'>
                            <IonIcon ios={peopleOutline} md={peopleOutline} />
                            <IonTitle>Team player</IonTitle>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem lines='none'>
                            <IonIcon ios={chatbubbleEllipsesOutline} md={chatbubbleEllipsesOutline} />
                            <IonTitle>Sociable</IonTitle>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem lines='none'>
                            <IonIcon ios={rocketOutline} md={rocketOutline} />
                            <IonTitle>Unyelding & Motivated</IonTitle>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </div>
        </CreateAnimation>
    )
}

export default SoftSkills;