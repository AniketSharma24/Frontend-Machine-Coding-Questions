# Infinite Scroll with API using React

This project demonstrates an infinite scroll implementation in React that loads more products from an API as the user scrolls down the page. The project uses a custom hook to handle infinite scrolling behavior and paginated API requests.

## Features

- Infinite Scrolling: Automatically loads additional products as the user scrolls down the page.
- API Integration: Fetches paginated product data from an API (`jsonplaceholder.typicode.com` used as a placeholder).
- Loading State: Displays a loading indicator while fetching more products.
- Custom Hook: Reusable custom hook to handle infinite scrolling logic.

## Prerequisites

Ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn

## Getting Started

1. Clone the Repository: <br>`git clone https://github.com/yourusername/infinite-scroll-api-react.git` <br> `cd infinite-scroll-api-react`

2. Install Dependencies<br>`npm install`

3. Run the Application<br>`npm run dev`

The application should now be running on http://localhost:5173.

## Code Breakdown

1. <b>Custom Hook (useInfiniteScroll)</b><br>
   The custom hook handles the scroll event to trigger loading more products when the user is near the bottom of the page. It accepts a callback function (`loadMoreProducts`) to load new items and an optional offset to fine-tune the trigger point.

2. <b>API Integration</b><br>
   This app fetches paginated product data from a public API (`jsonplaceholder.typicode.com`). The `fetchProductsFromAPI` function sends a request for a specific page and appends new products to the existing list.

3. <b>Infinite Scroll Logic</b><br>
   The infinite scroll functionality is implemented using the custom hook and handles pagination. The app checks if more products are available and prevents duplicate API calls with a `loading` state.

4. <b>Loading Indicator</b><br>
   Displays a message when more products are being fetched and also notifies the user when no more products are available.

## How It Works

- The app initializes with a product list and listens for scroll events.
- When the user scrolls near the bottom, the `useInfiniteScroll` hook triggers the API request to fetch more products.
- The products are then appended to the existing list and displayed on the page.
- If no more products are available, the infinite scroll behavior stops.

## Author

### <b>Aniket Sharma<b>

## License

This project is licensed under the MIT License.
