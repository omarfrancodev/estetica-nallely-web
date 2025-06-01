// src/middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Tu URL de health-check
const HEALTH_CHECK_URL = process.env.HEALTH_CHECK_URL

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    // 1. Excluir /maintenance, assets y API:
    if (
        pathname === '/maintenance' ||            // deja pasar tu propia página
        pathname.startsWith('/_next/') ||          // bundles JS/CSS
        pathname.startsWith('/static/') ||         // (si usas /static)
        pathname.endsWith('.js') ||                // cualquier .js
        pathname.endsWith('.css') ||               // cualquier .css
        pathname.endsWith('.map') ||               // sourcemaps
        pathname === '/favicon.ico' ||             // favicon
        pathname.startsWith('/api/')               // API routes
    ) {
        return NextResponse.next()
    }

    // 2. Si no tienes health-check configurado, fuerza mantenimiento
    if (!HEALTH_CHECK_URL) {
        return NextResponse.rewrite(new URL('/maintenance', request.url))
    }

    // 3. Health-check real
    try {
        const res = await fetch(HEALTH_CHECK_URL)
        if (res.ok) {
            return NextResponse.next()
        }
    } catch {
        // silencia errores de fetch
    }

    // 4. Si falla, reescribe a /maintenance
    return NextResponse.rewrite(new URL('/maintenance', request.url))
}

export const config = {
    matcher: '/:path*',
}
