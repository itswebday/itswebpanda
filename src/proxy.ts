import { NextRequest, NextResponse } from "next/server";

export const proxy = async (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith(process.env.NEXT_PUBLIC_WEBSTUDIO_BASE_PATH!)) {
    return NextResponse.next();
  }

  return NextResponse.next();
};

export default proxy;

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
