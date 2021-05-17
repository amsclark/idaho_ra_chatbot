// determine whether current page is active
drupalpath = window.location.href.split('/').slice(3,5).join('/')
activepaths = ["topics/2477", "topics/2478", "topics/2782", "node/2265", "topics/2479", "node/2174", "node/1351"]

// if current page is active, set up the dialogflow messenger
if (activepaths.includes(drupalpath)) {

  info='<script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>'
  document.write(info)
 
  
  insertionpointplaced = !!document.getElementById('docassembleiframe')
  if (insertionpointplaced) {
    // if there is already an insertion point placed, we are going to remove it, and replace it with an empty div in the same location.
    placeholder = document.getElementById('docassembleiframe')
    replacement = document.createElement('div');
    replacement.id='docassembleiframe'
    placeholder.parentNode.replaceChild(replacement,placeholder);
  } else {
    // if no insertion point exists, we are going to create it, and prepend it as the first sibling to the first element with classname of "lib-item"
    docassembleiframe = document.createElement('div')
    docassembleiframe.id='docassembleiframe'
    document.getElementsByClassName("lib-item")[0].prepend(docassembleiframe)
  }
  const dfMessenger = document.querySelector('df-messenger');
  dfMessenger.addEventListener('df-chip-clicked', function(event) {
    // Which Docassemble interview gets loaded into the iframe is based on small variations in the text on the dialogflow chip.
    if (event.detail.query == "Finish My Form!") {
        //animals
        document.querySelectorAll('iframe').forEach(e => e.remove());
        var iframe = document.createElement('iframe');
        iframe.style.width = "100%";
        iframe.style.height = "1200px";
        iframe.src = "https://idaholegalaid.documate.org/interview?i=docassemble.playground2:animal.yml&reset=1";
        document.getElementById("docassembleiframe").appendChild(iframe);
        document.getElementsByTagName("df-messenger").item(0).shadowRoot.querySelector("#widgetIcon").click();
    }
    if (event.detail.query == "Complete My Form!") {
        //mail
        document.querySelectorAll('iframe').forEach(e => e.remove());
        var iframe = document.createElement('iframe');
        iframe.style.width = "100%";
        iframe.style.height = "1200px";
        iframe.src = "https://idaholegalaid.documate.org/interview?i=docassemble.playground2:mail.yml&reset=1";
        document.getElementById("docassembleiframe").appendChild(iframe);
        document.getElementsByTagName("df-messenger").item(0).shadowRoot.querySelector("#widgetIcon").click();
    }
    if (event.detail.query == "Finish the Form!") {
        //parking
        document.querySelectorAll('iframe').forEach(e => e.remove());
        var iframe = document.createElement('iframe');
        iframe.style.width = "100%";
        iframe.style.height = "1200px";
        iframe.src = "https://idaholegalaid.documate.org/interview?i=docassemble.playground2:parking.yml&reset=1";
        document.getElementById("docassembleiframe").appendChild(iframe);
        document.getElementsByTagName("df-messenger").item(0).shadowRoot.querySelector("#widgetIcon").click();
    }
    if (event.detail.query == "Complete the Form!") {
        //stairs
        document.querySelectorAll('iframe').forEach(e => e.remove());
        var iframe = document.createElement('iframe');
        iframe.style.width = "100%";
        iframe.style.height = "1200px";
        iframe.src = "https://idaholegalaid.documate.org/interview?i=docassemble.playground2:stairs.yml&reset=1";
        document.getElementById("docassembleiframe").appendChild(iframe);
        document.getElementsByTagName("df-messenger").item(0).shadowRoot.querySelector("#widgetIcon").click();
    }
    if (event.detail.query == "Finish My Documents!") {
        // moveout time
        document.querySelectorAll('iframe').forEach(e => e.remove());
        var iframe = document.createElement('iframe');
        iframe.style.width = "100%";
        iframe.style.height = "1200px";
        iframe.src = "https://idaholegalaid.documate.org/interview?i=docassemble.playground2:moveouttime.yml&reset=1";
        document.getElementById("docassembleiframe").appendChild(iframe);
        document.getElementsByTagName("df-messenger").item(0).shadowRoot.querySelector("#widgetIcon").click();
    }
    if (event.detail.query == "Complete My Documents!") {
        // lease violation
        document.querySelectorAll('iframe').forEach(e => e.remove());
        var iframe = document.createElement('iframe');
        iframe.style.width = "100%";
        iframe.style.height = "1200px";
        iframe.src = "https://idaholegalaid.documate.org/interview?i=docassemble.playground2:leaseviolation.yml&reset=1";
        document.getElementById("docassembleiframe").appendChild(iframe);
        document.getElementsByTagName("df-messenger").item(0).shadowRoot.querySelector("#widgetIcon").click();
    }
    if (event.detail.query == "Finish The Documents!") {
        //shutoffs and housing conditions
        document.querySelectorAll('iframe').forEach(e => e.remove());
        var iframe = document.createElement('iframe');
        iframe.style.width = "100%";
        iframe.style.height = "1200px";
        iframe.src = "https://idaholegalaid.documate.org/interview?i=docassemble.playground2:shutoffandconditions.yml&reset=1";
        document.getElementById("docassembleiframe").appendChild(iframe);
        document.getElementsByTagName("df-messenger").item(0).shadowRoot.querySelector("#widgetIcon").click();
    }
    if (event.detail.query == "Complete The Documents!") {
        // lease exit alternate apartment
        document.querySelectorAll('iframe').forEach(e => e.remove());
        var iframe = document.createElement('iframe');
        iframe.style.width = "100%";
        iframe.style.height = "1200px";
        iframe.src = "https://idaholegalaid.documate.org/interview?i=docassemble.playground2:leaseexitalternateapt.yml&reset=1";
        document.getElementById("docassembleiframe").appendChild(iframe);
        document.getElementsByTagName("df-messenger").item(0).shadowRoot.querySelector("#widgetIcon").click();
    }
    if (event.detail.query == "Ok, Let's Finish My Form!") {
        //caregiver 
        document.querySelectorAll('iframe').forEach(e => e.remove());
        var iframe = document.createElement('iframe');
        iframe.style.width = "100%";
        iframe.style.height = "1200px";
        iframe.src = "https://idaholegalaid.documate.org/interview?i=docassemble.playground2:caregiver.yml&reset=1";
        document.getElementById("docassembleiframe").appendChild(iframe);
        document.getElementsByTagName("df-messenger").item(0).shadowRoot.querySelector("#widgetIcon").click();
    }
    if (event.detail.query == "Ok, Let's Complete The Form!") {
        // communications
        document.querySelectorAll('iframe').forEach(e => e.remove());
        var iframe = document.createElement('iframe');
        iframe.style.width = "100%";
        iframe.style.height = "1200px";
        iframe.src = "https://idaholegalaid.documate.org/interview?i=docassemble.playground2:communication.yml&reset=1";
        document.getElementById("docassembleiframe").appendChild(iframe);
        document.getElementsByTagName("df-messenger").item(0).shadowRoot.querySelector("#widgetIcon").click();
    }
    if (event.detail.query == "Ok, Let's Finish the Form!") {
        // application denials
        document.querySelectorAll('iframe').forEach(e => e.remove());
        var iframe = document.createElement('iframe');
        iframe.style.width = "100%";
        iframe.style.height = "1200px";
        iframe.src = "https://idaholegalaid.documate.org/interview?i=docassemble.playground2:applicationdenials.yml&reset=1";
        document.getElementById("docassembleiframe").appendChild(iframe);
        document.getElementsByTagName("df-messenger").item(0).shadowRoot.querySelector("#widgetIcon").click();
    } 
    if (event.detail.query == "Ok, Finish My Form!") {
        // asthma
        document.querySelectorAll('iframe').forEach(e => e.remove());
        var iframe = document.createElement('iframe');
        iframe.style.width = "100%";
        iframe.style.height = "1200px";
        iframe.src = "https://idaholegalaid.documate.org/interview?i=docassemble.playground2:asthma.yml&reset=1";
        document.getElementById("docassembleiframe").appendChild(iframe);
        document.getElementsByTagName("df-messenger").item(0).shadowRoot.querySelector("#widgetIcon").click();
    }  
    if (event.detail.query == "Ok, Let's Complete My Form!") {
        // ramp modifications
        document.querySelectorAll('iframe').forEach(e => e.remove());
        var iframe = document.createElement('iframe');
        iframe.style.width = "100%";
        iframe.style.height = "1200px";
        iframe.src = "https://idaholegalaid.documate.org/interview?i=docassemble.playground2:rampmodifications.yml&reset=1";
        document.getElementById("docassembleiframe").appendChild(iframe);
        document.getElementsByTagName("df-messenger").item(0).shadowRoot.querySelector("#widgetIcon").click();
    }
    if (event.detail.query == "Start Over") {
        document.querySelectorAll('iframe').forEach(e => e.remove());
    }
  });
  
  function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  };

  window.addEventListener('dfMessengerLoaded', function(event) {
  if (isMobileDevice() === false) {
      //const target = document.querySelector("body > df-messenger").shadowRoot.querySelector("div > df-messenger-chat").shadowRoot
      const target = document.getElementsByTagName("df-messenger").item(0).shadowRoot.querySelector("div > df-messenger-chat").shadowRoot
      const newStyle = document.createElement('style')
      newStyle.innerHTML = 'div.chat-wrapper{width: 30vw !important;}';
      target.appendChild(newStyle);
    }
  if (isMobileDevice() === true) {
  document.getElementById('oarc-activate').remove();
  }
  });
}



