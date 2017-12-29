import React, { Component } from 'react';
import Photo from '../Info/Photo';
import Name from './Name';
import Nickname from './Nickname';
import Info from './Info';
import Contacts from './Contacts/Contacts';


class MainInf extends Component {
  render() {
    return (
      <div className="MainInf">
        <Photo />
        <Name name='Sergeu '/>
        <Nickname nickname='----'/>
        <Info info='Wrost student ever.'/>
        <Contacts icon="university" text="@BSTU"/>
        <Contacts icon="map-marker" text="Belaru, Brest"/>
        <Contacts icon="envelope-o" text="2207057@mail.com"/>
        <Contacts icon="link" text="twitter.com"/>
      </div>
    );
  }
}

export default MainInf;