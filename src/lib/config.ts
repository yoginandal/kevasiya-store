import Medusa from "@medusajs/js-sdk"

// Defaults to standard port for Medusa server
let medusaBackendUrl = "http://localhost:9000"

if (process.env.MEDUSA_BACKEND_URL) {
  medusaBackendUrl = process.env.MEDUSA_BACKEND_URL
} else if (process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL) {
  medusaBackendUrl = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL
}

export const sdk = new Medusa({
  baseUrl: medusaBackendUrl,
  debug: process.env.NODE_ENV === "development",
  publishableKey: process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY,
})
