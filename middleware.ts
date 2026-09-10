import { NextRequest, NextResponse } from 'next/server'

const ROOT_DOMAIN = 'cometravelkenya.com'
const HOME_SLUG = 'card' // app's own base/home subdomain — not a client slug

export function middleware(req: NextRequest) {
  const hostname = req.headers.get('host') || ''
  const { pathname, search } = req.nextUrl

  const isSubdomain =
    hostname.endsWith(`.${ROOT_DOMAIN}`) && hostname !== `www.${ROOT_DOMAIN}`

  // Case 1: already on a *.cometravelkenya.com subdomain
  if (isSubdomain) {
    const slug = hostname.slice(0, -(ROOT_DOMAIN.length + 1))

    // "card" is the app's own home domain, not a client slug — pass through
    if (slug === HOME_SLUG) {
      return NextResponse.next()
    }

    // Otherwise treat the subdomain as a slug and rewrite internally,
    // preserving any additional path segments and the query string.
    const url = req.nextUrl.clone()
    url.pathname = `/${slug}${pathname === '/' ? '' : pathname}`
    return NextResponse.rewrite(url)
  }

  // Case 2: legacy ctk-card.vercel.app links → 301 to a subdomain
  const isVercelDomain = hostname.endsWith('.vercel.app')
  if (isVercelDomain) {
    const segments = pathname.split('/').filter(Boolean)
    const url = req.nextUrl.clone()

    if (segments.length === 0) {
      // Bare root → the app's own home domain, not a generic slug
      url.hostname = `${HOME_SLUG}.${ROOT_DOMAIN}`
      url.pathname = '/'
    } else {
      // First path segment is the slug → redirect to its subdomain
      const [slug, ...rest] = segments
      url.hostname = `${slug}.${ROOT_DOMAIN}`
      url.pathname = rest.length ? `/${rest.join('/')}` : '/'
    }

    url.search = search
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|.*\\..*).*)'],
}