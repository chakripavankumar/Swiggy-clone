const Contact = () => {
    return (
        <div>
           
            <h1 className="font-extrabold p-10 m-10  text-4xl" > contact page</h1>
     <form>
                <input type="text" placeholder="name" className=" p-2 m-2  border-black" />
                <input type="text" placeholder="message" className=" p-2 m-2  border-black" />
               <button className="border-black p-2 m-2 bg-gray-100 rounded-lg">submit</button>
            
           </form>
        </div>

    )
}

export default Contact;