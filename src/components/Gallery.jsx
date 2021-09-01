

export default function Gallery() {
  return (
    <div className="sm:p-4">
      <h3 className="text-3xl font-bold mb-8">Galeria</h3>
      <div className="flex flex-wrap justify-around gap-4">
          {Array(6).fill(0).map((_, i) => (
            <div
              key={i}
              className="bg-yellow-400 rounded-md"
              style={{
                height:"150px",
                width:"150px",
                backgroundImage: "url()",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          ))}
      </div>
    </div>
  )
}
