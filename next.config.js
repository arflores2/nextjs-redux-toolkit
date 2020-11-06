module.exports = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/dashboard'
      },
    ]
  },
  env: {
    NEXT_PUBLIC_MAP_BOX_TOKEN: process.env.NEXT_PUBLIC_MAP_BOX_TOKEN
  }
};
