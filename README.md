# IHS Shared Modules & Utility Pages

A collection of reusable frontend modules and utility pages developed for IHS applications and platforms.

This repository contains shared components, standalone pages, and reusable business modules that are integrated across multiple web and mobile applications within the IHS ecosystem.

---

## Overview

The project serves as a centralized collection of common functionalities and utility pages used in various IHS products to improve reusability, consistency, and development efficiency.

The repository includes barcode scanning features, payment status handling, policy pages, location services, and account management utilities.

---

## Included Pages & Modules

### Barcode Scanner

A reusable barcode scanning module used across multiple applications for reading and processing barcode data.

Route:

```bash
/scanBarcode
```

---

### Payment Status

A page for displaying payment transaction results and status updates.

Route:

```bash
/paymentStatus
```

---

### Terms & Conditions

A static terms and conditions page used within customer-facing applications.

Route:

```bash
/terms
```

---

### Location Map

A map display page for showing locations and coordinates interactively.

Route:

```bash
/displayMap
```

---

### Account Deletion

A user account deletion request page designed to comply with mobile application policies and privacy requirements.

Route:

```bash
/account-deletion
```

---

### Refund Policy

A refund policy page explaining payment and refund terms for customers.

Route:

```bash
/refund-policy
```

---

### Coming Soon

A placeholder page used for under-development or unavailable routes.

Routes:

```bash
/
*
```

---

## Technologies Used

- React.js
- JavaScript (ES6+)
- React Router DOM
- Tailwind CSS / CSS
- Barcode Scanner Libraries
- Maps Integration APIs

---

## Project Goals

This repository focuses on:

- Reusable Module Development
- Shared Frontend Architecture
- Cross-Application Integration
- Clean UI/UX Design
- Scalable Component Structure
- Centralized Utility Management

---

## Architecture Highlights

- Modular page structure
- Reusable shared components
- Lightweight routing system
- Mobile-friendly responsive design
- Easy integration across multiple projects

---

## Project Structure

```bash
src/
├── components/
├── pages/
├── routes/
├── utils/
├── services/
├── assets/
└── App.js
```

---

## Run Locally

```bash
git clone https://github.com/AhmedAshraf-Dev/barcode-secanner.git

cd barcode-secanner

npm install

npm start
```

---

## Use Cases

These modules are integrated into multiple IHS web and mobile applications to provide:

- Barcode processing
- Payment flow support
- Legal and policy pages
- Map visualization
- User account management

---

## Future Improvements

- QR Code Support
- Real-Time Barcode Validation
- Enhanced Map Features
- Multi-language Support
- Advanced Payment Tracking
- UI/UX Improvements

---

## Author

Frontend Developer focused on building scalable reusable modules and enterprise frontend solutions.
