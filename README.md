Bewakoof Product Page Layout - NextJS + Tailwind CSS Assignment

Overview
This project is a submission for the NextJS + Tailwind CSS assignment to recreate the layout and responsiveness of the Bewakoof product page (reference URL). The focus is on replicating the page structure, spacing, and responsiveness using placeholder divs, as per the assignment requirements.

Features
Page Structure: Includes all required sections
Header/Navigation bar
Breadcrumb navigation
Main product container (image gallery + product details)
Product action section (size selector, add to cart, etc.)
Product description tabs
Recommended products section
Footer

Image Gallery:
Thumbnails are positioned to the left of the main image on desktop and below the main image on mobile, matching the reference design.
Fixed the alignment to remove empty space below the main image by constraining the height of the left section.

Scrollable Product Details: The right section (product details, reviews, etc.) is now scrollable in desktop view, ensuring no empty space below the main image and aligning with the reference layout.

Responsiveness:
Matches the desktop layout on larger screens (thumbnails on the left, scrollable details on the right).
Adapts to mobile layout on smaller screens (e.g., iPhone 12 Pro dimensions) with thumbnails below the main image and a fully scrollable content area.
Placeholder Usage: Uses placeholder divs for most components to mimic the layout structure, with text used in the breadcrumb for visual accuracy.
No Functionality: All buttons and links are non-interactive, as specified.Screenshots

Desktop View

![image](https://github.com/user-attachments/assets/87bf98d0-3398-40a4-bfb8-8358bcaf7fd2)
![image](https://github.com/user-attachments/assets/80b44b00-ce96-4bb3-b8eb-75611f90b3b6)

Mobile View

![image](https://github.com/user-attachments/assets/049fc48a-0f41-42a8-84d7-78bcb8f99115)


Setup Instructions

Clone the repository:
git clone https://github.com/your-username/bewakoof-product-page-layout.git

Navigate to the project directory:
cd bewakoof-product-page-layout

Install dependencies:
npm install

Run the development server:
npm run dev

Open your browser and visit http://localhost:3000 to view the project.

Project Structure
app/page.jsx: Main page component that renders all sections.
components/: Contains individual components for the header, breadcrumb, product section, recommended products, and footer.
screenshots/: Contains desktop and mobile screenshots of the layout.

Notes
The breadcrumb uses text ("Home > Men's Clothing > Men's Printed T-Shirts") to closely match the Bewakoof reference, while other sections use placeholder divs as per the assignment guidelines.
The layout has been tested for responsiveness using browser dev tools to simulate mobile devices.

Submission Details
This project was submitted as part of the NextJS + Tailwind CSS assignment to demonstrate proficiency in layout design and responsive web development using NextJS and Tailwind CSS.

Submitted by: Kartavya Chauhan
Date: May 02, 2025
