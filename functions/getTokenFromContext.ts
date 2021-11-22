export default function getToken(ctx: any, cookieName: string): string {
    const cookies = ctx.req.headers.cookie;
    // return -1 if empty cookies or no token is present
    if (!cookies) return '-1';
    const isToken = cookies.split(';').filter((val: string) => val.includes(cookieName))[0];
    if (!isToken) return '-1';
    const token = isToken.split('=')[1];
    return token;
}
