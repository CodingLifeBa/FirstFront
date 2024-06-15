module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'], // Liste des domaines autorisés pour charger des images
    deviceSizes: [320, 640, 768, 1024, 1280], // Tailles de périphérique prises en charge
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Tailles d'image générées
    loader: 'default', // Chargeur par défaut pour les images
    path: '/uploads/', // Chemin de l'endpoint pour les images optimisées
  },
};