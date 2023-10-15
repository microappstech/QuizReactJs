// eventBus.js
const listeners = {};

const subscribe = (eventName, callback) => {
  if (!listeners[eventName]) {
    listeners[eventName] = [];
  }
  listeners[eventName].push(callback);
};

const publish = (eventName, data) => {
    console.log("data in listner",data)
  if (listeners[eventName]) {
    listeners[eventName].forEach(callback => {
      callback(data);
    });
  }
};

export { subscribe, publish };
