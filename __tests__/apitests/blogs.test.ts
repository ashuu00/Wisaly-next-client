import mockAxios from 'axios';
jest.mock('axios');

describe('getting the blogs for user', () => {
    beforeAll(() => {
        mockAxios.get //@ts-ignore
            .mockImplementationOnce(() => {
                return Promise.resolve({ status: 200, data: { blogs: ['1blog', '2blogs'] } });
            })
            .mockImplementationOnce(() => {
                //work on this, this should be a generic case
                return Promise.reject('Could Not connect to server');
            })
            .mockImplementationOnce(() => {
                return Promise.resolve({ status: 403, data: { message: 'Unauthorized User' } });
            });
    });

    test('returning the blog with correct status', async () => {
        const res = await mockAxios.get('/blogsApi', { withCredentials: true });
        expect(res.status).toEqual(200);
        expect(res.data).toHaveProperty('blogs');
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
    });
});
