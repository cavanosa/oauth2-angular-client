// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  authorize_uri: 'http://localhost:9000/oauth2/authorize?',
  client_id : 'client',
  redirect_uri: 'http://127.0.0.1:4200/authorized',
  scope: 'openid profile',
  response_type: 'code',
  response_mode: 'form_post',
  code_challenge_method: 'S256',
  code_challenge: 'meWMSrkRBnMbd5RRseIVwuFGFOU6xwHi0_LgQyCOd1A',
  code_verifier: 'vaJQvOcb8RfWoZWFvpSLAQjUywZx2VUiG6cAZpr7MV7',
  token_url: 'http://localhost:9000/oauth2/token',
  grant_type: 'authorization_code',
  resource_url: 'http://localhost:8080/resource/',
  logout_url: 'http://localhost:9000/logout',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
