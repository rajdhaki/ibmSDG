
const NewsCard = ({news}) => {
    const {title, description, urlToImage, url, author, source, publishedAt} = news;
    const date = new Date(publishedAt);
    console.log(date.getMonth());
    console.log(news);

    const truncate = (title, wordCount) => {
        if(!title) return ' ';
        const words = title.split(' ');
        if(words.length>wordCount){
          return words.slice(0, wordCount).join(' ')+'....';
        }
        return title;
    };

  return (
    
    // <div >
    //     <div className='flex justify-center relative' >

    //     <div className='w-[50%] h-[100%]'>
    //         <img src={urlToImage} alt="Article Image" className='w-full h-full object-contain' /> 
    //     </div>


    //     <div className='w-[50%] flex  flex-col gap-4 p-7'>
    //         <p className='text-xl font-bold'> {index+1}. {title} </p>
    //         <p> {description} <a href={url} target="_blank" className='font-semibold underline' >Continue Reading</a> </p>
    //         <div className='flex flex-col text-left absolute bottom-10'>
    //         {author? (
    //                 <p> <span  className='font-bold'>Source : </span> {truncate(source.name, 3)} </p>
    //             ) : null }
                
    //             {author? (
    //                 <p> <span  className='font-bold'>Author : </span> {truncate(author, 3)}  </p>
    //             ) : null }
                
    //         </div>
            
    //     </div>

    //     </div>
    // </div>
    <div className="m-1 flex justify-center">
     <div className="flex flex-col bg-white w-[330px] h-[350px] rounded-md mt-2 overflow-hidden relative" style={{boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
        <div className="h-[210px]">
            <img src={urlToImage} alt="Image" className="object-cover h-full w-full"/>
        </div>
        <div className="flex-1 pt-1 px-2" >
            <p className="font-bold text-md">{title}</p>
            <div className="text-sm mt-1">{truncate(description,10)}</div>
            <div>
                {author && <div className="absolute bottom-0">Author: <span className="font-bold">{truncate(author,3)}</span></div>}
            </div>
        </div>
     </div>
     </div>
  )
}

export default NewsCard


