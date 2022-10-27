import {SetQrCode} from "./components/SetQrCode.js"
import {QrCodeComponent} from './components/DisplayQrCode.js'

function App() {
  return (
    <div className="App">
      <SetQrCode/>
      <QrCodeComponent/>
    </div>
  );
}

export default App;
