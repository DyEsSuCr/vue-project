const privateKey = import.meta.env.VITE_API_SECRET
const publicKey = import.meta.env.VITE_API_PUBLIC

const signatureHash = async (timezone) => {
  const message = `${privateKey},${publicKey},${timezone}`
  const msgBuffer = new TextEncoder().encode(message)
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
  return hashHex
}

export default signatureHash