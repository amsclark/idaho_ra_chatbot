// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
const { Payload } = require("dialogflow-fulfillment");
const { Text } = require("dialogflow-fulfillment");
 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
  function welcome(agent) {
    agent.add(`Welcome to my agent!`);
  }
 
  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }
  
  
  
  function familyLawFormsHandler(agent) {
    const formName = agent.parameters.family_law_forms;
    agent.add(new Text({text: `It seems like you are looking for the legal form called "` + formName + `". We have some links to legal forms on our website. See if the link below helps: `, platform: 'PLATFORM_UNSPECIFIED'}));
    agent.add(new Text({text: formAddress(formName), platform: 'FACEBOOK'}));
    const payload = {
   	"richContent": [
          [
            {
              "icon": {
                "color": "#FF9800",
                "type": "chevron_right"
              },
              "type": "button",
              "link": formAddress(formName),
              "text": "Go to forms"
            }
          ]
  		]};
	agent.add(new Payload(agent.UNSPECIFIED, payload, {rawPayload: true, sendAsMessage: true}));
  }
  
  function housingFormsHandler(agent) {
    const formName = agent.parameters.housing_forms;
    agent.add(new Text({text: `It seems like you are looking for the legal form called "` + formName + `". We have some links to legal forms on our website. See if the link below helps: `, platform: 'PLATFORM_UNSPECIFIED'}));
    agent.add(new Text({text: formAddress(formName), platform: 'FACEBOOK'}));
    const payload = {
   	"richContent": [
          [
            {
              "icon": {
                "color": "#FF9800",
                "type": "chevron_right"
              },
              "type": "button",
              "link": formAddress(formName),
              "text": "Go to forms"
            }
          ]
  		]};
	agent.add(new Payload(agent.UNSPECIFIED, payload, {rawPayload: true, sendAsMessage: true}));
  }

  function guardianconservatorFormsHandler(agent) {
    const formName = agent.parameters.guardian_conservator_forms;
    agent.add(new Text({text: `It seems like you are looking for the legal form called "` + formName + `". We have some links to legal forms on our website. See if the link below helps: `, platform: 'PLATFORM_UNSPECIFIED'}));
    agent.add(new Text({text: formAddress(formName), platform: 'FACEBOOK'}));
    const payload = {
   	"richContent": [
          [
            {
              "icon": {
                "color": "#FF9800",
                "type": "chevron_right"
              },
              "type": "button",
              "link": formAddress(formName),
              "text": "Go to forms"
            }
          ]
  		]};
	agent.add(new Payload(agent.UNSPECIFIED, payload, {rawPayload: true, sendAsMessage: true}));
  }
  
  function formAddress(formName) {
    var addressList = {};
    addressList["Family Law Case Information Sheet"] = "https://www.idaholegalaid.org/node/2183/family-law-self-help-forms";
	addressList["Petition for Divorce"] = "https://www.idaholegalaid.org/node/2183/family-law-self-help-forms";
	addressList["Family Case Response"] = "https://www.idaholegalaid.org/node/2183/family-law-self-help-forms";
	addressList["Family Case Response and Counterclaim"] = "https://www.idaholegalaid.org/node/2183/family-law-self-help-forms";
	addressList["Inventory of Property and Debt"] = "https://www.idaholegalaid.org/node/2183/family-law-self-help-forms";
	addressList["Parenting Plan"] = "https://www.idaholegalaid.org/node/2183/family-law-self-help-forms";
	addressList["Child Support Worksheets"] = "https://www.idaholegalaid.org/node/2183/family-law-self-help-forms";
	addressList["Affidavit Verifying Income"] = "https://www.idaholegalaid.org/node/2183/family-law-self-help-forms";
	addressList["Motion for Temporary Orders"] = "https://www.idaholegalaid.org/node/2183/family-law-self-help-forms";
	addressList["Sworn Petition for a Protection Order"] = "https://www.idaholegalaid.org/node/2183/family-law-self-help-forms";
	addressList["Law Enforcement Service Information Sheet"] = "https://www.idaholegalaid.org/node/2183/family-law-self-help-forms";
	addressList["Application to Modify, Terminate, or Renew Protection Order"] = "https://www.idaholegalaid.org/node/2183/family-law-self-help-forms";
	addressList["Affidavit and Request for Registration of Foreign Protection Order"] = "https://www.idaholegalaid.org/node/2183/family-law-self-help-forms";
	addressList["Application for Registration of Child Custody Determination"] = "https://www.idaholegalaid.org/node/2183/family-law-self-help-forms";
	addressList["Three Day Notice to Pay Rent or Vacate"] = "https://www.idaholegalaid.org/node/2206/landlord-and-tenant-self-help-forms";
	addressList["Complaint for Eviction (Expedited Proceeding)"] = "https://www.idaholegalaid.org/node/2206/landlord-and-tenant-self-help-forms";
	addressList["Judgment for Eviction"] = "https://www.idaholegalaid.org/node/2206/landlord-and-tenant-self-help-forms";
	addressList["Writ of Restitution of Premises"] = "https://www.idaholegalaid.org/node/2206/landlord-and-tenant-self-help-forms";
	addressList["Notice for Repairs"] = "https://www.idaholegalaid.org/node/2206/landlord-and-tenant-self-help-forms";
	addressList["Complaint for Specific Performance"] = "https://www.idaholegalaid.org/node/2206/landlord-and-tenant-self-help-forms";
	addressList["Judgment on Complaint for Specific Performance"] = "https://www.idaholegalaid.org/node/2206/landlord-and-tenant-self-help-forms";
	addressList["Complaint for Eviction (Forcible Detainer)"] = "https://www.idaholegalaid.org/node/2206/landlord-and-tenant-self-help-forms";
	addressList["Judgment for Possession of Property"] = "https://www.idaholegalaid.org/node/2206/landlord-and-tenant-self-help-forms";
	addressList["Reasonable Accommodation Request"] = "https://www.idaholegalaid.org/node/2206/landlord-and-tenant-self-help-forms";
	addressList["Reasonable Modification Request"] = "https://www.idaholegalaid.org/node/2206/landlord-and-tenant-self-help-forms";
	addressList["Proof of Need Letter"] = "https://www.idaholegalaid.org/node/2206/landlord-and-tenant-self-help-forms";
	addressList["Petition for Appointment of a Guardian of a Minor"] = "https://www.idaholegalaid.org/node/2483/conservatorships-and-guardianships";
	addressList["Notice of Guardianship Petition and Hearing"] = "https://www.idaholegalaid.org/node/2483/conservatorships-and-guardianships";
	addressList["Consent to Appointment of Guardian"] = "https://www.idaholegalaid.org/node/2483/conservatorships-and-guardianships";
	addressList["Nomination by a Minor"] = "https://www.idaholegalaid.org/node/2483/conservatorships-and-guardianships";
	addressList["Acceptance of Appointment by Guardian"] = "https://www.idaholegalaid.org/node/2483/conservatorships-and-guardianships";
	addressList["Order Re Appointment of Attorney or Guardian ad Litem"] = "https://www.idaholegalaid.org/node/2483/conservatorships-and-guardianships";
	addressList["Judgment Appointing Guardian of Minor"] = "https://www.idaholegalaid.org/node/2483/conservatorships-and-guardianships";
	addressList["Letters of Guardianship"] = "https://www.idaholegalaid.org/node/2483/conservatorships-and-guardianships";
	addressList["Request for Hearing on Appointment of Temporary Guardianship of a Minor"] = "https://www.idaholegalaid.org/node/2483/conservatorships-and-guardianships";
	addressList["Request for Notice by Interested Person"] = "https://www.idaholegalaid.org/node/2483/conservatorships-and-guardianships";
	addressList["Petition for Termination of Guardianship"] = "https://www.idaholegalaid.org/node/2483/conservatorships-and-guardianships";
	addressList["Judgment Terminating Guardianship"] = "https://www.idaholegalaid.org/node/2483/conservatorships-and-guardianships";
	addressList["Guardian’s Annual Status Report for an Adult"] = "https://www.idaholegalaid.org/node/2483/conservatorships-and-guardianships";
	addressList["Guardian’s Proposed Care Plan"] = "https://www.idaholegalaid.org/node/2483/conservatorships-and-guardianships";
	addressList["Conservator’s Inventory and Financial Plan"] = "https://www.idaholegalaid.org/node/2483/conservatorships-and-guardianships";
	addressList["Conservator’s Accounting"] = "https://www.idaholegalaid.org/node/2483/conservatorships-and-guardianships";
	addressList["Conservator’s Accounting for Small Estates under $50,000"] = "https://www.idaholegalaid.org/node/2483/conservatorships-and-guardianships";
	addressList["Complaint about a Guardian or Conservator"] = "https://www.idaholegalaid.org/node/2483/conservatorships-and-guardianships";
    return addressList[formName];
  }
  
  
  // Run the proper function handler based on the matched Dialogflow intent name
  let intentMap = new Map();
  intentMap.set('Family_Law_Forms', familyLawFormsHandler);
  intentMap.set('Housing_Forms', housingFormsHandler);
  intentMap.set('Guardian_Conservator_Forms', guardianconservatorFormsHandler);
  agent.handleRequest(intentMap);
});
