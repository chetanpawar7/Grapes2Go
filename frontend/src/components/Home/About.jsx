export default function Hero() {
  return (
  <>
  <h1 className="mt-3 text-5xl font-bold text-center bg-base-200">About Us</h1>
<div className="hero min-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Who we are ?</h1>
      <p className="py-6">
Welcome to Grapes2Go, your ultimate destination for everything grape-related! We are a passionate team of agricultural experts, tech enthusiasts, and grape aficionados dedicated to revolutionizing the way grape farming is managed and experienced</p>
      <button className="btn btn-primary">Join us</button>
    </div>
  </div>
</div>
</>

  );
}
