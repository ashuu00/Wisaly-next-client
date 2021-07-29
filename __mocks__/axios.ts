export default {
    get: jest.fn(() => Promise.resolve({ data: 'Hello' })),
    post: jest.fn(() => Promise.resolve({ data: 'hi' }))
};
