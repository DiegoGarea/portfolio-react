import {useState, useRef} from 'react';
// import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';

import {styles} from '../styles';
import {SatelliteCanvas} from './canvas';
import {SectionWrapper} from '../hoc';
// import {slideIn} from '../utils/motion';
import {StarsCanvas} from '../components';
import {useMobileCheck} from '../utils/isMobileCheck';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const isMobile = useMobileCheck();

  const handleChange = (e) => {
    const {name, value} = e.target;

    setForm({...form, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_4uteuf8',
        'template_v07p0fr',
        {
          from_name: form.name,
          to_name: 'Diego',
          from_email: form.email,
          to_email: 'diegogarea87@gmail.com',
          message: form.message,
        },
        'qJx9GhunAj2joSJsV'
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);

          alert('Something went wrong.');
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <div className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <h3 className={`${styles.heroHeadText} text-[#5f158a]`}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white fonmt-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white fonmt-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white fonmt-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              required
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>

      {isMobile ? (
        <div
          // variants={slideIn('right', 'tween', 0.2, 1)}
          className="xl:flex-1 xl:h-auto xl:w-auto mg:h-[550px] h-[350px]"
        >
          <SatelliteCanvas />
        </div>
      ) : (
        <div className="xl:flex-1 xl:h-auto xl:w-auto mg:h-[550px] h-[350px]">
          <SatelliteCanvas />
          <StarsCanvas />
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
