import { IonButtons, IonContent, IonHeader, IonIcon, IonLabel, IonMenuButton, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Modal from '../components/Modal';
import { bookmarkOutline, star } from 'ionicons/icons';
import search from './home-tabs/Search';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Feed from './home-tabs/Feed';
import Search from './home-tabs/Search';
import Favorites from './home-tabs/Favorites';

const Home: React.FC = () => {
  const tabs = [
    {name:"Feed", tab: 'Feed',url:"/app/home/feed", icon:bookmarkOutline},
    {name:"Search", tab: 'Search',url:"/app/home/search", icon:search},
    {name:"Favorites", tab: 'Favorites',url:"/app/home/favorites", icon:star}
  ]
  return (
   <IonReactRouter>
    <IonTabs> 
      <IonTabBar slot="bottom">
        <IonToolbar>
          <IonTitle>Tabs</IonTitle>
            </IonToolbar>
          {/**/}
          {tabs.map((item, index) => (
            <IonTabButton key={index} tab={item.tab} href={item.url}>
              <IonIcon icon={item.icon} />
              <IonLabel>{item.name}</IonLabel>
            </IonTabButton>
          ))}

            </IonTabBar>
          <IonRouterOutlet>
          <Route exact path="/app/home/feed" component={Feed}  />
          <Route exact path="/app/home">
              <Redirect to ="/app/home/feed" />
            
          </Route>
           <Route exact path="/app/home/Search" component={Search}  />
          <Route exact path="/app/home/Favorites" component={Favorites}  />
          </IonRouterOutlet>
    </IonTabs>
   </IonReactRouter>
    
  );
};

export default Home;
