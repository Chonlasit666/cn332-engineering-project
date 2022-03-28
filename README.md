# testcn332-engineering-project

# Running the Code Backend(Django)

`CN332project` Backend(Django) use restframework rest_auth and django-all-auth

# Step1 install requirements package and migrate model
```
cd cn332project
pip install -r requirements.txt
python manage.py migrate
```
# Step2 createsuperuser 
```
python manage.py createsuperuser
```

# Step3 Setup sites for google-auth

```
python manage.py runserver
```
then login as admin http://127.0.0.1:8000/admin/

Add "Sites" 


add "Social applications"


go to http://127.0.0.1:8000/rest-auth/google/ 



if you have same as follow image you good to go!

# Frontend

install requirements package
```
cd react_auth	
npm i react-google-login
npm i axios

```
Run this react!

```
npm start
```
`
if you get some problem with react-script 
`

```
npm install react-scripts --save
```

then try `npm start`


# use with @dome.tu.ac.th only!


last go check http://localhost:8000/admin/ for "Social accounts"



if you have same as follow image you good to go!

