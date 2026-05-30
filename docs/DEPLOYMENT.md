# Luxury Sunlit - Deployment Guide

## Deployment Environments

### Development
- Local development environment
- Branch: `develop`
- URL: `http://localhost:3000`

### Staging
- Pre-production environment
- Branch: `staging`
- URL: `https://staging.luxurysunlit.com`
- Purpose: Testing before production

### Production
- Live environment
- Branch: `main`
- URL: `https://luxurysunlit.com`
- Purpose: User-facing application

## Frontend Deployment (Next.js on Vercel)

### Prerequisites
- Vercel account
- GitHub repository connected
- Environment variables configured

### Deployment Steps

1. Connect repository to Vercel
2. Configure environment variables
3. Set build command: `yarn build`
4. Set start command: `yarn start`
5. Enable automatic deployments on push to `main`

### Environment Variables (Production)

```
NEXT_PUBLIC_API_URL=https://api.luxurysunlit.com
NEXT_PUBLIC_SHOPIFY_STORE=luxurysunlit.myshopify.com
NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN=<token>
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=<key>
```

## Backend Deployment (Express.js on Heroku/AWS)

### Option 1: Heroku

```bash
# Login to Heroku
heroku login

# Create app
heroku create luxury-sunlit-api

# Set environment variables
heroku config:set PORT=3001
heroku config:set DB_URL=<mongodb-connection-string>
heroku config:set JWT_SECRET=<secret>

# Deploy
git push heroku main
```

### Option 2: AWS (EC2 + ECS)

1. Create Docker container
2. Push to ECR
3. Deploy to ECS
4. Configure load balancer
5. Set up auto-scaling

## Database Deployment (MongoDB Atlas)

### Setup

1. Create MongoDB Atlas cluster
2. Configure IP whitelist
3. Create database user
4. Get connection string
5. Add to backend environment variables

## SSL/TLS Certificates

- Vercel: Automatic (Let's Encrypt)
- Backend: CloudFlare or AWS Certificate Manager
- Ensure HTTPS-only in production

## CI/CD Pipeline

### GitHub Actions Workflow

```yaml
name: Deploy

on:
  push:
    branches: [main, staging]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: yarn install
      - run: yarn build
      - run: yarn test
      - name: Deploy to production
        if: github.ref == 'refs/heads/main'
        run: yarn deploy:prod
```

## Monitoring & Logging

### Frontend
- Vercel Analytics
- Sentry for error tracking
- Google Analytics for user behavior

### Backend
- CloudWatch or Winston logging
- New Relic for performance
- Sentry for exceptions
- ELK Stack for log aggregation

## Backup Strategy

### Database
- Daily automated backups
- Weekly full backups
- Monthly archive backups
- Retention: 30 days minimum

### Code
- GitHub repository backup
- Tag releases
- Keep deployment history

## Rollback Procedure

### Frontend
```bash
# Vercel: Automatic rollback option in dashboard
# Or redeploy previous commit
vercel --prod --target <commit-sha>
```

### Backend
```bash
# Heroku
heroku releases
heroku rollback

# AWS
# Update task definition to previous version
```

## Performance Optimization

- CDN: CloudFlare
- Image optimization: ImageKit
- Cache headers: Long TTL for static assets
- Compression: gzip enabled
- Minification: JavaScript and CSS
- Database indexing: Optimize queries

## Security Hardening

- HTTPS enforced
- HSTS headers
- Rate limiting
- DDoS protection
- Web Application Firewall
- Regular security audits
- Penetration testing

## Post-Deployment Checklist

- [ ] Verify all features working
- [ ] Test Shopify integration
- [ ] Check payment processing
- [ ] Monitor error logs
- [ ] Verify analytics
- [ ] Test on mobile devices
- [ ] Verify SSL certificate
- [ ] Check email notifications
- [ ] Test customer support features
- [ ] Verify database backups
