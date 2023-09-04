import Tilt from 'react-parallax-tilt';

import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import {SectionWrapper} from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      glareEnable={true}
      glareMaxOpacity={0.2}
      glareColor="white"
      glarePosition="all"
      glareBorderRadius="20px"
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      scale={1.07}
    >
      <div
        variants={fadeIn('right', 'spring', 0.3 * index, 0.75)}
        className="w-full bg-gradient-to-r from-indigo-600 p-[1px] rounded-[20px] shadow-card hover:bg-indigo-600"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col hover:bg-black">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <p
        variants={fadeIn('', '', 0.3, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[28px]"
      >
        Hello! and welcome to my front-end portfolio. Here, you'll find a
        collection of my work that showcases my skills in web design and
        development. My dedication to staying updated with the latest industry
        trends ensures that I bring fresh and innovative approaches to every
        project.
      </p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
