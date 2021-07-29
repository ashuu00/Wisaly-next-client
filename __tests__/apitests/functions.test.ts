import getTokenFromContext from '../../functions/getTokenFromContext';
import titleCase from '../../functions/titleCase';

test('should return title cases', () => {
    const myStr = 'ashu tosh anu 12 ';
    expect(titleCase(myStr)).toEqual('Ashu Tosh Anu 12');
});

test('should return -1 fir undefined', () => {
    var str = { req: { headers: { cookie: 'ashu=nishu-12;' } } };
    expect(str.req.headers.cookie).toEqual('ashu=nishu-12;');
    const res = getTokenFromContext(str, 'ashu');
    expect(res.split('-')[1]).toEqual('12');
});
