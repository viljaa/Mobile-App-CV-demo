import React from 'react';
import { CreateAnimation, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonImg, IonRow, IonText} from '@ionic/react';

const Projects: React.FC = () =>{
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
                        <IonCard>
                            <IonImg src={'assets/images/Arch-landing.PNG'}/>
                            <IonCardHeader>
                                <IonCardSubtitle>React, Node.js, Mongoose, Bulma</IonCardSubtitle>
                                <IonCardTitle>Arch - Steam Achievement Viewer</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonText>Link to project: <a href='https://github.com/viljaa/SteamAchievementViewer'>Github</a></IonText>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonCard>
                            <IonImg src={'assets/images/Painikepeli-ingame.PNG'}/>
                            <IonCardHeader>
                                <IonCardSubtitle>React, Node.js, Socket.io</IonCardSubtitle>
                                <IonCardTitle>Painikepeli</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonText>Link to project: <a href='https://github.com/viljaa/Painikepeli'>Github</a></IonText>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonCard>
                            <IonImg src={'assets/images/FinnkinoApp-landing.PNG'}/>
                            <IonCardHeader>
                                <IonCardSubtitle>JavaScript, HTML, CSS</IonCardSubtitle>
                                <IonCardTitle>Finnkino App - Movie Schedules</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonText>Link to project: <a href='https://github.com/viljaa/Finnkino-API-Movie-Schedules'>Github</a></IonText>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </CreateAnimation>
    )
}

export default Projects;