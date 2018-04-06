// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBDOv1rVGP2-6aX3__7oCCSmVldHv9s3eU',
    authDomain: 'funchat-tdt.firebaseapp.com',
    databaseURL: 'https://funchat-tdt.firebaseio.com',
    projectId: 'funchat-tdt',
    storageBucket: 'funchat-tdt.appspot.com',
    messagingSenderId: '497938592442'
  }
};
