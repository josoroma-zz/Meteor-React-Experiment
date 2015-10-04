// Experience React Component - Represents a Single Experience Item.
Experience = React.createClass({
  propTypes: {
    // This component gets the experience to display through a React prop.
    // We can use propTypes to indicate it is required.
    experience: React.PropTypes.object.isRequired,
  },

  toggleChecked() {
    // Set the checked property to the opposite of its current value
    Experiences.update(this.props.experience._id, {
      $set: {
        checked: !this.props.experience.checked,
      },
    });
  },

  deleteThisExperience() {
    Experiences.remove(this.props.experience._id);
  },

  render() {
    // Give experiences a different className when they are checked off,
    // so that we can style them nicely in CSS
    const experienceClassName = this.props.experience.checked ? 'checked' : '';

    return (
      <li className={experienceClassName}>
        <button className="delete" onClick={this.deleteThisExperience} >
          &times;
        </button>

        <input
          type="checkbox"
          readOnly={true}
          checked={this.props.experience.checked}
          onClick={this.toggleChecked} />

        <span className="title">{this.props.experience.title}</span>
      </li>
    );
  }
});
