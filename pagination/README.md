# Pagination UI for Product Listing

## Problem Statement

Your task is to build a pagination user interface (UI) that displays a list of products fetched from an API. The UI should allow users to navigate through the product list by clicking on next and previous buttons, as well as directly navigating to a specific page by clicking on the corresponding page number.

### Requirements

1. **Fetch Products from API:**
  - Fetch the list of products from a given API endpoint.
  - The API should support pagination by accepting parameters for limit (number of products per page) and skip (offset for pagination).

2. **Display Product List:**
  - Display the fetched products in a visually appealing and organized manner (e.g., grid, list, or cards).
  - Each product should display relevant information such as product ID, name, description, brand, or any other relevant details.

3. **Pagination Controls:**
  - Implement pagination controls that include next and previous buttons.
  - The next and previous buttons should be disabled when the user reaches the first or last page, respectively.

4. **Page Number Display:**
  - Display the available page numbers in a separate section of the UI.
  - Users should be able to click on a specific page number to navigate directly to that page.
  - Indicate the current active page by highlighting or styling the corresponding page number differently.

5. **Responsive Design:**
  - Ensure that the pagination UI is responsive and adapts to different screen sizes and devices.

6. **Coding Best Practices:**
  - Follow best coding practices, including proper code organization, modularization, and commenting.
  - Implement error handling and input validation where necessary.
  - Ensure cross-browser compatibility.

7. **Bonus Points (Optional):**
  - Implement client-side search or filtering functionality to filter the product list based on specific criteria (e.g., product name, brand, or price range).
  - Allow users to change the number of products displayed per page (e.g., 10, 20, or 50 products per page).
  - Implement sorting functionality to sort the product list based on various criteria (e.g., price, name, or rating).

You can use any modern frontend framework or library of your choice (e.g., React, Vue.js, Angular) to build the pagination UI.