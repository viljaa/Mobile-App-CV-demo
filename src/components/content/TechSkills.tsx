import React, { useEffect, useState } from 'react';
import { CreateAnimation, IonList, IonListHeader, IonProgressBar, IonTitle } from '@ionic/react';

// Import styles
import './Content.css'

const TechSkills: React.FC = () =>{
    // States
    const [isDetermined, setIsDetermined] = useState(false);

    // Function that waits a while before sets progressbars as 'determinate'
    const wait = () =>{
        setTimeout(()=>{
            setIsDetermined(true)
        },1450)
    }
    // Fire wait function once content is rendered
    wait();

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
            <div className='tech-skills-container'>
                <IonList>
                    <IonListHeader>
                        <IonTitle>React</IonTitle>
                    </IonListHeader>
                    <IonProgressBar type={isDetermined ? 'determinate': 'indeterminate'} color='react' value={0.85}></IonProgressBar>
                </IonList>
                <IonList>
                    <IonListHeader>
                        <IonTitle>JavaScript</IonTitle>
                    </IonListHeader>
                    <IonProgressBar type={isDetermined ? 'determinate': 'indeterminate'} color='warning' value={0.9}></IonProgressBar>
                </IonList>
                <IonList>
                    <IonListHeader>
                        <IonTitle>Node.js</IonTitle>
                    </IonListHeader>
                    <IonProgressBar type={isDetermined ? 'determinate': 'indeterminate'} color='success' value={0.7}></IonProgressBar>
                </IonList>
                <IonList>
                    <IonListHeader>
                        <IonTitle>HTML</IonTitle>
                    </IonListHeader>
                    <IonProgressBar type={isDetermined ? 'determinate': 'indeterminate'} color='orange' value={0.75}></IonProgressBar>
                </IonList>
                <IonList>
                    <IonListHeader>
                        <IonTitle>CSS</IonTitle>
                    </IonListHeader>
                    <IonProgressBar type={isDetermined ? 'determinate': 'indeterminate'} value={0.80}></IonProgressBar>
                </IonList>
            </div>
        </CreateAnimation>
    )
}

export default TechSkills;