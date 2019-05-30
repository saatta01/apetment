import './index.css';
import './Masthead.css';
import './FilterCard.css';
import './SingleSelectionDropdown.css';
import './results.css';
import './ApartmentCard.css';
import './Footer.css';
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import firebase from 'firebase';
import { DB_CONFIG } from './config';
import Masthead from './Masthead';
import FilterCard from './FilterCard';
import SingleSelectionDropdown from './SingleSelectionDropdown';
import Results from './results';
import ApartmentCard from './ApartmentCard';
import Footer from './Footer';
import { Container, Segment } from 'semantic-ui-react';


class App extends React.Component {

  constructor(props) {
    super(props);

    // this.firebaseapp = firebase.initializeApp(DB_CONFIG);
    if (!firebase.apps.length) {
      firebase.initializeApp(DB_CONFIG);
    }
    this.database = firebase.database().ref();

    this.state = {
      cities: [],
      allCityData: {},
      pets: [],
      selectedCity: undefined,
      selectedPet: undefined,
      submittedCity: 'atlanta',
      submittedPet: 'large dog'
    }
  }

  componentDidMount() {
    // this.database.on('value', snap => {
    //   this.setState({
    //     speed: snap.val()
    //   });
    // });

    this.database.on('child_added', snap => {

      let cities = snap.val();
      // console.log(cities.atlanta[1].pets);


      //for in to make object like city options
      const cityArray = [];
      for (let city in cities) {
        cityArray.push(
        {key: city,
        text: city,
        value: city});
        // console.log(Object.values(cities[city]));

      }

      this.setState({
        cities: cityArray,
        allCityData: cities
      });


    });
  }

  handleClick() {
    if(this.state.selectedCity !== undefined && this.state.selectedPet !== undefined) {
      this.setState({
        submittedCity: this.state.selectedCity,
        submittedPet: this.state.selectedPet
      });
    }
  }

  handleCityChange(event, data) {

    const petsArray = this.getPetsByCity(data.value).map(currentPetName => {
      return {
        key: currentPetName,
        text: currentPetName,
        value: currentPetName
      };
    });

    this.setState({
      pets: petsArray,
      selectedCity: data.value
    });
  }

  handlePetChange(event, data) {
    this.setState({
      selectedPet: data.value
    });

  }

  getPetsByCity(cityName) {
    const city = this.state.allCityData[cityName];
    return _.uniq(_.compact(_.flattenDeep(city.map(currentApartmentObject => currentApartmentObject.pets))));
  }

  renderCards() {
    //make sure the allCityData state value is not empty (i.e. not loaded from firebase yet
    //otherwise the .map will error out
    if(this.state.submittedCity && this.state.submittedPet && !(_.isEmpty(this.state.allCityData))) {
      const filteredCity = this.state.allCityData[this.state.submittedCity];
      const filteredPet = this.state.submittedPet;
      const currentCityArray = _.compact(filteredCity.map(currentApartmentObject => {return currentApartmentObject}));

      return currentCityArray.map((element) => {
        if (element.pets.includes(filteredPet)) {
          return(
            <ApartmentCard name={element.name} photos={element.photos} bedrooms={element.bedrooms} rent={element.rent}/>
          );
        }
      });
    }
  }

  render() {
    return (
      <div>
          <Masthead
          headerTitle="a-PET-ment"
          headerSmall="Family members are always non-negotiable.">
            <FilterCard onClick={() => this.handleClick()}>
              <SingleSelectionDropdown filterType="City" filterOptions={this.state.cities} onChange={this.handleCityChange.bind(this)}/>
              <SingleSelectionDropdown filterType="Furry Friend" filterOptions={this.state.pets} onChange={this.handlePetChange.bind(this)}/>
            </FilterCard>
          </Masthead>
          <Results chosenCity={this.state.submittedCity} chosenPet={this.state.submittedPet}>
            {this.renderCards()}
          </Results>
          <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
