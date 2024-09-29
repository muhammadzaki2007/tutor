// import axios from 'axios';
// import { useState } from 'react';

// function upload() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [biodata, setBiodata] = useState('');
//   const [image, setImage] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('email', email);
//     formData.append('biodata', biodata);
//     formData.append('image', image);

//     try {
//       await axios.post('http://localhost:5000/api/users', formData);
//       alert('User created successfully!');
//     } catch (error) {
//       console.error('Error creating user:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
//       <textarea value={biodata} onChange={(e) => setBiodata(e.target.value)} placeholder="Biodata"></textarea>
//       <input type="file" onChange={(e) => setImage(e.target.files[0])} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default upload;
