// नोटिफिकेशन दिखाने के लिए सर्विस वर्कर को एक्टिवेट करना
self.addEventListener('push', function(event) {
  const options = {
    body: event.data ? event.data.text() : 'JEE 2027 Hub Update!',
    icon: 'logo.png', // आपके ऐप का लोगो
    badge: 'logo.png'
  };

  event.waitUntil(
    self.registration.showNotification('JEE 2027 Hub', options)
  );
});

// जब यूजर नोटिफिकेशन पर क्लिक करे
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/') // क्लिक करने पर ऐप खुलेगा
  );
});

