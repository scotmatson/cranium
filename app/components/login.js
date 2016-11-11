
//import Header from 'components/ui-Header';
//import Footer from 'components/ui-Footer';

var React = require('react');
var ReactDOM = require('react-dom');

require('../styles/normalize.css');
require('../process/sass/style.scss');

class Login extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <iframe width="560" height="315" src={this.props.video}  allowFullScreen></iframe>
            </div>
        );
    }
}
ReactDOM.render(<Login title="Facial Detection" video="https://www.youtube.com/embed/VnwyT6AAk0w" />, document.getElementById("react-login-container"));
