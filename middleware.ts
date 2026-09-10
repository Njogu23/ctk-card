import { NextRequest, NextResponse } from 'next/server'

const ROOT_DOMAIN = 'cometravelkenya.com'
const HOME_SLUG = 'card' // where the bare vercel.app root should land

export function middleware(req: NextRequest) {
  const hostname = req.headers.get('host') || ''
  const { pathname, search } = req.nextUrl

  const isSubdomain =
    hostname.endsWith(`.${ROOT_DOMAIN}`) && hostname !== `www.${ROOT_DOMAIN}`

  // Case 1: already on a client subdomain → rewrite internally to /[slug]
  if (isSubdomain) {
    const slug = hostname.replace(`.${ROOT_DOMAIN}`, '')
    const url = req.nextUrl.clone()
    url.pathname = `/${slug}${pathname === '/' ? '' : pathname}`
    return NextResponse.rewrite(url)
  }

  // Case 2: old ctk-card.vercel.app links → 301 to a subdomain
  const isVercelDomain = hostname.endsWith('.vercel.app')
  if (isVercelDomain) {
    const segments = pathname.split('/').filter(Boolean)

    // No slug at all → send root traffic to the designated home subdomain
    const slug = segments[0] ?? HOME_SLUG
    const rest = segments.length ? segments.slice(1) : []

    const url = req.nextUrl.clone()
    url.hostname = `${slug}.${ROOT_DOMAIN}`
    url.pathname = rest.length ? `/${rest.join('/')}` : ''
    url.search = search
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|.*\\..*).*)'],
}