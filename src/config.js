const config = {
    appId: import.meta.env.VITE_META_APP_ID,
    appSecret: import.meta.env.VITE_META_APP_SECRET,
    apiVersion: 'v18.0',
    redirectUri: import.meta.env.VITE_REDIRECT_URI,
    scope: 'ads_read,ads_management,read_insights'
};

export default config;