import { Instagram, Linkedin, Github, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom';
import technest from '@/assets/technest.jpg'

const About = () => {
  return (
    <>
      <h1 className="text-center text-7xl px-4 py-2 mt-8 font-extrabold ">About Us</h1>

      <h1 className="text-center text-5xl px-4 py-4 mb-8 font-bold">Driven By Passion,<br className='mb-4' /> Guided By Innovation!</h1>

      <div className="flex flex-wrap flex-row justify-around my-10 shadow-lg">
        <div className="flex flex-row ">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl ">TechNest</h1>
          <img src={technest} alt="technest " className="h-[200px] w-[200px]" />
            <div className="flex flex-row">
              <Link to="https://github.com/Tech-Nest-Hub" className="m-4 p-2"><Github className='text-black dark:text-white' size={40} /></Link>
              <Link to="https://www.linkedin.com" className="m-4 p-2"><Linkedin color="#00b3ff" size={40} /></Link>
              <Link to="https://www.youtube.com/@technest-0" className="m-4 p-2"><Youtube size={40} color="#ff0000" /></Link>
              <Link to="https://www.instagram.com/_tech.nest__/" className="m-4 p-2"><Instagram size={40} color="#e22222" /></Link>
            </div>
          </div>

        </div>

        <div className="w-[500px] px-10 mx-5">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus corrupti mollitia sed. Eaque magni consequatur ipsum eum saepe. Doloremque necessitatibus, doloribus autem distinctio illum deleniti repudiandae quia minima similique veniam.</p>
        </div>



      </div>

      <div className="flex flex-wrap justify-around my-10 shadow-lg">
        <div className="w-[450px]">
          <h1 className="text-4xl mb-5 text-bold">Aakash Subedi</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores cupiditate nisi cum nesciunt ratione excepturi quisquam at commodi fuga quod quia, labore in id ut dignissimos nam sint impedit. Rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sequi obcaecati id odit exercitationem sapiente vel repudiandae dicta, voluptas sint dolor enim! Alias omnis eaque molestiae accusamus delectus, asperiores quod?</p>
        </div>

        <div className="w-[250px] h-[300px] ">
          <img src="" alt="ghost " />
        </div>

        <div>
          <div >
            <h1 className="text-5xl">21+</h1>
            <h1 className="text-2xl">Projects Done</h1>
          </div>
          <div>
            <h1 className="text-5xl">4+</h1>
            <h1 className="text-2xl">Years of Experience</h1>
          </div>
          <div>
            <h1 className="text-5xl">10+</h1>
            <h1 className="text-2xl">Programming Languages</h1>
          </div>
        </div>

        <div className="">
          <Link to="https://github.com/Ghost9841" className="m-4 p-2"><Github className='text-black dark:text-white' size={40} /></Link>
          <Link to="https://www.linkedin.com" className="m-4 p-2"><Linkedin color="#00b3ff" size={40} /></Link>
          <Link to="https://www.instagram.com" className="m-4 p-2"><Instagram size={40} color="#e22222" /></Link>
        </div>
      </div>


      <div className="flex flex-wrap justify-around my-10 shadow-lg">
        <div className="w-[450px]">
          <h1 className="text-4xl mb-5 text-bold">Pratyush Tamrakar</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores cupiditate nisi cum nesciunt ratione excepturi quisquam at commodi fuga quod quia, labore in id ut dignissimos nam sint impedit. Rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sequi obcaecati id odit exercitationem sapiente vel repudiandae dicta, voluptas sint dolor enim! Alias omnis eaque molestiae accusamus delectus, asperiores quod?</p>
        </div>

        <div className="w-[250px] h-[300px] ">
          <img src="" alt="tech-nest: the future of tech " />
        </div>

        <div>
          <div >
            <h1 className="text-5xl">4+</h1>
            <h1 className="text-2xl">Projects Done</h1>
          </div>
          <div>
            <h1 className="text-5xl">2+</h1>
            <h1 className="text-2xl">Years of Experience</h1>
          </div>
          <div>
            <h1 className="text-5xl">5+</h1>
            <h1 className="text-2xl">Programming Languages</h1>
          </div>
        </div>

        <div className="">
          <Link to="https://github.com/Pratyush827" className="m-4 p-2"><Github className='text-black dark:text-white' size={40} /></Link>
          <Link to="https://www.linkedin.com" className="m-4 p-2"><Linkedin color="#00b3ff" size={40} /></Link>
          <Link to="https://www.instagram.com" className="m-4 p-2"><Instagram size={40} color="#e22222" /></Link>
        </div>
      </div>
    </>
  );
}

export default About;