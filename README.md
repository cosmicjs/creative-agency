# Creative Agency
![Creative Agency](https://cosmicjs.com/uploads/9653b580-dcf7-11e6-9289-fd387f08ca35-creative-agency.jpg)
###[View Demo](https://cosmicjs.com/apps/creative-agency/demo)
A website for a creative agency.  Includes team management, portfolio management and contact form (powered by MailGun).

1. [Log in to Cosmic JS](https://cosmicjs.com).
2. Create a Bucket.
3. Go to Your Bucket > Apps.
4. Install the [Creative Agency App](https://cosmicjs.com/apps/creative-agency).
5. Edit the MailChimp List URL Metafield to point to your MailChimp List. (see below)
6. Deploy your Email Capture App to the Cosmic App Server at Your Bucket > Web Hosting.

###Getting Started
```
git clone https://github.com/cosmicjs/creative-agency
cd creative-agency
yarn
```
####Start app
```
yarn start
```
####Start app connected to your Cosmic JS Bucket
```
COSMIC_BUCKET=your-bucket-slug yarn start
```
Open [http://localhost:3000](http://localhost:3000).
###Setting up MailGun
1. Go to MailGun and login to your account or setup a new account
2. Get your api key and domain
3. Add your api key and domain to your environment valiables, or hard code them into `app.js` (not advised)