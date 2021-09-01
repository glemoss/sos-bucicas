
export default function Pet() {
  return (
    <div className="bg-yellow-500">
        <div
        className="md:container mx-auto grid md:grid-cols-2 items-center text-white"
        >
            <div
                className="flex rounded-lg"
                style={{
                    height: "40rem",
                    backgroundImage: 
                        "url(https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }}
            />
            <div className="flex flex-col items-center mt-10">
                <h3 className="text-3xl font-bold">Conheça a gatinha Meg</h3>
                <br/>
                <div className="max-w-md text-">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi quam facilisis aliquam duis scelerisque id est. Lorem a sed amet dui, sit morbi a. Amet, arcu mauris gravida sapien euismod. Nec rhoncus sed sit a ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi quam facilisis aliquam duis scelerisque id est. Lorem a sed amet dui, sit morbi a. Amet, arcu mauris gravida sapien euismod. Nec rhoncus sed sit a ut.</p>
                </div>
                <br/>
                <div className="flex flex-col sm:flex-row sm:justify-around w-4/5 md:max-w-xl">
                    <button className="py-2 rounded-md bg-white text-yellow-500 sm:w-44">
                        SEJA UM DOADOR
                    </button>
                    <button className="py-2 rounded-md bg-white text-yellow-500 sm:w-24 mt-2 sm:mt-0">
                        ADOTE
                    </button>
            </div>
            </div>
        </div>
    </div>
  );
};