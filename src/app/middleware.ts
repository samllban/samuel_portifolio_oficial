// app/middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // Todas as rotas não encontradas redirecionam para a página inicial
    if (!request.nextUrl.pathname.match(/\.(ico|png|jpg|jpeg|svg)$/)) {
        return NextResponse.rewrite(new URL('/', request.url))
    }
}

// Configuração para ignorar rotas estáticas
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}