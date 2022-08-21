/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['upload.wikimedia.org', "static.xx.fbcdn.net", 
    "scontent.fdel4-2.fna.fbcdn.net",'images.pexels.com'],
  }
}

module.exports = nextConfig
