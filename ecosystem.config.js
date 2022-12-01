module.exports = {
    apps: [{
      name: "BNHCARE",
      script: "src/server.js",
      env_development: {
        NODE_ENV: "development"
      },
      env_stage: {
        NODE_ENV: "stage",
      },
      env_production: {
        NODE_ENV: "production",
      }
    }]
}