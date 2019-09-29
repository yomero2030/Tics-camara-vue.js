importScripts('http://www.gstatic.com/firebasejs/*6.2.3/firebase-app.js');
importScripts('http://www.gstatic.com/firebasejs/*6.2.3/firebase-messaging.js');

firebase.initializeApp({
    'messagingSendGrid':'1051232963785'

});

const messaging  = firebase.messaging();
