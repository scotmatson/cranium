from flask import Flask, render_template, request, redirect, url_for, session
from functools import wraps
from models import db, User
from datetime import datetime
import json
import os

app = Flask(__name__)
app.secret_key = os.urandom(24)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://postgres:mysecretpassword@172.17.0.2/opencv'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

def login_required(f):
    '''
    A decorator function that restricts site access
    to unauthorized parties.
    '''
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'logged_in' not in session or session['logged_in'] is False:
            return redirect(url_for('login'))
        return f(*args, **kwargs)
    return decorated_function

@app.route('/', methods=['GET'])
@login_required
def index():
    '''
    The primary user interface for carrying out
    activities once they have been logged in to 
    their account.
    '''
    return render_template('index.jinja2')

@app.route('/login', methods=['GET', 'POST'])
def login():
    '''
    A view for entering authorization credentials to access
    a user account. New users will have the option to
    create a new account.
    '''
    if request.method == 'GET':
        return render_template('login.jinja2')
    elif request.method == 'POST':
        session['logged_in'] = True
        user = request.form['username']
        return redirect(url_for('index', user=user))

@app.route('/register')
def register():
    '''
    A standard account registration view.
    '''
    return render_template('register.jinja2')

@app.route('/confirmation', methods=['POST'])
def confirmation():
    '''
    A confirmation view to notify a newly registered user the
    outcome of their new account registration. 
    '''
    new_user = User(
        request.form['username'],
        request.form['first-name'],
        request.form['last-name'],
        request.form['password'],
        datetime.utcnow(),
        request.environ['REMOTE_ADDR']
    )
    db.session.add(new_user)
    db.session.commit()
    return render_template('confirmation.jinja2')

@app.route('/admin')
def admin():
    '''
    An administrative view reserved for authorized users.
    Provides heightened level of access for viewing
    and interacting with the postgresql database.
    '''
    users = list()
    for user in User.query.all():
        users.append({
            "uid": user.uid,
            "username": user.username,
            "firstname": user.firstname,
            "lastname": user.lastname,
            "lastlogin": str(user.lastlogin),
            "ip": user.ip})
    return render_template('admin.jinja2', users=json.dumps(users))

@app.route('/log_out')
def log_out():
    '''
    Allows user to explicitly log out of a session.
    '''
    session['logged_in'] = False
    return redirect(url_for('login'))

################################################################################
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)