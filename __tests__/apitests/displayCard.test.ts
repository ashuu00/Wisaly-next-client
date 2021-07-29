import mockAxios from 'axios';
import { before } from 'lodash';
import { postDisplayCard } from '../../dto/apisDto/displayCard';
jest.mock('axios');

describe('saving all the details for displayCard', () => {
    let displayCardPayload: postDisplayCard;
    beforeAll(() => {
        //@ts-ignore
        mockAxios.post.mockImplementationOnce(() => {
            return Promise.resolve({ data: 'Didi it' });
        });
        displayCardPayload = {
            title: 'Ashutosh',
            description: '<h1>What a beautiful day.</h1>',
            categories: ['Fun', 'Energized'],
            photo_links: ['aws'],
            youtube_links: []
        };
    });

    test('should post with all the data correctly', async () => {
        //function where data is posted
        const postingData = await mockAxios.post('/myurl', displayCardPayload, {
            withCredentials: true
        });
        expect(mockAxios.post).toBeCalledWith(
            expect.anything(),
            displayCardPayload,
            expect.anything()
        );
    });
});
