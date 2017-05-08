var React = require('react');

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(id, username) {
    this.setState(function{
      var newState = {};
    });
  }
  render() {
    return (
      <div className="row">
        {!playerOneName && <PlayerInput 
          id='playerOne'
          label='Player One'
          onSubmit={this.handleSubmit }
        />}

        {!playerTowName && <PlayerInput />}
      </div>
    )
  }
}

module.exports = Battle;