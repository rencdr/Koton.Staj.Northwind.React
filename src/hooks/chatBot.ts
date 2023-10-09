import { useEffect, useState } from 'react';
import axios from 'axios';

function useChatBot() {
  const [messages, setMessages] = useState<string[]>([]);
  const [soru, setSoru] = useState<string>('');

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/chat')
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.error('API isteği başarısız oldu:', error);
      });
  }, []);

  const sendMessage = (soru: string) => {
    axios.post('http://127.0.0.1:5000/api/chat', { soru })
      .then((response) => {
        setMessages([...messages, response.data.cevap]);
        setSoru('');
      })
      .catch((error) => {
        console.error('API isteği başarısız oldu:', error);
      });
  };

  return { messages, soru, setSoru, sendMessage };
}

export default useChatBot;
