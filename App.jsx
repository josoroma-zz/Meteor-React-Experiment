// App React Component - Represents the App.
App = React.createClass({

  // This mixin makes the getMeteorData method work.
  mixins: [ReactMeteorData],

  // Loads items from the Experiences collection and puts them on this.data.experiences
  getMeteorData() {
    return {
      experiences: Experiences.find({}).fetch()
    }
  },

  renderExperiences() {
    // Get experiences from this.data.experiences.
    return this.data.experiences.map((experience) => {
      return <Experience key={experience._id} experience={experience} />;
    });
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Experiences</h1>
        </header>

        <ul>
          {this.renderExperiences()}
        </ul>
      </div>
    );
  },
});
