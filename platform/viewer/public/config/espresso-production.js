
window.config = {
  routerBasename: '/',
  enableEspressoMedical: true,
  showStudyList: false,
  servers: {
    // This is an array, but we'll only use the first entry for now
    dicomWeb: [],
  },
  // This is an array, but we'll only use the first entry for now
  oidc: [
    {
      // ~ REQUIRED

      authority: 'https://www.espressomedical.com',
      // Authorization Server URL
      metadata: {
        authorization_endpoint: 'https://www.espressomedical.com/oauth2/authorize',
        token_endpoint: 'https://www.espressomedical.com/oauth2/access_token',
      },

      client_id: '3b6dab94-4a96-4c4b-b7cf-51023938dbb2',
      redirect_uri: 'https://viewerlatest.espressomedical.com/callback', // `OHIFStandaloneViewer.js`
      // "Authorization Code Flow"
      // Resource: https://medium.com/@darutk/diagrams-of-all-the-openid-connect-flows-6968e3990660
      response_type: 'code',
      scope: 'openid', // email profile openid
      // ~ OPTIONAL
      post_logout_redirect_uri: '/logout-redirect.html',
    },
  ],
}
