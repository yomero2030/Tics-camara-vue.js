# pwa-example

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

ejecutarlo en un cmd

curl -X POST -H "Authorization: key=AAAAjxS-IB0:APA91bHF36bmW_DDzD37e9mXF5ZhJtf6iCtbDj9FFF7Wfi5vbS98T2fHDQzMxG9r7e6tqCpq_vtEqbR9bGY_xgJVeW2o4AkuhpDk0qUMFCKJXCueofv3slFhNKSNJtZJgfC8Pt7LcEAY" -H "Content-Type: application/json" -d '{
  "to": "cXQdR8JnCsk:APA91bEgBgXX4wSpFnCxRDJ2zggYEI0kN8hSuJSOuWXZVrnhR2aFe-AyCEEtUdIZwjxTon8Tfw_ZaNsjd2YgviSWhhXn_ho533nQhUmOI3vtI4-nuvcarOJdwXUQGE09CSPi8mwWZq4A",
  "notification": {
    "title": "FCM Message",
    "body": "This is an FCM Message to vue",
    "icon": "./img/icons/android-chrome-192x192.png"
  }
}' https://fcm.googleapis.com/fcm/send
