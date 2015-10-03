// Experience React Component - Represents a Single Experience Item.
Experience = React.createClass({
  propTypes: {
    // This component gets the experience to display through a React prop.
    // We can use propTypes to indicate it is required.
    experience: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <li>{this.props.experience.title}</li>
    );
  }
});
