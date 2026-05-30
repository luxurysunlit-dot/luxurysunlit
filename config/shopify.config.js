/**
 * Shopify Integration Configuration
 * 
 * This file contains all Shopify API credentials and configuration
 * DO NOT commit API keys to version control
 * Use environment variables instead
 */

module.exports = {
  // Shopify Store Configuration
  store: {
    name: process.env.SHOPIFY_STORE_NAME || 'luxurysunlit',
    domain: process.env.SHOPIFY_STORE_DOMAIN || 'luxurysunlit.myshopify.com',
    currency: 'USD',
  },

  // API Credentials (REST API)
  api: {
    key: process.env.SHOPIFY_API_KEY,
    password: process.env.SHOPIFY_API_PASSWORD,
    version: '2024-01',
  },

  // GraphQL API
  graphql: {
    endpoint: `https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/2024-01/graphql.json`,
    accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
  },

  // Webhook Configuration
  webhooks: {
    apiVersion: '2024-01',
    topics: [
      'products/create',
      'products/update',
      'products/delete',
      'orders/create',
      'orders/updated',
      'orders/paid',
      'orders/fulfilled',
      'orders/cancelled',
      'inventory_levels/update',
    ],
  },

  // Product Sync Configuration
  sync: {
    batchSize: 250,
    interval: 3600000, // 1 hour in ms
    timeout: 30000, // 30 seconds
  },

  // Rate Limiting
  rateLimit: {
    calls: 2,
    interval: 1000, // per 1 second
  },

  // Retry Configuration
  retry: {
    maxAttempts: 3,
    backoffMultiplier: 2,
    initialDelay: 1000,
  },
};
