from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from urllib.parse import quote
from flask_login import login_manager, LoginManager

app = Flask(__name__)
app.secret_key = "IG@*HIU#G$GYGU&*ihiyig^*^iiu2ggfy&*%HIYG76YGUY"
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:%s@localhost/saledb?charset=utf8mb4" % quote("Admin@123")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = True
app.config["PAGE_SIZE"] = 4

db = SQLAlchemy(app)
login = LoginManager(app=app)
