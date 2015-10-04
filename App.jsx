// App React Component - Represents the App.
App = React.createClass({

  // This mixin makes the getMeteorData method work.
  mixins: [ReactMeteorData],

  // We define a getInitialState method to initialize fields or things.
  getInitialState() {
    return {
      hideCompleted: false,
    };
  },

  // Loads items from the Experiences collection and puts them on
  // this.data.experiences and filter out completed experiences when
  // this.state.hideCompleted is true.
  getMeteorData() {
    let query = {};

    if (this.state.hideCompleted) {
      // If hide completed is checked, filter experiences
      query = {checked: {$ne: true}};
    }

    return {
      experiences: Experiences.find(query, {sort: {createdAt: -1}}).fetch(),
      incompleteCount: Experiences.find({checked: {$ne: true}}).count(),
    };
  },

  renderExperiences() {
    // Get experiences from this.data.experiences.
    return this.data.experiences.map((experience) => {
      return <Experience key={experience._id} experience={experience} />;
    });
  },

  // A handleSubmit method to our App component.
  // In React we handle DOM events by directly referencing a method on the
  // component. Here we can reference elements from the component by giving
  // them a ref property and using React.findDOMNode.
  handleSubmit(event) {
    event.preventDefault();

    // Find the title field via the React ref.
    var title = React.findDOMNode(this.refs.titleInput).value.trim();

    // We add an item to the experiences collection.
    // We can assign any properties to the experience object, such as the time
    // created, since we don't ever have to define a schema for the collection.
    Experiences.insert({
      title: title,
      createdAt: new Date(),
    });

    // Clear form.
    React.findDOMNode(this.refs.titleInput).value = '';
  },

  // An event handler that updates this.state by calling this.setState, which
  // will update the state property asynchronously and then cause the
  // component to re-render.
  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted,
    });
  },

  // Use React's Component State to store temporary information that is only
  // used on the client.
  render() {
    return (
      <div className="container">
        <header>
          <h1>Experiences ({this.data.incompleteCount})</h1>

          <label className="hide-completed">
            <input
              type="checkbox"
              readOnly={true}
              checked={this.state.hideCompleted}
              onClick={this.toggleHideCompleted} />
            Hide Completed Experiences
          </label>

          <form className="new-experience" onSubmit={this.handleSubmit} >
            <input
              type="text"
              ref="titleInput"
              placeholder="Type to add new experiences" />
          </form>
        </header>

        <ul>
          {this.renderExperiences()}
        </ul>
      </div>
    );
  },
});
