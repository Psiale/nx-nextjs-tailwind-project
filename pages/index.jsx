
import { supabase } from '../utils/supabase';
import Link from 'next/link';

const Home = ({lessons}) => {
  console.log(lessons);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {lessons.map(lesson => (<>
      <Link key={lesson.id} href={`/${lesson.id}`}>
        <a>
          <h2>{lesson.title}</h2>
        </a>      
      </Link>
      </>))}
    </div>
  )
}

export const  getStaticProps = async () =>  {
  const { data: lessons } = await supabase.from('lesson').select('*')  

  return {
    props: {
      lessons,
    }
  }
}

export default Home
