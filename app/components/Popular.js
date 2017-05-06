var React = require('react');

class Popular extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedLanguage: 'All'
    };
    this.updateLanaguage = this.updateLangauge.bind(this);
  }

  updateLanaguage(lang) {
    this.setState(function() {
      return {
        selectedLanguage: lang
      }
    });
  }
  render() {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
      <div>Popular!
        <ul className='languages'>
          {languages.map(function(lang, index){
            return (
              <li 
                key={lang} 
                style={lang === this.state.selectedLanguage ? {color: 'red'}: null}
                onClick={this.updateLanaguage.bind(null, lang)}>
                {lang}
              </li>
            )
          }, this)}
        </ul>

      </div>
    )
  }
}

module.exports = Popular;