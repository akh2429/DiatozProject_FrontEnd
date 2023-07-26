module.exports = {
    "moduleFileExtensions": ["js", "jsx", "ts", "tsx", "json", "node"],
    "transform": {
        "^.+\.(js|jsx|ts|tsx)$": "babel-jest"
    },
    "transformIgnorePatterns": ["node_modules/(?!(axios|react-toastify|react-router-dom|react-icons))"]
};
