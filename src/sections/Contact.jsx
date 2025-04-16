// import emailjs from '@emailjs/browser';
// import { useRef, useState } from 'react';

// import useAlert from '../hooks/useAlert.js';
// import Alert from '../components/Alert.jsx';

// const Contact = () => {
//   const formRef = useRef();

//   const { alert, showAlert, hideAlert } = useAlert();
//   const [loading, setLoading] = useState(false);

//   const [form, setForm] = useState({ name: '', email: '', message: '' });

//   const handleChange = ({ target: { name, value } }) => {
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .send(
//         import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
//         {
//           from_name: form.name,
//           to_name: 'Sahil Chavan',
//           from_email: form.email,
//           to_email: 'sahildchavan04@gmail.com',
//           message: form.message,
//         },
//         import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
//       )
//       .then(
//         () => {
//           setLoading(false);
//           showAlert({
//             show: true,
//             text: 'Thank you for your message 😃',
//             type: 'success',
//           });

//           setTimeout(() => {
//             hideAlert(false);
//             setForm({
//               name: '',
//               email: '',
//               message: '',
//             });
//           }, [3000]);
//         },
//         (error) => {
//           setLoading(false);
//           console.error(error);

//           showAlert({
//             show: true,
//             text: "I didn't receive your message 😢",
//             type: 'danger',
//           });
//         },
//       );
//   };

//   return (
//     <section className="c-space my-20" id="contact">
//       {alert.show && <Alert {...alert} />}

//       <div className="relative min-h-screen flex items-center justify-center flex-col">
//         <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

//         <div className="contact-container">
//           <h3 className="head-text">Let's talk</h3>
//           <p className="text-lg text-white-600 mt-3">
//             Looking to build cutting-edge AI/ML solutions? I bring expertise in 
//             computer vision, and AI-powered innovation, let's make an impact together!
//           </p>

//           <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
//             <label className="space-y-3">
//               <span className="field-label">Full Name</span>
//               <input
//                 type="text"
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 required
//                 className="field-input"
//                 placeholder="ex., Sahil Chavan"
//               />
//             </label>

//             <label className="space-y-3">
//               <span className="field-label">Email address</span>
//               <input
//                 type="email"
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 required
//                 className="field-input"
//                 placeholder="ex., sahildchavan04@gmail.com"
//               />
//             </label>

//             <label className="space-y-3">
//               <span className="field-label">Your message</span>
//               <textarea
//                 name="message"
//                 value={form.message}
//                 onChange={handleChange}
//                 required
//                 rows={5}
//                 className="field-input"
//                 placeholder="Share your thoughts or inquiries..."
//               />
//             </label>

//             <button className="field-btn" type="submit" disabled={loading}>
//               {loading ? 'Sending...' : 'Send Message'}

//               <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({ success: null, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setResponse({ success: true, message: 'Thank you for your message 😃' });
          setForm({ name: '', email: '', message: '' });

          setTimeout(() => setResponse({ success: null, message: '' }), 3000);
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setLoading(false);
          setResponse({ success: false, message: 'Failed to send message. Please try again 😢' });
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="max-w-xl w-full">
        <h2 className="text-3xl font-bold mb-6">Let's Talk</h2>

        {response.message && (
          <p className={`mb-4 ${response.success ? 'text-green-400' : 'text-red-400'}`}>
            {response.message}
          </p>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
              placeholder="ex., Sahil Chavan"
            />
          </div>

          <div>
            <label className="block mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
              placeholder="ex., sahildchavan04@gmail.com"
            />
          </div>

          <div>
            <label className="block mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white font-semibold"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
