import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import {bodyOutline, bodySharp, buildOutline, buildSharp, brushOutline, brushSharp, gitBranchOutline, gitBranchSharp, chatbubbleOutline, chatbubbleSharp, exitOutline, exitSharp} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Profile',
    url: '/page/Profile',
    iosIcon: bodyOutline,
    mdIcon: bodySharp
  },
  {
    title: 'Technical skills',
    url: '/page/Technical Skills',
    iosIcon: buildOutline,
    mdIcon: buildSharp
  },
  {
    title: 'Soft skills',
    url: '/page/Soft Skills',
    iosIcon: brushOutline,
    mdIcon: brushSharp
  },
  {
    title: 'Projects',
    url: '/page/Projects',
    iosIcon: gitBranchOutline,
    mdIcon: gitBranchSharp
  },
  {
    title: 'Contact info',
    url: '/page/Contact Info',
    iosIcon: chatbubbleOutline,
    mdIcon: chatbubbleSharp
  },
  {
    title: 'Exit',
    url: '/',
    iosIcon: exitOutline,
    mdIcon: exitSharp
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>CV App</IonListHeader>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
