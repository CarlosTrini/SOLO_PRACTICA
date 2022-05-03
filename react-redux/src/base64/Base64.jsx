import React, {useState} from 'react'

const base64 = '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';

const Base64 = () => {
  const [base, setBase] = useState('');
  const [url, setUrl] = useState('#')
  const [file, setFile] = useState('');
 // const handleImage = () => setBase(`data:image/jpeg;base64,${base64}`);

  const handleInput = async(e) => {
  const image = URL.createObjectURL(e.target.files[0])
  console.log(image)
setUrl(image)
    // setFile(e.target.files[0]);
    // const myFile = e.target.files[0]
    // const reader = new FileReader();
    // reader.readAsDataURL(myFile);
    // reader.onload = () =>{
    //    console.log('bien', reader.result);
    //    setUrl(reader.result)
    // }
    // reader.onerror = (err) => console.log('mal', err);
  }

  const handleSendImage = async() => {
    const formData = new FormData();
    formData.append('file', file );
    formData.append('name', 'Mi imagen' );

    const res = await axios.post(
      res,
      formData,
      {
          headers: {
              'Content-Type': 'multipart/form-data'
          },
          onUploadProgress (e) {
              let progress = Math.round((e.loaded * 100.0) / e.total);
              console.log(progress);
              imageUploadbar.setAttribute('value', progress);
          }
      }
  );

  }

  return (
    <div>
      {/* <img src={base} alt=" imagen" />
      <button onClick={handleImage}  >Show image</button> */}
      <hr />
      <input type="file" name="" id="" accept='image/*' onChange={handleInput} />
      <img src={`${url}`} alt="" />

     <button onClick={handleSendImage} >sendImage</button> 
    </div>
  )
}

export default Base64