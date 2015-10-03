// App React Component - Represents the APP.
App = React.createClass({
  getExperiences() {
    return [
      { _id: 1, text: "This is experience 1" },
      { _id: 2, text: "This is experience 2" },
      { _id: 3, text: "This is experience 3" }
    ];
  },

  renderExperiences() {
    return this.getExperiences().map((experience) => {
      return <Experience key={experience._id} experience={experience} />;
    });
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>

        <ul>
          {this.renderExperiences()}
        </ul>
      </div>
    );
  }
});
