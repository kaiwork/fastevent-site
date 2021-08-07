// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  apiUrl: "https://heroku-fastevent.herokuapp.com/",
  firebaseConfig: {
    apiKey: "AIzaSyD2MEi7RDByvGqTuRnStCsLfKi8N_pwxLA",
    authDomain: "fastevent-fec5c.firebaseapp.com",
    projectId: "fastevent-fec5c",
    storageBucket: "fastevent-fec5c.appspot.com",
    messagingSenderId: "873060476035",
    appId: "1:873060476035:web:dc520336e540a4d87127b6"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
