export default function convertTitleCase(val: string): string {
    if (val === '' || val === undefined) return '';
    console.log('val received', val);

    const myStringArr = val.trim().split(' ');
    return myStringArr.reduce(
        (prev, curr) => prev + `${prev !== '' ? ' ' : ''}` + curr[0].toUpperCase() + curr.substr(1),
        ''
    );
}
