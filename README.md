# Google Map Integration Project

This project demonstrates the integration of Google Maps in a React application. It provides features like location search using the Google Maps Autocomplete API, geolocation, and an overlay toggle feature.

You can view the source code at: [NewMap on GitHub](https://github.com/soumya780/NewMap)

---

## Features

- **Geolocation**: Automatically detects the user's current location and centers the map.
- **Search**: Allows users to search for locations using the Google Maps Autocomplete widget.
- **Overlay**: Toggle the overlay to visualize custom map data.

---

## Project Structure

. |-- public | |-- index.html |-- src | |-- components | | |-- GoogleMapComponent.jsx | |-- assets | | |-- layerImg.png | |-- App.js | |-- index.js |-- .env |-- README.md |-- package.json

### Key Files

1. **GoogleMapComponent.jsx**:
   - Main component implementing Google Maps functionality.
2. **layerImg.png**:
   - Image used for the overlay on the map.
3. **.env**:
   - Stores the Google Maps API key (ensure this file is included in `.gitignore` to avoid exposing sensitive information).

---

## Installation and Execution

### Prerequisites

- **Node.js**: Ensure Node.js is installed on your system.
- **Google Maps API Key**: Obtain an API key from the [Google Cloud Console](https://console.cloud.google.com/).

### Steps to Run

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/soumya780/NewMap.git
2. Navigate to the Project Directory:
   ```bash
   cd NewMap

3. Install Dependencies::
   ```bash
   npm install

4. Create .env File: In the project root directory, create a .env file and add your Google Maps API key:
   ```bash
   VITE_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY

5. Install Dependencies::
   ```bash
   npm install
---

### Libraries and Technologies Used
- **React**: Frontend framework for building user interfaces.
- **@react-google-maps/api**: Library for integrating Google Maps in React.
- **React Icons**: For adding icons like the search icon in the search bar.
- **Tailwind CSS**: Utility-first CSS framework used for styling.
- **Google Maps API**: For map and location-related functionality.

---

## Thank You!

Thank you for checking out this project! I hope you find it useful and enjoyable to work with. If you have any questions, suggestions, or feedback, feel free to open an issue or reach out.

Happy coding! ✨

If you found this project helpful, consider starring it on GitHub and sharing it with others. Your support is greatly appreciated! 😊

---

Made with ❤️ by [Soumya]
