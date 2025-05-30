"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import React from "react"

/**
 * Use this component to create a Next.js `<Link />` that persists the current country code in the url,
 * without having to explicitly pass it as a prop.
 */
const LocalizedClientLink = ({
  children,
  href,
  ...props
}: {
  children?: React.ReactNode
  href: string
  className?: string
  onClick?: () => void
  passHref?: true
  [x: string]: any
}) => {
  const params = useParams()
  // Ensure countryCode is a string. If not, params.countryCode might be undefined or not a string.
  const countryCode =
    typeof params.countryCode === "string" ? params.countryCode : null

  // If countryCode is not available (e.g., during certain build/lint steps or if route is not under a countryCode param),
  // we need a robust href. Fallback to the original href or handle as an error.
  // For the linter, the key is that the `href` passed to `Link` must be a string.
  const finalHref = countryCode ? `/${countryCode}${href}` : href

  // Optional: Log if countryCode is missing, as this might indicate an issue
  // if all links are expected to be localized.
  if (!countryCode) {
    console.warn(
      `LocalizedClientLink: countryCode is missing for href: ${href}. Using non-localized link: ${finalHref}. Params:`,
      params
    )
  }

  return (
    <Link href={finalHref} {...props}>
      {children}
    </Link>
  )
}

export default LocalizedClientLink
