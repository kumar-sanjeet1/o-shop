// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
   firebase: {
    apiKey: 'AIzaSyB0ba0G84iImhG2T6vj9YcsrycG-jCOI4Y',
    authDomain: 'o-shop-fe0a0.firebaseapp.com',
    databaseURL: 'https://o-shop-fe0a0.firebaseio.com',
    projectId: 'o-shop-fe0a0',
    storageBucket: '',
    messagingSenderId: '960043262668'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
