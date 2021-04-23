module.exports = {
    setupFilesAfterEnv: ["./setupTests.js"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "../../node_modules/babel-jest",
    },
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    }
};
