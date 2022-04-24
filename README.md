When using an iPad as a Home Assistant dashboard it sometimes get's stuck on a white screen with the Home Assistant logo.
A refresh can fix this but requires a manual interaction. 

## Workarround
As a temporary workarround I created a solution that refreshes the page when it Home Assistant stops responding.
The solution loads Home Assistant in an iframe and refreshes the iframe when it has not received any messages for x seconds.
In Home Assistant itself a javascript file is loaded to send the messages to the iframe.

### Setup
Download the dashboard.html and dashboard.js files. Change the iframe src url in dashboard.html to the url of your dashboard.
Upload the dashboard.html and dashboard.js to the www folder in your config folder.
Then add the js file (/local/dashboard.js) as a new source in lovelace (http(s)://yourhadomain/config/lovelace/resources). 

Now navigate your iPad to http(s)://yourhadomain/local/dashboard.html.
I currently use the app Kiosk+ to have some more options. For example to go to the main dashboard after x seconds of inactivity.
