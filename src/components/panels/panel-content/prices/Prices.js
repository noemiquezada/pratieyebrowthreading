import React, { Component } from 'react';
import './Prices.css';

var children = [
    {category: 'threading', service: 'eyebrows', cost: 8},
    {category: 'threading', service: 'lip', cost: 4},
    {category: 'threading', service: 'chin', cost: 5},
    {category: 'threading', service: 'side', cost: 6},
    {category: 'threading', service: 'cheek', cost: 10},
    {category: 'waxing', service: 'under arms', cost: 10},
    {category: 'waxing', service: 'eyebrow + lips', cost: 10},
    {category: 'waxing', service: 'half arms', cost: 10},
    {category: 'waxing', service: 'full arms', cost: 30},
    {category: 'waxing', service: 'breast/belly', cost: 10},
    {category: 'facials', service: 'european facial', cost: 50},
    {category: 'facials', service: 'mini facial', cost: 25},
]

class Prices extends Component {
  constructor(props) {
    super(props);

    this.handleOnCategoryClick = this.handleOnCategoryClick.bind(this);
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
    var categoryElement = e.target;
    if (categoryElement) {
      var category = categoryElement.getAttribute('data-category');
      if (category === 'all') {
        this.setState({elements: children});
      } else {
        var filtered = children.filter(function(item) {
          return item.category === category
          this.setState({category: category})
        });

        this.setState({category: category, elements: filtered});
      }
    }
  }

  render() {
    var childElements = this.state.elements.map(function(element, key){
    return (
          <div className="grid-item" key={key}>
              <span className="category">{element.category}</span>
              <span className="service">{element.service}</span>
              <span className="price">${element.cost}</span>
          </div>
      );
    });

    return(
      <div className="prices">
          <ul className="filter">
            <li data-category="all" className={this.state.category === 'all' ? 'active' : ''}  onClick={this.handleOnCategoryClick}>All</li>
            <li data-category="threading" className={this.state.category === 'threading' ? 'active' : ''} onClick={this.handleOnCategoryClick}>Threading</li>
            <li data-category="waxing" className={this.state.category === 'waxing' ? 'active' : ''} onClick={this.handleOnCategoryClick}>Waxing</li>
            <li data-category="facials" className={this.state.category === 'facials' ? 'active' : ''} onClick={this.handleOnCategoryClick}>Facials</li>
          </ul>
        <div className="grid">
          {childElements}
        </div>
      </div>
    );
  }
}

export default Prices;
