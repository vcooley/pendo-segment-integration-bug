# Pendo-Segment Integration Bug
This repository contains an example app that reproduces a bug in the Pendo-Segment integration.

## Running the app
npm install
REACT_APP_SEGMENT_KEY=SEGMENT_WRITE_KEY_HERE npm start

## Reproducing the bug
In the application window's console run the following (example output commented in commands):
```
pendo.visitorId
// '_PENDO_T_pNc0nNHkwOB'
analytics.group(1)
pendo.visitorId
// '_PENDO_T_undefined'
analytics.identify({ example_trait: "test" })
pendo.visitorId
// '_PENDO_T_6b8dd04b-9d33-4cad-a753-0651b2f1031b'
```
