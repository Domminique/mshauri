    # Configure GCP

curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install git
sudo npm install pm2 -g

Project in Action - [Jobify](https://www.jobify.live/)

Find the App Useful? [You can always buy me a coffee](paypal:imbugad@gmail.com)

#### Run The App Locally

```sh
npm run install-dependencies
```

- rename .env.temp to .env
- setup values for - MONGO_URL, JWT_SECRET, JWT_LIFETIME

```sh
npm start
```

- visit url http://localhost:3000/
