// EmailJS Configuration
// This approach embeds the configuration directly in your build
// Note: EmailJS public keys are meant to be public, so this is safe

export const emailjsConfig = {
  serviceId: "service_xxxxxxx", // Replace with your actual service ID
  templateId: "template_xxxxxxx", // Replace with your actual template ID
  publicKey: "xxxxxxxxxxxxxxx", // Replace with your actual public key
};

// Alternative: Load from external config (more advanced)
export const loadEmailjsConfig = async () => {
  // You could fetch this from an external API or config service
  // This allows you to change configuration without redeploying
  return emailjsConfig;
};
