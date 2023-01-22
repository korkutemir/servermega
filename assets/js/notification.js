document.addEventListener('DOMContentLoaded', init, false)

function init() {
  if ('Notification' in window) {
    Notification.requestPermission(result =>  {
      if (result === 'granted') {
        console.log('Acess granted! :)')
        showServerTimeNotification()
      } else if (result === 'denied') {
        console.log('Access denied :(')
      } else {
        console.log('Request ignored :/')
      }
    })
  }

  function showServerTimeNotification() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => {
        setInterval(() => {
          fetch('http://192.168.1.166:8080/notification')
            .then(res => res.json())
            .then((response) => {
              const title = 'Server time'
              const options = {
                body: `Right now it's ${response.date}`,
              }
              registration.showNotification(title, options)
            })
        }, 1000)
      })
    }
  }
}