import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';

import {styles} from '../styles';
import {experiences} from '../constants';
import {SectionWrapper} from '../hoc';

const ExperienceCard = ({experience}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{background: '#1d1836', color: '#fff'}}
      contentArrowStyle={{borderRight: '7px solid #232631'}}
      iconStyle={{background: experience.iconBg}}
      icon={
        <div className="bg-black rounded-full flex justify-center items-center w-full h-full">
          <img
            loading="lazy"
            src={experience.icon}
            alt={experience.icon}
            className="w-[75%] h-[75%] object-contain"
          />
        </div>
      }
    >
      <div className="flex justify-center">
        <h3 className="text-[#b9a7c4] text-[24px] font-bold">
          {experience.title}
        </h3>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <div>
        <h2 className={styles.sectionHeadText}>Experience.</h2>
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'Experience');
