

export default function Works() {
  return (
    <div>
       <h3 className="mb-6 text-3xl font-bold">Doações</h3>
        <div className="flex justify-between items-center gap-5 flex-col md:flex-row md:justify-around">
        
         {Array(3).fill().map((_,i) => (
           <div
           style={{boxShadow: '0 1rem 1rem 0' }}
             key={i}
             className="shadow-md rounded-md p-3 cursor-default"
           >
             <div className="text-yellow-500 text-2xl font-medium">Castração de Pet</div>
             <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula auctor porttitor massa, in consequat id ac.</div>
             <div className="flex justify-center space-between mt-3">
               <button style={{background: "#f59e0b", borderRadius: '10px', height:'3rem', width:'6rem', fontWeight: '900'}} className="text-white text-xl hover:text-yellow-600 cursor-pointer">
                 Doar
               </button>
             </div>
           </div>
         ))}
       </div>
    </div>
  )
}
