import { initBackend } from '../../../src/backend'
import Bridge from '../../../src/bridge'

const bridge = new Bridge({
  listen(fn) {
    window.addEventListener('message', evt => fn(evt.data));
  },
  send(data) {
    window.parent.postMessage(data, '*');
  }
})

initBackend(bridge)