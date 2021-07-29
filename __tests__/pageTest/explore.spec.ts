import mockAxios from 'axios';
describe('checking all axios functions', () => {
    it('calls the get functions', async () => {
        //setup
        //@ts-ignore
        mockAxios.get.mockImplementationOnce(() => {
            return Promise.resolve({ data: 'here' });
        });

        const answer = await mockAxios.get('/hello');
        expect(answer.data).toEqual('here');
        expect(mockAxios.get).toHaveBeenCalledWith('/hello'); //gets the parameter of the functions
    });
});
