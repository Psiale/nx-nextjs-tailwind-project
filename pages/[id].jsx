import { supabase } from "../utils/supabase";


const LessonDetails = ({lesson}) => {
  return (
    <div> Lesson Detail </div>
  )
}

export const getStaticPath = async () => {
  const { data: lessons } = await supabase.from('lesson').select('id');
  const paths = lessons.map(({id}) => {
    params: {
      id: id.toString()
    }
  })

  return {
    paths,
    fallback: false 
  }
}

export const getStaticProps = async ({params: {id}}) => {
  const { data: lesson } = await supabase.from('lesson').select().eq('id', id).single

  return {
    props: {
      lesson,
    }
  }
}

export default LessonDetails;