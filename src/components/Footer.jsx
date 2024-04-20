import Tilt from 'react-parallax-tilt';
import {motion} from 'framer-motion';

import {socialNetworks} from '../constants';
import {fadeIn} from '../utils/motion';

const SocialNetwork = ({title, icon, link}) => {
  return (
    <motion.footer
      variants={fadeIn('', '', 0.25, 1)}
      initial="hidden"
      whileInView="show"
    >
      <div
        className="w-10 h-10 max-[420px]:w-[35px] max-[420px]:h-[35px] mx-3 cursor-pointer flex"
        onClick={() => window.open(link, '_blank')}
      >
        <img loading="lazy" src={icon} alt={title} className="object-contain" />
      </div>
    </motion.footer>
  );
};

const Footer = () => {
  return (
    <>
      <Tilt
        glareEnable={true}
        tiltEnable={false}
        glareMaxOpacity={0.1}
        glareColor="white"
        glarePosition="all"
      >
        <div className="bg-[#100d2b] opacity-85 px-12 min-h-[80px] flex max-[550px]:flex-col-reverse justify-evenly items-center  hover:bg-black">
          <div>
            <motion.p
              variants={fadeIn('', '', 0.25, 1)}
              initial="hidden"
              whileInView="show"
              className="max-[420px]:text-[12px]"
            >
              Diego G. G. <span className="text-[#853eaf]"> | </span> Portfolio
              <span className="text-[#853eaf]"> - </span> 2024
            </motion.p>
          </div>

          <div className="flex">
            {socialNetworks.map((social) => (
              <SocialNetwork key={social.title} {...social} />
            ))}
          </div>
        </div>
      </Tilt>
    </>
  );
};

export default Footer;
