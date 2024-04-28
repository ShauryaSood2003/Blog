# Blog Application

[Blog website Link ↗️](https://shauryasoodblogsfullstack.netlify.app/)

## To run locally

> Front End
```
cd .\frontEnd
```
```
npm run dev
```
- In the config.ts file inside src folder update the **BackendUrl="your-backend-url"** to your backend url.
  
example:  BackendUrl="http://127.0.0.1:8787"

##

> Backend
```
cd .\backend
```
```
npm run dev
```
- In wrangler.toml file update them 
 **DATABASE_URL="your-cloud-pool-link"** 
**JWT_PASSWORD="your-jwt-password"**

- Also add a .env file with DATABASE_URL="your_prisma_url" //normal url not pooled
  
## To deploy backend on Cloudflare

```
cd .\backend
```
```
wrangler login
wrangler build
wrangler deploy
```
