import './App.css';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import { useState } from 'react';

function App() {
  const [value, setSet] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  function generate(link) {
    QRCodeLink.toDataURL(link, {
      width: 500,
      margin: 3
    }, (err, url) => {
      setQrCodeUrl(url);
    });
  }

  function handleQrCode(e){
    setValue(e.target.value);
    generate(e.target.value);
  }

  return (
    <div className='container'>
      <div className='card'>
        <strong className='title'>Gerador de QRCode</strong>
        <span class="subtitle">Insira uma URL ou texto para criar seu QRCode</span>

        <input type="text" value={value} onChange={(e) => handleQrCode(e)} className="input" placeholder='Seu texto aqui...' />

        <div className='qrcode'>
          <QRCode value={value} size={96} elevation={2}/>
        </div>

        <a href={qrCodeUrl} download='qrcode.png' className='btn-download'>Download</a>

      </div>
    </div>
  )
}

export default App
