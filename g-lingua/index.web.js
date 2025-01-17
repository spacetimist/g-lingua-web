import { AppRegistry } from 'react-native';
import App from './app/index.jsx'; // Pastikan ini merujuk ke file utama aplikasi kamu
import { name as appName } from './app.json'; // Sesuaikan jika ada app.json

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});
