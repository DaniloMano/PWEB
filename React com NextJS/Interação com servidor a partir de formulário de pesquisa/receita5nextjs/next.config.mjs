/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'm.media-amazon.com',
          port: '',
          pathname: '/images/M/MV5*', // Definindo um padrão para o caminho da imagem
        },
      ],
    },
  };
  
  export default nextConfig;
  