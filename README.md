# reinvent-simulator

## Builder profile API

The NPC designer can import public profile details from an AWS Builder alias. Deploy the API Gateway and Node.js Lambda backend with AWS SAM:

```sh
sam build
sam deploy --guided
```

Set `BuilderSessionToken` during deployment. Then configure the static frontend before `index.html` runs:

```html
<script>window.BUILDER_PROFILE_API_URL = 'https://3sg5bwuvf5.execute-api.eu-west-1.amazonaws.com/profile';</script>
```

When frontend and API share an origin, the default `/profile` URL works without configuration.
