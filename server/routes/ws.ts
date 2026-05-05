import { prisma } from '../utils/prisma'

const timers = new WeakMap<object, NodeJS.Timeout>()

export default defineWebSocketHandler({
  open(peer) {
    const timer = setInterval(async () => {
      const count = await prisma.request.count()

      peer.send(JSON.stringify({
        type: 'requests-count',
        count
      }))
    }, 2000)

    timers.set(peer, timer)
  },

  close(peer) {
    const timer = timers.get(peer)

    if (timer) {
      clearInterval(timer)
      timers.delete(peer)
    }
  }
})