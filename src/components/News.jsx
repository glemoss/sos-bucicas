

export default function News() {
  return (
    <div>
       <h3 className="mb-4 text-3xl font-bold">Notícias</h3>
      <div className="flex justify-between items-center gap-5 flex-col md:flex-row md:justify-around">
         {Array(4).fill().map((_,i) => (
           <div
             key={i}
             className="shadow-md rounded-md p-3 cursor-default"
           >
             <div className="text-yellow-500 text-2xl font-medium">Lorem Ipsum</div>
             <div className="font-small text-gray-500 mb-3">21/10/2021 - Florianópolis</div>
             <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula auctor porttitor massa, in consequat id ac.</div>
             <div className="flex justify-end mt-3">
               <span className="text-yellow-500 text-xl hover:text-yellow-600 cursor-pointer">
                 Saiba mais
               </span>
             </div>
           </div>
         ))}
       </div>
    </div>
  )
}
