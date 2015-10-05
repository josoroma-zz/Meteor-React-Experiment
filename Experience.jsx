// Experience React Component - Represents a Single Experience Item.
Experience = React.createClass({
  propTypes: {
    // This component gets the experience to display through a React prop.
    experience: React.PropTypes.object.isRequired,

    // The button should show up only if the currently logged in user owns
    // this Experience.
    showPrivateButton: React.PropTypes.bool.isRequired,
  },

  toggleChecked() {
    // Set the checked property to the opposite of its current value
    Meteor.call(
      'setChecked',
      this.props.experience._id,
      !this.props.experience.checked
    );
  },

  deleteThisExperience() {
    Meteor.call('removeExperience', this.props.experience._id);
  },

  // Event handler called by the button with the class: "toggle-private".
  togglePrivate() {
    Meteor.call(
      'setPrivate',
      this.props.experience._id,
      !this.props.experience.private,
    );
  },

  render() {
    // Give experiences a different className when they are checked off,
    // so that we can style them nicely in CSS.
    // Add "checked" and/or "private" to the className when needed.
    const experienceClassName = (
        this.props.experience.checked ? 'checked' : ''
      ) +
      ' ' +
      (
        this.props.experience.private ? 'private' : ''
      );

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

        { this.props.showPrivateButton ? (
          <button className="toggle-private" onClick={this.togglePrivate}>
            { this.props.experience.private ? 'Private' : 'Public' }
          </button>
        ) : ''}

        <span className="title">
          <strong>{this.props.experience.username}</strong>: {this.props.experience.title}
        </span>
      </li>
    );
  }
});
