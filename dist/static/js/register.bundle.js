webpackJsonp([4],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var ReactDom = __webpack_require__(34);
	__webpack_require__(172);

	class Register extends React.Component {
	    constructor(props) {
	        super(props);

	        this.state = {
	            username: '',
	            firstName: '',
	            lastName: '',
	            password: ''
	        };

	        this.handleUsernameChange = this.handleUsernameChange.bind(this);
	        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
	        this.handleLastNameChange = this.handleLastNameChange.bind(this);
	        this.handlePasswordChange = this.handlePasswordChange.bind(this);
	        this.handleSubmit = this.handleSubmit.bind(this);
	    }

	    handleUsernameChange(event) {
	        this.setState({ username: event.target.value });
	    }
	    handleFirstNameChange(event) {
	        this.setState({ firstName: event.target.value });
	    }
	    handleLastNameChange(event) {
	        this.setState({ lastName: event.target.value });
	    }
	    handlePasswordChange(event) {
	        this.setState({ password: event.target.value });
	    }

	    handleSubmit(event) {/* Validation */}

	    render() {
	        return React.createElement(
	            'div',
	            { className: 'form-page__wrapper' },
	            React.createElement(
	                'div',
	                { className: 'form-page__form-wrapper' },
	                React.createElement(
	                    'div',
	                    { className: 'form-page__form-header' },
	                    React.createElement(
	                        'h2',
	                        { className: 'form-page__form-heading' },
	                        'Register'
	                    )
	                ),
	                React.createElement(
	                    'form',
	                    { action: 'confirmation', method: 'POST', id: 'registration-form', onSubmit: this.handleSubmit },
	                    React.createElement(
	                        'div',
	                        { className: 'form__field-wrapper' },
	                        React.createElement(
	                            'label',
	                            { className: 'form__field-label', htmlFor: 'username' },
	                            'Username'
	                        ),
	                        React.createElement('input', { className: 'form__field-input',
	                            input: true, type: 'text',
	                            value: this.state.username,
	                            name: 'username',
	                            id: 'username',
	                            onChange: this.handleUsernameChange })
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: 'form__field-wrapper' },
	                        React.createElement(
	                            'label',
	                            { className: 'form__field-label', htmlFor: 'first-name' },
	                            'First Name'
	                        ),
	                        React.createElement('input', { className: 'form__field-input',
	                            input: true, type: 'text',
	                            value: this.state.firstName,
	                            name: 'first-name',
	                            id: 'first-name',
	                            onChange: this.handleFirstNameChange })
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: 'form__field-wrapper' },
	                        React.createElement(
	                            'label',
	                            { className: 'form__field-label', htmlFor: 'username' },
	                            'Last Name'
	                        ),
	                        React.createElement('input', { className: 'form__field-input',
	                            input: true, type: 'text',
	                            value: this.state.lastName,
	                            name: 'last-name',
	                            id: 'last-name',
	                            onChange: this.handleLastNameChange })
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: 'form__field-wrapper' },
	                        React.createElement(
	                            'label',
	                            { className: 'form__field-label', htmlFor: 'password' },
	                            'Password'
	                        ),
	                        React.createElement('input', { className: 'form__field-input',
	                            input: true, type: 'text',
	                            value: this.state.password,
	                            name: 'password',
	                            id: 'password',
	                            onChange: this.handlePasswordChange })
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: 'form__submit-btn-wrapper' },
	                        React.createElement('input', { type: 'submit', value: 'Submit' })
	                    )
	                )
	            )
	        );
	    }
	}
	ReactDOM.render(React.createElement(Register, null), document.getElementById('react-register-container'));
	eactDOM.render(React.createElement(Register, null), document.getElementById('react-register-container'));

/***/ }
]);