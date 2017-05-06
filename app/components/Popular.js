var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');

function SelectLanguage (props) {
  var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className="languages">
      {languages.map(function(lang) {
      return (
        <li 
          key={lang} 
          style={lang === props.selectedLanguage ? {color: 'red'}: null}
          onClick={props.onSelect.bind(null, lang)}>
          {lang}
      </li>
      )
      })}
    </ul>
  )
}

function RepoGrid(props) {
  return (
    <ul className="popular-list">
      {props.repos.map(function(repo, index){
        <li key={repo.name} className="popular-item">
          <div className="popular-rank">#{index + 1}</div>
          <ul className='space-list-items'>
        </li>
      })}
    </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

class Popular extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedLanguage: 'All',
      repos: null
    };
    this.updateLanaguage = this.updateLangauge.bind(this);
  }

  componentDidMount() {
    //AJAX requests
    this.updateLangauge(this.state.selectedLanguage)
  }


  updateLanaguage(lang) {
    this.setState(function() {
      return {
        selectedLanguage: lang,
        repos: null
      }
    });

    api.fetchPopularRepos(lang)
    .then(function(){
      this.setState(function() {
        return {
          repos: repos
        }
      }.bind(this))
    })
  }
  render() {
    return (
      <div>
        <SelectLanguage selectedLanguage={this.state.selectedLanguage} 
          onSelect={this.updateLanaguage} />
          <RepoGrid repos={this.state.repos} />
      </div>
    )
  }
}

module.exports = Popular;