from flask import Flask, render_template ,request,jsonify
from profile import create_profile, login_system
from info import input_user_info, edit_user_info
import json
import qrcode
import pdfkit
import code128
import random

app = Flask(__name__ )

@app.route('/')
def hello_world():
    return jsonify(True), 201

@ app.route('/api/signup',methods=['POST'])
def signup():
    json_request = request.get_json()
    response=create_profile(json_request['profile'])
    return jsonify(response), 201

@ app.route('/api/login',methods=['POST'])
def login():
    json_request = request.get_json()
    response = login_system(json_request['profile'])
    return jsonify(response),201

@ app.route('/api/create_info',methods=["POST"])
def create_info():
    json_request = request.get_json()
    response = input_user_info(json_request['info'])
    data = json_request['info']
    company = data["company_name"]
    name = data["name"]
    contact = data["contact_no"]
    date_of_birth = data["birth_date"]
    function = data["designation"]
    code = random.randint(1000000,9999999)
    
    str0 = "ID: "+str(code)+"\nName: "+name+"\nCompany: "+company+"\nContact: "+str(contact)+"\nDate of Birth: "+date_of_birth+"\nDesignation: "+function
    qrcode.make(str0).save("qr.jpg")
    
    code128.image(code).save("bar.png")
    
    
    html= r"""<!doctype html><meta charset="utf-8"><link rel="stylesheet" href="card.css"><body><div class="face face-front" ><img src="front1.png"></div>
    <div id="infoi">
    <img src="qr.jpg" height="89.5" width="83" />
        <div style="margin-left: 1.3cm;margin-top: -0.6cm;">
            <br>
            <div style="font-size: 0.7em;margin-top: 5%;font-family: sans-serif;color: aliceblue;text-transform: uppercase;"><b>@fname</b></div><br>
        <div style="font-size: 0.7em;margin-top: -0.4cm;font-family: sans-serif;color: aliceblue;text-t ransform: capitalize;">@function</div>
        </div>
    </div>
     
    <div id="info">
        <br><div id = "org">@company</div>       
        <br><div style="font-size: 0.7em;margin-top: 0.9%;font-family: sans-serif;text-transform: uppercase;">@code</div>
        <br><div style="font-size: 0.7em;margin-top: -0.6%;font-family: sans-serif;text-transform: capitalize;">@date_of_birth</div>
        <br><div style="font-size: 0.7em;margin-top: -0.6%;font-family: sans-serif;text-transform: capitalize;">@Contact</div>
    </div>
    <div id="BARCODE"><img src="bar.PNG"  height="20" width="120"/></div>

</body>"""
    html = html.replace("@code",str(code))
    html = html.replace("@company",company)
    html = html.replace("@fname",name)
    html = html.replace("@function",function)
    html = html.replace("@date_of_birth",date_of_birth)
    html = html.replace("@Contact",str(contact))
    f= open("index.html","w")
    f.write(html)
    f.close()
    
    config = pdfkit.configuration(wkhtmltopdf='C:\\Program Files\\wkhtmltopdf\\bin\\wkhtmltopdf.exe')
    options = {'dpi': 365,'margin-top': '0in','margin-bottom': '0in','margin-right': '0in','margin-left': '0in','page-size': 'A8',"orientation": "Landscape",'disable-smart-shrinking': '','enable-local-file-access': None}
    op = "public/id"+ ".pdf"
    pdfkit.from_file('index.html', op,configuration=config , options = options)
    return jsonify(response),201

@ app.route('/api/edit_details',methods=["POST"])
def edit_info():
    json_request = request.get_json()
    response=edit_user_info(json_request['info'])
    data = json_request['info']
    company = data["company_name"]
    name = data["name"]
    contact = data["contact_no"]
    date_of_birth = data["birth_date"]
    function = data["designation"]
    code = random.randint(1000000,9999999)
    
    str0 = "ID: "+str(code)+"\nName: "+name+"\nCompany: "+company+"\nContact: "+str(contact)+"\nDate of Birth: "+date_of_birth+"\nDesignation: "+function
    qrcode.make(str0).save("qr.jpg")
    
    code128.image(code).save("bar.png")
    
    
    html= r"""<!doctype html><meta charset="utf-8"><link rel="stylesheet" href="card.css"><body><div class="face face-front" ><img src="front1.png"></div>
    <div id="infoi">
    <img src="qr.jpg" height="89.5" width="83" />
        <div style="margin-left: 1.3cm;margin-top: -0.6cm;">
            <br>
            <div style="font-size: 0.7em;margin-top: 5%;font-family: sans-serif;color: aliceblue;text-transform: uppercase;"><b>@fname</b></div><br>
        <div style="font-size: 0.7em;margin-top: -0.4cm;font-family: sans-serif;color: aliceblue;text-t ransform: capitalize;">@function</div>
        </div>
    </div>
     
    <div id="info">
        <br><div id = "org">@company</div>       
        <br><div style="font-size: 0.7em;margin-top: 0.9%;font-family: sans-serif;text-transform: uppercase;">@code</div>
        <br><div style="font-size: 0.7em;margin-top: -0.6%;font-family: sans-serif;text-transform: capitalize;">@date_of_birth</div>
        <br><div style="font-size: 0.7em;margin-top: -0.6%;font-family: sans-serif;text-transform: capitalize;">@Contact</div>
    </div>
    <div id="BARCODE"><img src="bar.PNG"  height="20" width="120"/></div>

</body>"""
    html = html.replace("@code",str(code))
    html = html.replace("@company",company)
    html = html.replace("@fname",name)
    html = html.replace("@function",function)
    html = html.replace("@date_of_birth",date_of_birth)
    html = html.replace("@Contact",str(contact))
    f= open("index.html","w")
    f.write(html)
    f.close()
    
    config = pdfkit.configuration(wkhtmltopdf='C:\\Program Files\\wkhtmltopdf\\bin\\wkhtmltopdf.exe')
    options = {'dpi': 365,'margin-top': '0in','margin-bottom': '0in','margin-right': '0in','margin-left': '0in','page-size': 'A8',"orientation": "Landscape",'disable-smart-shrinking': '','enable-local-file-access': None}
    op = "public/id"+ ".pdf"
    pdfkit.from_file('index.html', op,configuration=config , options = options)
    return jsonify(response), 201


app.run(host="0.0.0.0",port=5000)
