// App React Component - Represents the App.
App = React.createClass({

  // This mixin makes the getMeteorData method work.
  mixins: [ReactMeteorData],

  // Loads items from the Experiences collection and puts them on
  // this.data.experiences.
  getMeteorData() {
    return {
      // Sorting our experiences. We want to see the newest experiences first.
      experiences: Experiences.find({}, {sort: {createdAt: -1}}).fetch(),
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
    React.findDOMNode(this.refs.titleInput).value = "";
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Experiences</h1>

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
