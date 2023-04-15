import React from 'react'
import DeviceLocationButton from '../../components/DeviceLocationButton/DeviceLocationButton';
import PlacesAutocompleteInput from '../../components/PlacesAutocompleteInput/PlacesAutocompleteInput';
import PlacesWrapper from '../../components/PlacesWrapper/PlacesWrapper';
import './HomePage.scss';

const HomePage = () => {
  return (
    <div className='home-page'>
      <h1 className="home-page__title">Search nearby restaurants</h1>

      <PlacesAutocompleteInput />
      <DeviceLocationButton />
      <PlacesWrapper />
    </div>
  )
}

export default HomePage