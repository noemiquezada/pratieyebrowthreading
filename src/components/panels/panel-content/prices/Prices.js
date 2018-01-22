import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import './Prices.css';

var children = [
    {category: 'threading', service: 'eyebrow', cost: 8},
    {category: 'threading', service: 'lip', cost: 4},
    {category: 'threading', service: 'chin', cost: 5},
    {category: 'threading', service: 'side', cost: 6},
    {category: 'threading', service: 'cheek', cost: 10},
    {category: 'waxing', service: 'under arms', cost: 10},
    {category: 'waxing', service: 'eyebrow + lips', cost: 10},
    {category: 'waxing', service: 'half arms', cost: 10},
    {category: 'waxing', service: 'full arms', cost: 30},
    {category: 'waxing', service: 'breast/belly', cost: 10},
    {category: 'facial', service: 'european facial', cost: 50},
    {category: 'facial', service: 'mini facial', cost: 25},
]

var masonryOptions = {
  // fitWidth: true,
  transitionDuration: '0.2s',
  // itemSelector: '.grid-item',
  columnWidth: '.col-sm-3',
  // gutter: 'gutter-size',
  // percentPosition: true,

}

var masonryStyles = {
}

class Prices extends Component {
  constructor(props) {
    super(props);

    // this.handleOnCategoryClick = this.handleOnCategoryClick.bind(this);
    this.elements = [];

    this.state = {
      category: 'all',
      elements: children
    }
  }
  componentDidMount() {
    if (this.state.category === 'all') {
      this.setState({elements: children});
    } else {
      this.setState({elements: children});
    }
  }

  handleOnCategoryClick(e) {

  }

  render() {
    var childElements = this.state.elements.map(function(element, key){
    return (
          <div className="element col-sm-3" key={key}>
              <span className="category">{element.category}</span>
              <span className="service">{element.service}</span>
              <span className="price">${element.cost}</span>
          </div>
      );
    });

    return(
      <div className="prices">
          <ul className="filter">
            <li>All</li>
            <li>Threading</li>
            <li>Waxing</li>
            <li>Facials</li>
          </ul>
        <div className="grid">
          <Masonry
                className={'price-grid'}
                elementType={'div'}
                options={masonryOptions}
                style={masonryStyles}
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}>
                {childElements}
            </Masonry>
        </div>
      </div>
    );
  }
}

export default Prices;
