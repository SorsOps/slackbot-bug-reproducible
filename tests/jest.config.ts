export default {
    coverageDirectory: '<rootDir>/coverage',
    collectCoverage: true,
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/tests/mocks/file-mock.ts'
    },
    collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
    testPathIgnorePatterns: ['tests/setup'],
    globals: {
        __PATH_PREFIX__: ''
    },
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    // Needed to prevent CORS errors
    testEnvironment: 'node',
    roots: ['<rootDir>/tests/'],
    rootDir: '../'
};
