import { async } from 'q';
import { useState, useEffect } from 'react';
import './Instagram.css';



function Instagram() {

  const [data1, setData] = useState()

  let token = 'IGQVJVcGpzV01OZAi1jd0tKMzNZAVU5GN19JdW93NXBZANncwQ3IydlpRRldsQWt3RWgwS01WTG9RcWNvNk81eVdBZAEREbkVMVFNSWVMzclZAFbEZASNlhhZAFlLVjhsZAkRYOWtDT0hRYnlPRzdRUXZAPRUZAkcwZDZD'

  
  // useEffect(() => {
  //   fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${token}`, { method: 'no-cors', headers: {
  //     'Access-Control-Allow-Origin': '*',
  //   },})
    
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data)
  //     });
  // }, []);

 
 

// const dsfsd = async () => {
//   const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${token}`
//   const data = await fetch(url)
//   const feed = data.json()
//   setData(feed)

// }

console.log(data1)


  

  
  return (
    <div className='main-container-notepad'>
      <div className='notepad-header'>
        <div>inst</div>
        <button >get</button>
       
      </div>
    </div>
  );
}

export default Instagram;
