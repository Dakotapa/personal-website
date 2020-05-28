#flaskapp.wsgi
import sys
sys.path.insert(0, '/var/www/html/build')
sys.path.append('/home/ubuntu/flaskApp/personal-website/flask-react-app/api')

from api import app as application
