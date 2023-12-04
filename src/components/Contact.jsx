import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom"
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { Snackbar, Alert } from "@mui/material";

const Contact = () => {
  const formRef = useRef();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleApiCall = async () => {
    try {
      // Perform your API call here
      // Example: const response = await apiCall();

      // Assuming a successful response
      setSnackbarSeverity('success');
      setSnackbarMessage('API call was successful!');
      setSnackbarOpen(true);
    } catch (error) {
      // Handle API call failure
      setSnackbarSeverity('error');
      setSnackbarMessage('API call failed!');
      setSnackbarOpen(true);
    }
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    //template_kxk6bkd service_0qk5i87 nWqoDIu3D_hJF0Hrc

    emailjs
      .send(
        'service_0qk5i87',
        'template_kxk6bkd',
        {
          from_name: form.name,
          to_name: "Prasad Bhosle",
          from_email: form.email,
          to_email: "prasadb43@gmail.com",
          message: form.message,
        },
        'nWqoDIu3D_hJF0Hrc'
      )
      .then(
        () => {
          setLoading(false);
          // alert("Thank you. I will get back to you as soon as possible.");
          setSnackbarSeverity('success');
          setSnackbarMessage('Thank you. I will get back to you as soon as possible!');
          setSnackbarOpen(true);

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          setSnackbarSeverity('error');
          setSnackbarMessage('Ahh, something went wrong. Please try again.!');
          setSnackbarOpen(true);

          // alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl mx-auto'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className={`${form.email === '' || form.name === '' || form.message === '' ? "bg-secondary" : "bg-tertiary"
              }  py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary`}


            disabled={form.email === '' || form.name === '' || form.message === ''}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div> */}

      <Snackbar open={snackbarOpen}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}>
        <Alert severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>

      {/* <Link
        to="/"
        className='flex items-center gap-2'
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <p
          className={`bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary`}

        >
          To Top
        </p>
      </Link> */}
    </div>

  );
};

export default SectionWrapper(Contact, "contact");