# Ansio: a CV creator
Create your resume online at ease with Ansio. Make, edit, share and export as pdf.

## Dependencies
- flask
- requests

Install dependencies by running
```
pipe3 install flask requests
```

## Usage
### Installation
Install the dependencies and clone the repository. If you are going to use this in a production setting, disable Flask's development mode and run the server by executing `python3 app.py`. Proxy traffic to Ansio's port 8003 with Apache2 or Nginx.

### Use case
By visiting the root of the web app, the user can create a new resume by filling in their information. There are different type of fields: normal text fields, fields that are used to increment a list of words (skills, hobbies, languages) and card fields that are groups of multiple text fields.

## Legal
This application is provided as is and might not have the required legal pages and/or documents for personal information collection required by your country. Especially, a setup consisting of just Ansio on your web server is not GDPT compliant as is.

Use ansio as a template for your application and do the changed required by the law before collecting user information.

![](https://i.imgur.com/oyTX7pg.png)

![](https://i.imgur.com/4vkskQr.png)
