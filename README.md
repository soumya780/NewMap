# Google Map Integration Project

This project demonstrates the integration of Google Maps in a React application. It provides features like location search using the Google Maps Autocomplete API and an overlay toggle feature.

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
   git clone https://github.com/yourusername/google-map-integration.git
2.**Navigate to the Project Directory**:
   cd google-map-integration
