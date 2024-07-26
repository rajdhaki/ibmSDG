
const NewsCard = ({news, index}) => {

    const {title, description, urlToImage, url, author, source} = news;

    const truncate = (title, wordCount) => {
        if(!title) return ' ';
        const words = title.split(' ');
        if(words.length>wordCount){
          return words.slice(0, wordCount).join(' ')+'....';
        }
        return title;
    };

  return (
    
    <div >
        <div className='flex justify-center relative' >

        <div className='w-[50%] h-[100%]'>
            <img src={urlToImage} alt="Article Image" className='w-full h-full object-contain' /> 
        </div>


        <div className='w-[50%] flex  flex-col gap-4 p-7'>
            <p className='text-xl font-bold'> {index+1}. {title} </p>
            <p> {description} <a href={url} target="_blank" className='font-semibold underline' >Continue Reading</a> </p>
            <div className='flex flex-col text-left absolute bottom-10'>
            {author? (
                    <p> <span  className='font-bold'>Source : </span> {truncate(source.name, 3)} </p>
                ) : null }
                
                {author? (
                    <p> <span  className='font-bold'>Author : </span> {truncate(author, 3)}  </p>
                ) : null }
                
            </div>
            
        </div>

        </div>
    </div>
  )
}

export default NewsCard


