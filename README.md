# testcn332-engineering-project

## Running the Code Backend(Django)

`CN332project` Backend(Django) use restframework rest_auth and django-all-auth

## Step1 install requirements package and migrate model


```
cd cn332project
pip install -r requirements.txt
```
### change SITE_ID = 1 in cn332project/settings.py

![image](https://github.com/Chonlasit666/cn332-engineering-project/blob/main/image/siteid1.PNG)

### migrate your data
```
python manage.py migrate
```

## Step2 createsuperuser 
```
python manage.py createsuperuser
```

## Step3 Setup sites for google-auth

```
python manage.py runserver
```
then login as admin http://127.0.0.1:8000/admin/

## Add "Sites" 

![image](https://github.com/Chonlasit666/cn332-engineering-project/blob/main/image/1.PNG)

## add `localhost:8000`

![image](https://github.com/Chonlasit666/cn332-engineering-project/blob/main/image/2.PNG)

## Add "Social applications"

![image](https://github.com/Chonlasit666/cn332-engineering-project/blob/main/image/3.PNG)

```
name : django-google
```
```
Client ID : 814359987215-0bhsf7s2msapugffv3klrcv2sjg03avi.apps.googleusercontent.com
```
```
Client secret : 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

```

![image](https://github.com/Chonlasit666/cn332-engineering-project/blob/main/image/4.PNG)

### then back to change SITE_ID = 2 

![image](https://github.com/Chonlasit666/cn332-engineering-project/blob/main/image/siteid2.PNG)

## Go check rest_framework at http://127.0.0.1:8000/rest-auth/google/ 

![image](https://github.com/Chonlasit666/cn332-engineering-project/blob/main/image/5.PNG)

if you have same as follow image you good to go!

# Frontend

install requirements package
```
cd client
npm install

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

![image](/image/r1.PNG)

# use with @dome.tu.ac.th only!

![image](/image/r2.PNG)


last go check http://localhost:8000/admin/ for "Social accounts"

![image](https://github.com/Chonlasit666/cn332-engineering-project/blob/main/image/f1.PNG)

![image](https://github.com/Chonlasit666/cn332-engineering-project/blob/main/image/f2.PNG)


if you have same as follow image you good to go!

