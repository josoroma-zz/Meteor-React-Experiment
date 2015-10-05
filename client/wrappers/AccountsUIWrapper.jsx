// AccountsUIWrappe React Component - Represents a Wrapper that uses the
// Blaze UI component from the accounts-ui package.
AccountsUIWrapper = React.createClass({
  componentDidMount() {
    // Use Meteor Blaze to render login buttons.
    this.view = Blaze.render(
      Template.loginButtons,
      React.findDOMNode(this.refs.container)
    );
  },

  componentWillUnmount() {
    // Clean up Blaze view.
    Blaze.remove(this.view);
  },

  render() {
    // Just render a placeholder container that will be filled in.
    return <span ref="container" />;
  },
});
