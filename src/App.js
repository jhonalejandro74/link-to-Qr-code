import { SetQrCode } from "./components/InputLinkComponent.js"
import { DisplayQrCode } from './components/DisplayQrCode.js'
import { FooterAtribution } from './components/FooterComponent.js'
import { useState } from "react";

function App() {
  const linkToGithub = 'https://github.com/jhonalejandro74'
  const [link, setLink] = useState(linkToGithub)

  const getQrLink = (url) => {
    setLink(url)
  }

  return (
    <div className="App">
      <SetQrCode getQrLink={getQrLink}/>
      <DisplayQrCode link={link}/>
      <FooterAtribution />
    </div>
  );
}

export default App;
