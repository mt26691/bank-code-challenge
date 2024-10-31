# Simple Banking System

## Overview

This project implements a simple banking system using TypeScript. The goal is to simulate bank operations such as creating customers, depositing money, withdrawing funds, and transferring funds between customers. It also allows a manager to view the total bank balance.

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm (Node Package Manager)

### Installation

1. **Clone the repository** (if it's in version control):

```bash
git clone https://github.com/mt26691/bank-code-challenge.git
```

2. **Navigate to the project directory:**

```bash
cd bank-code-challenge
```

3. **Install dependencies:**

```bash
npm install
```

### Running Tests

To execute the test suite, run the following command:

```bash
npm run test
```

### Project Structure

```bash
src
│
├── bank.ts          # Bank class
├── customer.ts      # Customer class
├── manager.ts       # Manager class
└── bank.test.ts     # Test file for all classes and interactions
jest.config.js       # Jest configuration file

```

## Design Choices

### Why Use Classes and Unit Tests Only

- **No GUI, No Client, No Server, No Database**: The requirements specified a coding challenge focused on class interactions without any front-end, database, or server infrastructure. Therefore, implementing the solution using classes aligns with the problem's simplicity.
- **No Over-Engineering**: The goal is to avoid unnecessary complexity. Introducing a database, front-end, or server would complicate the architecture without adding any value to the current requirements.
- **Using Classes**: Classes encapsulate state and behavior, making the solution modular and testable. This design choice also keeps the code organized and adheres to object-oriented principles.
- **Testing**: Writing tests helps ensure that each method and class behaves as expected. This approach allows developers to verify that core operations (like deposits, withdrawals, and transfers) work correctly.

### Long-Term Features

While the current implementation meets the basic requirements, there are several enhancements that could be introduced in the future to improve the system's reliability, scalability, and efficiency:

- **Database Integration for State Management**: Adding a database would allow the application to persist customer data and maintain consistent states. This is essential for real-world scenarios where data must be durable and shared across different components of the system.
- **Row Locks for Account Balances**: To ensure that balance updates occur correctly, implementing row-level locks within the database would prevent multiple transactions from affecting an account simultaneously. This approach would safeguard against race conditions.

- **Distributed Locking for Multi-Instance Scalability**: In a scenario where the application is deployed across multiple servers or instances, distributed locks (using Redis or other distributed systems) would ensure that only one transaction occurs at a time for a given account across all instances.

- **Validation for Existing Accounts**: When transferring money between accounts, it is crucial to verify that both the source and destination accounts exist in the system. This validation would prevent errors and unexpected behavior.

- **Optimized Total Balance Calculation**: Rather than calculating the total balance on each request, a pre-calculated value or materialized view in the database could be used. This approach would improve performance, especially for large-scale systems with many customers and frequent balance inquiries.

These long-term features would make the system more robust, reliable, and scalable, laying the foundation for handling real-world banking scenarios.

## Conclusion

This project provides a basic banking model using TypeScript classes and Jest for testing. The simplicity of the design meets the coding challenge requirements while allowing flexibility for future enhancements.
