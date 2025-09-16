import * as dotenv from 'dotenv';
import { Configuration, OfficesApi, ClientApi, LoanProductsApi, SavingsProductApi, LoansApi } from './src/typescript-client';

// Load environment variables
dotenv.config();

// Configuration
const BASE_URL = process.env.BASE_URL || 'https://localhost:8773/fineract-provider/api';
const USERNAME = process.env.UNAME || 'mifos';
const PASSWORD = process.env.PASSWORD || 'password';

// Create configuration with authentication
const configuration = new Configuration({
  basePath: BASE_URL,
  username: USERNAME,
  password: PASSWORD,
  baseOptions: {
    headers: {
      'Fineract-Platform-TenantId': 'default'
    }
  }
});

// Create API instances
const officesApi = new OfficesApi(configuration);
const clientApi = new ClientApi(configuration);
const loanProductsApi = new LoanProductsApi(configuration);
const savingsProductApi = new SavingsProductApi(configuration);
const loansApi = new LoansApi(configuration);

async function runDemo() {
  console.log('🚀 Starting Fineract TypeScript Client Demo');
  console.log('='.repeat(60));

  try {
    // 1. Test authentication by getting offices
    console.log('\n📋 1. Testing Authentication - Getting Offices...');
    const officesResponse = await officesApi.retrieveOffices();
    console.log(`✅ Successfully authenticated! Found ${officesResponse.data?.length || 0} offices`);

    if (officesResponse.data && officesResponse.data.length > 0) {
      console.log(`   First office: ${officesResponse.data[0].name} (ID: ${officesResponse.data[0].id})`);
    }

    // 2. Get clients
    console.log('\n👥 2. Getting Clients...');
    const clientsResponse = await clientApi.retrieveAll21();
    console.log(`✅ Found ${clientsResponse.data?.length || 0} clients`);

    if (clientsResponse.data && clientsResponse.data.length > 0) {
      const firstClient = clientsResponse.data[0];
      console.log(`   First client: ${firstClient.displayName} (ID: ${firstClient.id})`);
    }

    // 3. Get loan products
    console.log('\n💰 3. Getting Loan Products...');
    const loanProductsResponse = await loanProductsApi.retrieveAllLoanProducts();
    console.log(`✅ Found ${loanProductsResponse.data?.length || 0} loan products`);

    if (loanProductsResponse.data && loanProductsResponse.data.length > 0) {
      const firstProduct = loanProductsResponse.data[0];
      console.log(`   First loan product: ${firstProduct.name} (ID: ${firstProduct.id})`);
    }

    // 4. Get savings products
    console.log('\n🏦 4. Getting Savings Products...');
    const savingsProductsResponse = await savingsProductApi.retrieveAllSavingsProducts();
    console.log(`✅ Found ${savingsProductsResponse.data?.length || 0} savings products`);

    if (savingsProductsResponse.data && savingsProductsResponse.data.length > 0) {
      const firstProduct = savingsProductsResponse.data[0];
      console.log(`   First savings product: ${firstProduct.name} (ID: ${firstProduct.id})`);
    }

    // 5. Get loans
    console.log('\n📊 5. Getting Loans...');
    const loansResponse = await loansApi.retrieveAllLoans();
    console.log(`✅ Found ${loansResponse.data?.length || 0} loans`);

    if (loansResponse.data && loansResponse.data.length > 0) {
      const firstLoan = loansResponse.data[0];
      console.log(`   First loan: ${firstLoan.accountNo} (ID: ${firstLoan.id})`);
    }

    console.log('\n🎉 Demo completed successfully!');
    console.log('='.repeat(60));
    console.log('✅ All API calls worked correctly!');
    console.log('✅ The TypeScript client is working properly!');
    console.log('✅ Authentication is set up correctly!');

  } catch (error: any) {
    console.error('\n❌ Demo failed with error:', error.message);

    if (error.response?.status === 401) {
      console.log('\n🔐 Authentication Error - Possible solutions:');
      console.log('   1. Check your username and password in .env file');
      console.log('   2. Verify the Fineract server is running');
      console.log('   3. Check if the server URL is correct');
    } else if (error.response?.status === 404) {
      console.log('\n🌐 Connection Error - Possible solutions:');
      console.log('   1. Verify the Fineract server is running');
      console.log('   2. Check the BASE_URL in your .env file');
      console.log('   3. Ensure the server is accessible');
    } else {
      console.log('\n🔧 General Error - Check:');
      console.log('   1. Server connectivity');
      console.log('   2. API endpoint availability');
      console.log('   3. Network configuration');
    }

    console.log('\n📝 Environment variables used:');
    console.log(`   BASE_URL: ${BASE_URL}`);
    console.log(`   USERNAME: ${USERNAME}`);
    console.log(`   PASSWORD: ${PASSWORD ? '***' : 'NOT SET'}`);
  }
}

// Run the demo
runDemo();
