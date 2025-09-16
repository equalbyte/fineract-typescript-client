# Fineract TypeScript Client

A TypeScript client library for the Apache Fineract REST API, automatically generated from the OpenAPI specification.

## Features

- 🔄 **Auto-generated** from the latest Fineract OpenAPI specification
- 📦 **TypeScript-first** with full type safety
- 🚀 **Axios-based** HTTP client with Promise support
- 📚 **Comprehensive** API coverage for all Fineract endpoints
- 🎯 **ES6+** compatible with modern JavaScript features

## Installation

### From Release Assets

Download the latest release from the [Releases page](https://github.com/equalbyte/fineract-typescript-client/releases):

```bash
# Download and extract the TypeScript client
wget https://github.com/equalbyte/fineract-typescript-client/releases/latest/download/typescript-client-v1.0.0.zip
unzip typescript-client-v1.0.0.zip
```

### From Source

```bash
git clone https://github.com/equalbyte/fineract-typescript-client.git
cd fineract-typescript-client
npm install
```

## Quick Start

```typescript
import { Configuration, DefaultApi } from './src/typescript-client';

// Configure the client
const config = new Configuration({
  basePath: 'https://your-fineract-instance.com/fineract-provider/api',
  username: 'your-username',
  password: 'your-password',
  headers: {
    'Fineract-Platform-TenantId': 'your-tenant-id'
  }
});

// Create API instance
const api = new DefaultApi(config);

// Example: Get all clients
async function getClients() {
  try {
    const response = await api.retrieveAllClients();
    console.log('Clients:', response.data);
  } catch (error) {
    console.error('Error fetching clients:', error);
  }
}

getClients();
```

## Configuration

The client supports various configuration options:

```typescript
const config = new Configuration({
  basePath: 'https://demo.fineract.dev/fineract-provider/api',
  username: 'mifos',
  password: 'password',
  headers: {
    'Fineract-Platform-TenantId': 'default'
  },
  // Optional: Custom axios instance
  // axios: customAxiosInstance
});
```

### Environment Variables

You can also use environment variables for configuration:

```bash
# .env file
FINERACT_BASE_URL=https://demo.fineract.dev/fineract-provider/api
FINERACT_USERNAME=mifos
FINERACT_PASSWORD=password
FINERACT_TENANT_ID=default
```

```typescript
import dotenv from 'dotenv';
dotenv.config();

const config = new Configuration({
  basePath: process.env.FINERACT_BASE_URL,
  username: process.env.FINERACT_USERNAME,
  password: process.env.FINERACT_PASSWORD,
  headers: {
    'Fineract-Platform-TenantId': process.env.FINERACT_TENANT_ID
  }
});
```

## API Examples

### Client Management

```typescript
// Get all clients
const clients = await api.retrieveAllClients();

// Get a specific client
const client = await api.retrieveOne(1);

// Create a new client
const newClient = await api.createClient({
  firstname: 'John',
  lastname: 'Doe',
  dateOfBirth: '1990-01-01',
  locale: 'en',
  dateFormat: 'dd MMMM yyyy'
});
```

### Loan Management

```typescript
// Get all loans
const loans = await api.retrieveAllLoans();

// Get loan details
const loan = await api.retrieveLoan(1);

// Create a new loan application
const loanApplication = await api.createLoanApplication({
  clientId: 1,
  productId: 1,
  principal: 1000,
  loanTermFrequency: 12,
  loanTermFrequencyType: 2, // months
  numberOfRepayments: 12,
  repaymentEvery: 1,
  repaymentFrequencyType: 2, // months
  interestRatePerPeriod: 2.0,
  locale: 'en',
  dateFormat: 'dd MMMM yyyy'
});
```

### Account Management

```typescript
// Get savings accounts
const savingsAccounts = await api.retrieveAllSavingsAccounts();

// Get account transactions
const transactions = await api.retrieveAllTransactions(1);
```

## Development

### Prerequisites

- Node.js 18+
- npm or yarn
- Java 8+ (for OpenAPI Generator)

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/equalbyte/fineract-typescript-client.git
   cd fineract-typescript-client
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the demo:**
   ```bash
   npm run demo
   ```

### Regenerating the Client

The TypeScript client is automatically generated from the Fineract OpenAPI specification. You can regenerate it manually:

```bash
# Generate the client
npm run generate-typescript-client

# Or regenerate from scratch
npm run regenerate-typescript-client
```

## Automated Generation

This project uses GitHub Actions to automatically generate the TypeScript client whenever a new release is created.

### How It Works

1. **Release Trigger**: When you create a new release, the GitHub Actions workflow automatically runs
2. **Client Generation**: The workflow generates the TypeScript client from the latest `fineract.json` specification
3. **Repository Update**: Generated changes are committed and pushed to the main branch
4. **Release Assets**: The generated client is packaged and attached to the release as downloadable assets

### Workflow Features

- ✅ **Automatic**: Runs on every release creation
- ✅ **Versioned**: Each release includes the corresponding client version
- ✅ **Assets**: Downloadable `.zip` and `.tar.gz` archives
- ✅ **Committed**: Generated code is committed to the repository
- ✅ **Manual Trigger**: Can be triggered manually via GitHub Actions

### Release Assets

Each release includes:
- `typescript-client-v{version}.zip` - ZIP archive of the generated client
- `typescript-client-v{version}.tar.gz` - Compressed tar archive

## API Documentation

The generated client includes comprehensive TypeScript interfaces and JSDoc comments. You can explore the API by:

1. **IDE Support**: Full IntelliSense and autocomplete in your IDE
2. **Type Definitions**: All API models and responses are fully typed
3. **Documentation**: JSDoc comments for all methods and parameters

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Apache Fineract](https://fineract.apache.org/) - The microfinance platform
- [OpenAPI Generator](https://openapi-generator.tech/) - For generating the TypeScript client
- [Axios](https://axios-http.com/) - HTTP client library

## Support

- 📖 [Fineract Documentation](https://fineract.apache.org/docs/current/)
- 🐛 [Report Issues](https://github.com/equalbyte/fineract-typescript-client/issues)
- 💬 [Discussions](https://github.com/equalbyte/fineract-typescript-client/discussions)

## Demo Instance

You can test the client against the Fineract demo instance:
- **URL**: https://demo.fineract.dev/fineract-provider/api
- **Username**: mifos
- **Password**: password
- **Tenant ID**: default
