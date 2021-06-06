// determine whether current page is active
drupalpath = window.location.href.split('/').slice(3,5).join('/')
activepaths = ["topics/2477", "topics/2478", "topics/2782", "node/2265", "topics/2479", "node/2174", "node/1351"]



// if current page is active, set up the dialogflow messenger
if (activepaths.includes(drupalpath)) {

  //create the custom element class so that the document.createElement("df-messenger") will work.
  //class dfmessenger extends HTMLElement {
  //  constructor() {
  //    super();
  //  }
  //}
  //customElements.define('df-messenger', dfmessenger);
  
  // create the df-messenger element and set its attributes
  //var gem = document.createElement("df-messenger");
  //gem.setAttribute("intent", "WELCOME");
  //gem.setAttribute("chat-title", "Housing Reasonable Accomodation Chatbot");
  //gem.setAttribute("agent-id","e9b92b63-a89f-4458-bb09-04bf7ba6c663");
  //gem.setAttribute("language-code", "en");
  gem = document.getElementsByTagName("df-messenger")[0];
  gem.setAttribute("chat-icon", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4yLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRkZGRkZGO30NCjwvc3R5bGU+DQo8Zz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjksMzQuNUw0OC45LDIwLjJjLTAuNC0wLjMtMC45LTAuMy0xLjMsMEwyNy41LDM0LjVDMjcuMiwzNC43LDI3LDM1LDI3LDM1LjR2MzMuOWMwLDAuNCwwLjIsMC43LDAuNSwwLjkNCgkJbDIwLjEsMTQuNGMwLjIsMC4xLDAuNCwwLjIsMC43LDAuMnMwLjUtMC4xLDAuNy0wLjJMNjksNzAuMmMwLjMtMC4yLDAuNS0wLjYsMC41LTAuOVYzNS40QzY5LjQsMzUsNjkuMywzNC43LDY5LDM0LjV6IE0yOS4zLDM2LjgNCgkJbDguMSw0LjV2MjIuMWwtOC4xLDQuNVYzNi44eiBNNTguNCw0MC4xbC05LjUtNi42VjIzbDE3LjcsMTIuNkw1OC40LDQwLjF6IE00OC4yLDY5LjFsLTguOS02VjQxLjVsOC45LTYuMmw4LjksNi4ydjIxLjZMNDguMiw2OS4xDQoJCXogTTQ3LjUsMzMuNUwzOCw0MC4xbC04LjItNC41TDQ3LjUsMjNWMzMuNXogTTM4LDY0LjZsOS41LDYuNHYxMC44TDI5LjgsNjkuMUwzOCw2NC42eiBNNDguOSw3MWw5LjUtNi40bDguMiw0LjVMNDguOSw4MS44Vjcxeg0KCQkgTTU5LjEsNjMuNFY0MS4zbDguMS00LjV2MzEuMUw1OS4xLDYzLjR6IE0zNi45LDE2LjJjLTAuMi0wLjItMC4zLTAuNS0wLjMtMC45YzAtMC4zLDAuMS0wLjYsMC4zLTAuOGMwLjUtMC40LDEuMi0wLjQsMS43LDANCgkJYzAuMiwwLjIsMC4zLDAuNSwwLjMsMC44YzAsMC4zLTAuMSwwLjYtMC4zLDAuOWMtMC4yLDAuMi0wLjUsMC40LTAuOCwwLjRDMzcuNCwxNi41LDM3LjEsMTYuNCwzNi45LDE2LjJ6IE01Ny4xLDE0LjgNCgkJYzAtMC41LDAuNC0wLjksMC45LTAuOWgxLjN2LTEuM2MwLTAuNSwwLjQtMC45LDAuOS0wLjlzMC45LDAuNCwwLjksMC45djEuM2gxLjNjMC41LDAsMC45LDAuNCwwLjksMC45cy0wLjQsMC45LTAuOSwwLjloLTEuM1YxNw0KCQljMCwwLjUtMC40LDAuOS0wLjksMC45cy0wLjktMC40LTAuOS0wLjl2LTEuM0g1OEM1Ny41LDE1LjcsNTcuMSwxNS4zLDU3LjEsMTQuOHogTTIwLjMsNjMuMmMwLjIsMC4yLDAuNCwwLjUsMC40LDAuOA0KCQlzLTAuMSwwLjYtMC40LDAuOGMtMC4yLDAuMi0wLjUsMC4zLTAuOCwwLjNzLTAuNi0wLjEtMC44LTAuM3MtMC40LTAuNS0wLjQtMC44YzAtMC4zLDAuMS0wLjYsMC40LTAuOEMxOSw2Mi43LDE5LjgsNjIuNywyMC4zLDYzLjINCgkJeiBNMzQuNSw4NS4yYzAsMC41LTAuNCwwLjktMC45LDAuOWgtMS4zdjEuM2MwLDAuNS0wLjQsMC45LTAuOSwwLjlzLTAuOS0wLjQtMC45LTAuOXYtMS4zaC0xLjNjLTAuNSwwLTAuOS0wLjQtMC45LTAuOQ0KCQlzMC40LTAuOSwwLjktMC45aDEuM1Y4M2MwLTAuNSwwLjQtMC45LDAuOS0wLjlzMC45LDAuNCwwLjksMC45djEuM2gxLjNDMzQuMSw4NC4zLDM0LjUsODQuNywzNC41LDg1LjJ6IE02MS43LDg2LjUNCgkJYzAuMiwwLjIsMC4zLDAuNSwwLjMsMC44cy0wLjEsMC42LTAuMywwLjhjLTAuMiwwLjItMC41LDAuMy0wLjgsMC4zcy0wLjYtMC4xLTAuOC0wLjNjLTAuMi0wLjItMC4zLTAuNS0wLjMtMC44czAuMS0wLjYsMC4zLTAuOA0KCQlDNjAuNSw4Ni4xLDYxLjMsODYuMSw2MS43LDg2LjV6IE04MS41LDY2LjJjMCwwLjUtMC40LDAuOS0wLjksMC45aC0xLjN2MS4zYzAsMC41LTAuNCwwLjktMC45LDAuOXMtMC45LTAuNC0wLjktMC45di0xLjNoLTEuMw0KCQljLTAuNSwwLTAuOS0wLjQtMC45LTAuOXMwLjQtMC45LDAuOS0wLjloMS4zVjY0YzAtMC41LDAuNC0wLjksMC45LTAuOXMwLjksMC40LDAuOSwwLjl2MS4zaDEuM0M4MS4xLDY1LjMsODEuNSw2NS43LDgxLjUsNjYuMnoiLz4NCjwvZz4NCjwvc3ZnPg0K");
  
  // get the page's <body> element and append the df-messenger element to it.
  var mybody = document.getElementsByTagName("body")[0];
  mybody.appendChild(gem);
  
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



