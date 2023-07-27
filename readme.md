# App Scheme Invoker

App Scheme Invoker is a simple web app that allows users to invoke custom app schemes on Android and iOS devices. It provides a user-friendly interface to enter the app scheme and an optional payload. The app then attempts to open the specified app using the provided scheme and payload.

## Demo

[View Demo](https://mobile-deeplink-invoker.netlify.app/)

## Features

- Enter custom app scheme and payload
- Supports both Android and iOS app schemes
- If the app is installed, it will be opened with the specified action
- If the app is not installed, the user will be redirected to the respective app store for download

## How to Use

1. Enter the custom app scheme in the "Enter App Scheme" field. For Android, it will look like `your_custom_scheme://action`. For iOS, it will look like `your_custom_scheme://`.
2. Optionally, enter the payload in the "Enter Payload" field in key-value format, e.g., `key1=value1&key2=value2`.
3. Click the "Open App" button to invoke the app scheme.
4. If the app is installed and the scheme is correctly configured, the app will open and handle the specified action.
5. If the app is not installed, you will be redirected to the app store for download.

## How to Contribute

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

