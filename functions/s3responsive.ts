export default function getName(link: string, query: string): string {
    const arr = link.split('/');
    return `https://ik.imagekit.io/wisalysolutions/${arr[arr.length - 1]}?${query}`;
}

/** This
 * Query must be like this ?tr=w-80,h-80,ar-4-3
 */
