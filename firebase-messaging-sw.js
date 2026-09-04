// Benetti's Kitchen — background push notification handler.
// This file must sit in the SAME folder as index.html on GitHub (the root
// of the repo), not inside a subfolder, so it can receive push events for
// the whole site.

importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyD6rUtMLvQm1y5e758Nr1M58kCrU_GN10Q",
  authDomain: "benettis-app.firebaseapp.com",
  databaseURL: "https://benettis-app-default-rtdb.firebaseio.com",
  projectId: "benettis-app",
  storageBucket: "benettis-app.firebasestorage.app",
  messagingSenderId: "680810751741",
  appId: "1:680810751741:web:1d1f38427158d154890094"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = (payload.notification && payload.notification.title) || "Benetti's Kitchen";
  const body = (payload.notification && payload.notification.body) || '';
  self.registration.showNotification(title, {
    body,
    tag: 'benettis-chat', // new messages replace the last notification instead of stacking endlessly
  });
});
