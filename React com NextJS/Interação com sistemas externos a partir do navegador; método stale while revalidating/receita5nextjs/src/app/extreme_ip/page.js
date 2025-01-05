"use client";  // Adiciona essa linha para garantir que o código execute no cliente

import { useEffect, useState } from 'react';

export default function ExtremeIP() {
  const [ipData, setIpData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Faz a requisição para obter os dados do IP
    fetch('https://extreme-ip-lookup.com/json/?key=mugOovnBbH4hd8UlaHW2')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao acessar a API');
        }
        return response.json();
      })
      .then(data => {
        setIpData(data);
      })
      .catch(error => {
        setError(error.message);
        console.error('Erro ao obter dados da API:', error);
      });
  }, []);

  if (error) {
    return <div>Erro: {error}</div>;
  }

  // Exibe uma mensagem de carregamento enquanto os dados não chegam
  if (!ipData) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Informações do IP</h1>
      <p><strong>Endereço IP:</strong> {ipData.query}</p>
      <p><strong>Nome do IP:</strong> {ipData.ipName}</p>
      <p><strong>Tipo de IP:</strong> {ipData.ipType}</p>
      <p><strong>Organização:</strong> {ipData.org}</p>
      <p><strong>ASN:</strong> {ipData.asn} - {ipData.asnName}</p>
      <p><strong>ISP:</strong> {ipData.isp}</p>
      <p><strong>Localização:</strong> {ipData.city}, {ipData.region}, {ipData.country} ({ipData.continent})</p>
      <p><strong>Latitude:</strong> {ipData.lat}</p>
      <p><strong>Longitude:</strong> {ipData.lon}</p>
      <p><strong>Fuso horário:</strong> {ipData.timezone} (UTC {ipData.utcOffset})</p>
    </div>
  );
}
