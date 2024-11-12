import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { MdInsertEmoticon } from "react-icons/md";

export function FooterChat() {
  const [message, setMessage] = React.useState('');

  const handleSendMessage = (event) => {
    event.preventDefault();
    console.log(message); 
    setMessage(''); 
  };

  return (
    <div className="bg-stone-900 left-0 bottom-0 w-full p-4 flex justify-items-center">
      <Stack direction="row" spacing={0}>
        <Button className='text-slate-300'>
          {<MdInsertEmoticon className='text-white w-7 h-7' />}
        </Button>
      </Stack>
      <form className="relative w-full" onSubmit={handleSendMessage}>
        <input
          type="text"
          className="bg-stone-800 p-2 outline-none w-full rounded-2xl text-gray-300"
          placeholder='Escriba su mensaje...'
          value={message}
          onChange={(e) => setMessage(e.target.value)} 
        />
      </form>
      <Stack direction="row" spacing={0}>
        <Button onClick={handleSendMessage}>
          {<SendIcon className='text-white' />}
        </Button>
      </Stack>
    </div>
  );
}

