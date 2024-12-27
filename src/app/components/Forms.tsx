export default function Forms() {
  return (
<div >
      <h1 className="uppercase text-6xl text-center font-serif">enter your detail</h1>

      <form className="flex  justify-center gap-2 flex-col items-center mt-10  content-center ">
        <input
          type="email"
          className="border-2 border-stone-950 px-1 rounded-md w-64"
          placeholder="enter email"
        />
        <input
          type="password"
          className="border-2 border-neutral-950 px-1 rounded-md w-64 mt-4"
          placeholder="enter password"/>
            <button className="border border-black bg-black text-white rounded-lg w-32 p-1 mt-5 ">submit </button>
      </form>
    
    </div>
  );
}
