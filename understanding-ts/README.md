# Typescript useful info
Some useful info here

## Installing TS
`npm install -g typescript`

## Real time site deployments
lite server, runs webserver on localhost:3000
Starts by issuing: `npm start`

## Generating JS files
* Single file: `tsc filename.ts`
* Watch mode on single file (updates js files in real time) `tsc -w filename.ts`
* For the entire project: (setup: inside project folder run `tsc --init`), then, just run `tsc`
* Watch mode on entire project: `tsc -w`