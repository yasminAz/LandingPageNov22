// importScripts("https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js");
// importScripts("https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js");

importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

// import { getMessaging } from "firebase/messaging/sw";

firebase.initializeApp({
  apiKey: "AIzaSyBlQKDh6sFqBhCBkvBpeuDvbiIJ8mux3oU",
  authDomain: "laravel-firbase22.firebaseapp.com",
  projectId: "laravel-firbase22",
  storageBucket: "laravel-firbase22.appspot.com",
  messagingSenderId: "944849382948",
  appId: "1:944849382948:web:8d1a3e549833a7898b72b1",
  measurementId: "G-Z8XFTGKMDK",
});

const messaging = firebase.messaging();
// const messaging = getMessaging(firebaseApp);

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/TF-logo.png",
  };
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
