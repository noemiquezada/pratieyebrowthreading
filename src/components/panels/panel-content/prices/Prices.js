import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './Prices.css';

var children = [
    {category: 'threading', service: 'lip', cost: 4},
    {category: 'threading', service: 'chin', cost: 5},
    {category: 'threading', service: 'side', cost: 6},
    {category: 'threading', service: 'eyebrows', cost: 8},
    {category: 'threading', service: 'cheek', cost: 10},
    {category: 'threading', service: 'forehead', cost: 5},
    {category: 'threading', service: 'half neck', cost: 5},
    {category: 'threading', service: 'full face', cost: 25},
    {category: 'threading', service: 'full neck', cost: 10},
    {category: 'threading', service: 'eyebrows + lip', cost: 10},
    {category: 'waxing', service: 'under arms', cost: 10},
    {category: 'waxing', service: 'stomach', cost: 20},
    {category: 'waxing', service: 'buttocks', cost: 15},
    {category: 'waxing', service: 'half legs', cost: 25},
    {category: 'waxing', service: 'full leg', cost: 40},
    {category: 'waxing', service: 'bikini side', cost: 10},
    {category: 'waxing', service: 'brazilian bikini', cost: 30},
    {category: 'waxing', service: 'full back', cost: 30},
    {category: 'waxing', service: 'full body', cost: 120},
    {category: 'waxing', service: 'full body + brazilian', cost: 150},
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
    var sorted = children.sort(function(a,b) {
      return a.cost - b.cost;
    });
    if (this.state.category === 'all') {
      this.setState({elements: sorted});
    } else {
      this.setState({elements: sorted});
    }
  }

  handleOnCategoryClick(e) {
    var categoryElement = e.target;
    if (categoryElement) {
      var category = categoryElement.getAttribute('data-category');
      if (category === 'all') {
        var sorted = children.sort(function(a,b) {
          return a.cost - b.cost;
        });
        this.setState({category: 'all', elements: sorted});
      } else {
        var filtered = children.filter(function(item) {
          return item.category === category
        });
        var sorted = filtered.sort(function(a,b) {
          return a.cost - b.cost;
        });
        this.setState({category: category});
        this.setState({category: category, elements: sorted});
      }
    }
  }
  render() {
    return(
      <div className="prices">
          <ul className="filter">
            <li data-category="all" className={this.state.category === 'all' ? 'active' : ''}  onClick={this.handleOnCategoryClick}>All</li>
            <li data-category="threading" className={this.state.category === 'threading' ? 'active' : ''} onClick={this.handleOnCategoryClick}>Threading</li>
            <li data-category="waxing" className={this.state.category === 'waxing' ? 'active' : ''} onClick={this.handleOnCategoryClick}>Waxing</li>
            <li data-category="facials" className={this.state.category === 'facials' ? 'active' : ''} onClick={this.handleOnCategoryClick}>Facials</li>
          </ul>
        <div className="grid">
          <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={true}
          transitionEnterTimeout={500}
          transitionLeave={false}>
          {this.state.elements.map(function(element, key){
            if (element.service === "full face") {
              var priceHtml = <span className="price">${element.cost}<span>&up</span></span>
            } else {
              var priceHtml = <span className="price">${element.cost}</span>;
            }
            return (
                <div className="grid-item" key={key}>
                    <p className="mobile-grid-item">
                      <span className="category">{element.category}</span>
                    <span className="inline">
                      <span className="service">{element.service}</span>
                      {priceHtml}
                    </span>
                    </p>
                    <span className="category">{element.category}</span>
                    <span className="service">{element.service}</span>
                    {priceHtml}
                </div>
            );
          })}
        </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default Prices;
