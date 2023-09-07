import Tilt from 'react-parallax-tilt';

import {styles} from '../styles';
import {github} from '../assets';
import {SectionWrapper} from '../hoc';
import {projects} from '../constants';

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  link_live,
}) => {
  return (
    <div>
      <Tilt
        options={{max: 45, scale: 1, speed: 450}}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full hover:bg-black"
        glareEnable={true}
        glareMaxOpacity={0.1}
        glareColor="white"
        glarePosition="all"
        glareBorderRadius="10px"
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
      >
        <div className="relative w-full h-[230px]">
          <div
            className="absolute inset-0 flex justify-end card-img_hover cursor-pointer hover:rounded-2xl hover:border-[2px] hover:border-white"
            onClick={() => window.open(link_live, '_blank')}
          >
            <img
              loading="lazy"
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex gap-2 justify-between">
          <div className="mt-4 flex gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text=[14px] ${tag.color}`}>
                {tag.name}
              </p>
            ))}
          </div>
          <div
            onClick={() => window.open(source_code_link, '_blank')}
            className="bg-black w-10 h-10 rounded-full border-[1px] border-black flex justify-center items-center cursor-pointer hover:border-white"
          >
            <img
              loading="lazy"
              src={github}
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <div>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Presenting a selection of my projects that show my experience. Each
          project is accompanied by concise descriptions of technologies I used
          and links to code repositories and live demonstrations.
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, 'Projects');
