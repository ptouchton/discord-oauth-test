## Discord Auth 
A simple discord oauth test

## Execution

1. Generate a redirect url and credentials for your app [here](https://discord.com/developers/applications/)

- create a new app
- go to `OAuth2` -> `General` -> Add Redirect 
- go to `URL Generator` -> Select `identify` scope and select the redirect url -> Copy the generated url
- replace `YOUR_REDIRECT_URL` with your newly created url in `index.html`

2. Set up env
```
cp .env.sample .env
// add all environment variables
```

3. Start the server
```
npm run start
```

4. Visit the site at `http://localhost:port`
